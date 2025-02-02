import { tool } from "ai";
import {
  createWalletClient,
  http,
  parseUnits,
  type Account,
  type Hex,
} from "viem";
import { getAccountBalances, getMarketData } from "../../data";
import { z } from "zod";
import { retrievePastReports } from "../../memory";
import {
  FeeAmount,
  getCurrentAddressInfo,
  initAddress,
  PoolType,
  PoolV3Api,
  SwapConfig,
  Token,
  Trace,
  WalletConnect,
} from "agni-sdk";
import { getChain } from "../../utils/chain";
import env from "../../env";

initAddress("prod_node");
const agniFinanceAddressInfo = getCurrentAddressInfo();
console.log("[agniFinanceAddressInfo] info", agniFinanceAddressInfo);

export const getObserverToolkit = (address: Hex, account: Account) => {
  console.log("observer addr", address);
  return {
    getPastReports: tool({
      description:
        "A tool that returns the past reports that contain information about previously executed actions.",
      parameters: z.object({
        question: z
          .string()
          .describe(
            "The question to retrieve past reports for. If you are thinking about performing operations with USDC for example, you could generate a question to ask to your memory."
          ),
      }),
      execute: async ({ question }) => {
        console.log("======== getPastReports Tool =========");
        console.log(
          `[getPastReports] retrieving past reports with question: ${question}`
        );
        const reports = await retrievePastReports(question);

        if (!reports || reports.length === 0) {
          return "No past reports found. This is ok, it means that you're thinking about a new operation.";
        }

        console.log(`[getPastReports] reports retrieved: ${reports.length}`);

        return reports
          .map(
            (report: any) =>
              `Report containing the operations done the ${report.created_at}:\n${report.content}\n`
          )
          .join("\n");
      },
    }),
    getWalletBalances: tool({
      description: "A tool that returns the current balances of your wallet.",
      parameters: z.object({}),
      execute: async () => {
        console.log("======== getWalletBalances Tool =========");
        console.log(
          `[getWalletBalances] fetching token balances for ${address}...`
        );
        const { balances } = await getAccountBalances(address);

        console.log(`[getWalletBalances] balances fetched: ${balances}`);

        const tokenBalances = balances
          ?.filter(
            (balance: any) =>
              balance.platform === "native" || balance.platform === "basic"
          )
          .map(
            (balance: any) =>
              `[${balance.symbol}] balance: ${balance.balance} $${balance.balanceUSD}) - price: $${balance.price}`
          )
          .join("\n");

        const formattedBalances = balances
          .filter(
            (balance: any) =>
              balance.platform !== "native" && balance.platform !== "basic"
          )
          .map(
            (balance: any) =>
              `[${balance.symbol}] balance: ${balance.balance} $${
                balance.balanceUSD
              }) on protocol ${balance.platform.replace("-", " ")} with APY ${
                balance.metrics.apy
              }%`
          )
          .join("\n");

        console.log(`[getWalletBalances] balances fetched correctly.`);
        return `This is the current status of the wallet with address ${address}:\nTokens:\n${tokenBalances}\nOpen positions:\n${formattedBalances}`;
      },
    }),
    getMarketData: tool({
      description:
        "A tool that returns the current market data for USDC and EURC.",
      parameters: z.object({}),
      execute: async () => {
        console.log("======== getMarketData Tool =========");
        console.log(`[getMarketData] fetching market data...`);
        const marketData = await getMarketData();

        const formatTokens = (data: any) => {
          if (!data?.tokens || data.tokens.length === 0) {
            return "No opportunities found";
          }

          return data.tokens
            .map(
              (token: any) =>
                `[${token.name}] APY: ${token.metrics.apy}% - volume 1d: $${token.metrics.volumeUsd1d} - volume 7d: $${token.metrics.volumeUsd7d}`
            )
            .join("\n");
        };

        const usdcFormatted = formatTokens(marketData.usdc);
        const eurcFormatted = formatTokens(marketData.eurc);

        console.log(`[getMarketData] market data fetched correctly.`);
        return `These are the current market opportunities:\n\nUSDC Opportunities:\n${usdcFormatted}\n\nEURC Opportunities:\n${eurcFormatted}`;
      },
    }),
    getCurrentEurUsdRate: tool({
      description: "A tool that returns the current EUR/USD exchange rate.",
      parameters: z.object({}),
      execute: async () => {
        console.log("======== getCurrentEurUsdRate Tool =========");
        console.log(`[getCurrentEurUsdRate] fetching EUR/USD rate...`);

        try {
          const response = await fetch(
            "https://api.frankfurter.dev/v1/latest?symbols=USD"
          );
          const data = await response.json();
          const rate = data.rates.USD;

          console.log(
            `[getCurrentEurUsdRate] rate fetched successfully: ${rate}`
          );
          return `Current EUR/USD exchange rate: 1 EUR = ${rate} USD (as of ${data.date})`;
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
          return `Error fetching EUR/USD rate: ${errorMessage}`;
        }
      },
    }),
    noFurtherActionsTool: tool({
      description:
        "A tool that you decide to use when no further actions are needed.",
      parameters: z.object({
        reason: z
          .string()
          .describe("The reason why no further actions are needed."),
        waitTime: z
          .number()
          .describe(
            "The time to wait before executing the next action. This number must be logical to the operations you've done."
          ),
      }),
    }),
    getPortfolioActivityCrossChain: tool({
      description:
        "A tool that will give activity of the wallet Address/portfolio acorss all the different chains",
      parameters: z.object({}),
      execute: async () => {
        console.log(
          "======== Getting Portfolio Activity Cross Chains ========="
        );
        console.log(
          `[getPortfolioActivityCrossChain] fetching cross chain portfolio activity for: ${address}...`
        );

        try {
          const response = await fetch(
            `https://api.covalenthq.com/v1/address/${address}/activity/`
          );
          console.log("Activity fetched >>>", response);

          const data = await response.json();

          const activityItems = data.data.items;

          return `
        Sucessfully fetched the data from all the chains for the wallet address: ${address}. Got ${activityItems.length} of the data and the data is an array of objects: ${activityItems}
        `;
        } catch (error) {
          console.log("Error in fetching data", error);
          return `
        Error in getting data for this wallet address: ${error}
        `;
        }
      },
    }),
    getTokenBalanceForAddress: tool({
      description: `A tool that will get the multi chain balance for the wallet address. Users must specify: 
        - chainName: chain Name of the chain on which balance needs to be fetched
        `,
      parameters: z.object({
        chainName: z.enum([
          "eth",
          "base",
          "arbitrum",
          "avalanche",
          "btc",
          "solana",
          "mantle",
        ]), // Updated to use z.enum for custom type
      }),
      execute: async ({ chainName }) => {
        console.log("======== Getting Token balance for the address =========");
        console.log(
          `[getTokenBalanceForAddress] fetching token balance for address: ${address} on chain: ${chainName}...`
        );

        try {
          const res = await fetch(
            `https://api.covalenthq.com/v1/${chainName}-mainnet/address/${address}/balances_v2/`
          );
          const data = await res.json();

          const items = data.data.items;
          return `
          Sucessfully fetched the data from all the chains for the wallet address: ${address}. Got ${items.length} of the data and the data is an array of objects: ${items}
          `;
        } catch (error) {
          console.log("[getTokenBalanceForAddress]: Error", error);
          return `
          Error in getting token balance for the wallet address: ${error}
          `;
        }
      },
    }),
    getAgniFinanceSwap: tool({
      description: `Swap Tokens using Agni Finance. This is only available on mantle mainnet chainId:5000. 
      This tool only supports followind tokens:
      - MNT
      - WMNT
      - USDC
      - USDT
      - WETH
      - mETH
      `,
      parameters: z.object({
        fromToken: z
          .string()
          .describe("Enter from token which is spent by the user"),
        toToken: z
          .string()
          .describe("Enter to token which is required as output token"),
        fromAmount: z.string().describe("Enter Amount of the token"),
      }),
      execute: async ({ fromToken, toToken, fromAmount }) => {
        const poolV3Api = agniFinanceAddressInfo.getApi().poolV3Api();
        console.log("[getAgniFinanceLiquidity]: poolV3Api", poolV3Api);

        const tokenManagerApi = agniFinanceAddressInfo
          .getApi()
          .tokenMangerApi();
        console.log(
          "[getAgniFinanceLiquidity]: tokenManagerApi >>>",
          tokenManagerApi
        );

        const swapV3Api = agniFinanceAddressInfo.getApi().swapV3Api();
        console.log("[getAgniFinanceLiquidity]: Swap V3 API", swapV3Api);

        const deadline = 60 * 60 * 5;

        const swapConfig = {
          gasPriceWei: "100000000000",
          allowedSlippage: "0.0001",
          allowMultiHops: true,
          allowSplitRouting: true,
          allowedPoolTypes: [PoolType.V3],
        } as SwapConfig;

        const tokens = await agniFinanceAddressInfo
          .getApi()
          .tokenMangerApi()
          .batchGetTokens([fromToken, toToken]);

        const from_token = tokens[fromToken];
        const to_token = tokens[toToken];

        // Get trading pair information
        const swapInfo = await swapV3Api.swapInfo(
          from_token,
          to_token,
          address
        );

        console.log("[getAgniFinanceLiquidity]: Swap Info >>>>", swapInfo);

        const updateInputResult = await swapInfo.updateInput(
          from_token,
          fromAmount,
          swapConfig
        );

        Trace.log(
          "[getAgniFinanceLiquidity]: Price Token1 / Token0 ",
          updateInputResult.token0SwapPrice
        );
        Trace.log(
          "[getAgniFinanceLiquidity]: Price Token0 / Token1",
          updateInputResult.token1SwapPrice
        );

        const walletClient = createWalletClient({
          account,
          chain: getChain(parseInt(env.CHAIN_ID)),
          transport: http(),
        });

        const walletConnect = new WalletConnect(walletClient);
        const connectInfo = await walletConnect.connect();

        if (updateInputResult.canSwap) {
          // Whether you need to Approve
          if (swapInfo.token0Balance.showApprove(fromAmount)) {
            try {
              console.log(
                "Approving token",
                swapInfo.token0Balance.token.address
              );
              const tx = await swapInfo.token0Balance.approve(connectInfo);
              const hash = tx.hash();
              console.log("Successfully approve the token", hash);
            } catch (error) {
              console.log("Error in approving the tokens", error);
              return ` Encountered an error while approving the tokens: ${error}`;
            }
          }

          try {
            const transactionEvent = await swapInfo.swap(
              connectInfo,
              address,
              deadline
            );

            const transactionhash = transactionEvent.hash();
            return ` Transaction successful. Your transaction hash: ${transactionhash}`;
          } catch (error) {
            console.log("Error in approving the tokens", error);
            return ` Encountered an error whila executing the swap: ${error}`;
          }
        }
      },
    }),
  };
};

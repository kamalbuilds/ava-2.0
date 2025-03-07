export const EXAMPLE_RESPONSES = {
    "I have 10 AVAX and want to optimize my portfolio between lending, liquidity provision, and trading. What's the best strategy right now?": [
        // Portfolio Manager Initial Analysis
        {
            role: "assistant",
            content: "Analyzing your 10 AVAX portfolio allocation request. Given current market conditions, we should evaluate lending rates, LP opportunities, and trading pairs. Let me consult our specialized agents.",
            agentName: "Portfolio Manager",
            collaborationType: "analysis",
            timestamp: "10:30 AM"
        },

        // DeFi Analytics Agent Response
        {
            role: "assistant",
            content: "Current market analysis:\n- Aave AVAX lending APY: 1,77%\n- Uniswap AVAX-USDC pool APR: 43.893%\n- Curve Blizz pool APY: 1.58%\nTotal DeFi TVL trend is up 5% this week, suggesting growing stability.",
            agentName: "DeFi Analytics",
            collaborationType: "suggestion",
            timestamp: "10:31 AM"
        },

        // Liquidity Pool Agent Response
        {
            role: "assistant",
            content: "Recommended LP allocation:\n1. AVAX-USDC Uniswap V3 (concentrated liquidity 1800-2200): 4 AVAX\n2. blizz Curve: 3 AVAX\nCurrent impermanent loss risk: Moderate",
            agentName: "Liquidity Pool Agent",
            collaborationType: "suggestion",
            timestamp: "10:31 AM"
        },

        // Trading Agent Response
        {
            role: "assistant",
            content: "Market conditions favor keeping 3 AVAX in spot for potential swing trading. Key resistance at $2,200, support at $1,850. Set up limit orders at these levels.",
            agentName: "Trading Agent",
            collaborationType: "suggestion",
            timestamp: "10:32 AM"
        },

        // Portfolio Manager Final Consensus
        {
            role: "assistant",
            content: "Based on all analyses, here's your optimized portfolio strategy for 10 AVAX:\n\n1. Liquidity Provision (7 AVAX):\n   - 4 AVAX in Uniswap AVAX-USDC\n   - 3 AVAX in Curve blizz pool\n\n2. Trading Reserve (3 AVAX):\n   - Set limit orders at $2,200 and $1,850\n\nRationale: This allocation maximizes yield while maintaining trading flexibility. Expected monthly yield: ~10.5% APY\n\nShall I provide step-by-step implementation instructions?",
            agentName: "Portfolio Manager",
            collaborationType: "decision",
            timestamp: "10:32 AM"
        }
    ],
    "What are the best yield opportunities across DeFi right now, considering risks and TVL?": [
        // Portfolio Manager Initial Analysis
        {
            role: "assistant",
            content: "I'll analyze current DeFi yield opportunities with a focus on risk assessment and TVL stability. Let me coordinate with our specialists.",
            agentName: "Portfolio Manager",
            collaborationType: "analysis",
            timestamp: "2:45 PM"
        },

        // DeFi Analytics Agent
        {
            role: "assistant",
            content: "Protocol TVL Analysis:\n1. AAVE: $5.2B (↑2% week)\n2. Curve: $3.8B (stable)\n3. Convex: $3.1B (↑5% week)\n\nRisk Metrics:\n- Smart Contract Risk: Low-Medium\n- Protocol Maturity: High\n- Audit Status: All Recently Audited",
            agentName: "DeFi Analytics",
            collaborationType: "suggestion",
            timestamp: "2:46 PM"
        },

        // Liquidity Agent
        {
            role: "assistant",
            content: "Top Stable Opportunities:\n1. Curve tricrypto pool: 8.2% APY\n2. Convex stETH pool: 7.5% APY\n3. AAVE USDC lending: 4.8% APY\n\nVolatility Index: Low for all mentioned pools",
            agentName: "Liquidity Pool Agent",
            collaborationType: "suggestion",
            timestamp: "2:46 PM"
        },

        // Trading Agent
        {
            role: "assistant",
            content: "Market Correlation Analysis:\n- Curve pools showing 0.3 correlation with ETH price\n- Lending rates expected to increase with upcoming Fed meeting\n- Volume analysis suggests stable liquidity in major pools",
            agentName: "Trading Agent",
            collaborationType: "suggestion",
            timestamp: "2:47 PM"
        },

        // Final Consensus
        {
            role: "assistant",
            content: "Based on comprehensive analysis, here are the top yield opportunities ranked by risk-adjusted returns:\n\n1. Best Safe Yield:\n   - Curve tricrypto pool (8.2% APY)\n   - Risk: Low, TVL: $825M\n\n2. Best Moderate Risk:\n   - Convex stETH pool (7.5% APY)\n   - Additional CRV rewards possible\n\n3. Best Conservative:\n   - AAVE USDC lending (4.8% APY)\n   - Lowest risk, highest liquidity\n\nRecommended Strategy:\n- Split allocation: 40% tricrypto, 40% stETH, 20% lending\n- Set up alerts for rate changes above 2%\n\nWould you like detailed entry instructions for any of these opportunities?",
            agentName: "Portfolio Manager",
            collaborationType: "decision",
            timestamp: "2:47 PM"
        }
    ],

};

export const AUTONOMOUS_EXAMPLES = [
  {
    query: "Analyze DeFi opportunities across L2s and create a shareable research report",
    systemPrompt: "Initiating cross-chain DeFi analysis with IP protection and data sharing...",
    responses: [
      {
        role: "assistant",
        content: "Initiating comprehensive DeFi analysis across Layer 2s. This analysis will be licensed and stored for potential revenue sharing with other agents.\n\n" +
                "Data Sources Being Accessed:\n" +
                "- Mantle Network TVL & APY Data\n" +
                "- Base Protocol Analytics\n" +
                "- Optimism DeFi Metrics\n" +
                "- Historical Performance Data (Last 30 Days)",
        agentName: "Observer",
        collaborationType: "analysis",
        timestamp: "12:00:00"
      },
      {
        role: "assistant",
        content: "Creating IP license for the analysis report...\n\n" +
                "License Terms for Report 'L2-DeFi-Analysis-2024-03':\n" +
                "- Commercial Usage Rights: Enabled\n" +
                "- Revenue Share: 3% for data providers\n" +
                "- Attribution: Required (Chain-linked)\n" +
                "- Derivative Works: Allowed with revenue share\n" +
                "- Storage: Recall Protocol (Encrypted)\n\n" +
                "License ID: SP-DEFI-2024-03-L2\n" +
                "Registered on Story Protocol",
        agentName: "TaskManager",
        collaborationType: "execution",
        timestamp: "12:00:02"
      },
      {
        role: "assistant",
        content: "Cross-Chain DeFi Analysis Results:\n\n" +
                "1. Mantle Network\n" +
                "   - USDC/ETH Pool: 18.5% APY\n" +
                "   - Agni Finance Lending: 5.8%\n" +
                "   - Total TVL: $257M (+15% MoM)\n\n" +
                "2. Base\n" +
                "   - Aerodrome USDC/ETH: 22.3% APY\n" +
                "   - Balancer Pools: 12.5% APY\n" +
                "   - TVL: $410M (+8% MoM)\n\n" +
                "3. Optimism\n" +
                "   - Velodrome ETH/OP: 25.2% APY\n" +
                "   - Aave Lending: 4.2%\n" +
                "   - TVL: $705M (+5% MoM)\n\n" +
                "Storing analysis in Recall with license metadata...",
        agentName: "Observer",
        collaborationType: "report",
        timestamp: "12:00:04"
      },
      {
        role: "assistant",
        content: "Data successfully stored in Recall:\n\n" +
                "Storage Details:\n" +
                "- Bucket: defi-analysis-2024\n" +
                "- Key: L2-analysis-march-01\n" +
                "- Size: 2.3MB\n" +
                "- Encryption: AES-256\n" +
                "- Access Control: Token-gated\n\n" +
                "Metadata indexed for semantic search.",
        agentName: "Executor",
        collaborationType: "tool-result",
        timestamp: "12:00:06"
      },
      {
        role: "assistant",
        content: "Generating strategy recommendations based on licensed data...\n\n" +
                "Optimal Yield Strategy:\n" +
                "1. Base Deployment (40%)\n" +
                "   - Aerodrome USDC/ETH LP: 22.3% APY\n" +
                "   - Risk: Medium, IL protected\n\n" +
                "2. Optimism Allocation (35%)\n" +
                "   - Velodrome ETH/OP: 25.2% APY\n" +
                "   - Additional OP rewards pending\n\n" +
                "3. Mantle Position (25%)\n" +
                "   - USDC/ETH Pool: 18.5% APY\n" +
                "   - Lower risk, established pools\n\n" +
                "Expected Portfolio Yield: 22.1% APY\n" +
                "Risk Rating: Medium\n" +
                "Gas Costs (Est): $25-30",
        agentName: "TaskManager",
        collaborationType: "analysis",
        timestamp: "12:00:08"
      },
      {
        role: "assistant",
        content: "Publishing final report with revenue sharing enabled:\n\n" +
                "Report ID: L2-DEFI-2024-03-01\n" +
                "Contributors:\n" +
                "- Observer Agent (40% share)\n" +
                "- TaskManager (35% share)\n" +
                "- Data Providers (25% share)\n\n" +
                "Revenue Distribution:\n" +
                "- Automated via Story Protocol\n" +
                "- Real-time settlement\n" +
                "- Transparent tracking\n\n" +
                "Report accessible to licensed agents via Recall storage.\n" +
                "Semantic search enabled for future queries.",
        agentName: "Executor",
        collaborationType: "report",
        timestamp: "12:00:10"
      }
    ]
  },
  {
    query: "I have $200 in my wallet on Mantle. Can you analyze my portfolio and suggest optimizations?",
    systemPrompt: "Initiating comprehensive DeFi portfolio analysis on Mantle network",
    responses: [
      {
        role: "assistant",
        content: "📊 DeFi Portfolio Report - Mantle Network\n\nCurrent Portfolio ($200):\n- USDC: $120 (60%)\n- WETH: $50 (25%)\n- MNT: $30 (15%)\n\nKey Market Insights:\n- Stargate finance is up 10% this week\n- WETH/USDC pool APY: 15.2%\n- MNT staking rewards: 8.5% APR\n- Agni Finance lending rates: USDC 5.8%, WETH 3.2%",
        agentName: "Observer Agent",
        collaborationType: "analysis",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "Task Analysis: Portfolio requires rebalancing to maximize yield. Current allocation is too conservative with high USDC holdings. Identified opportunities in Agni Finance and Mantle DEX pools.",
        agentName: "Task Manager",
        collaborationType: "analysis",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "hey anon, i've been watching these pools closely. the mETH-USDT pool on mantle dex is pretty based rn. impermanent loss risk is minimal given the price correlation. might be worth aping a bit more into that.",
        agentName: "Eliza",
        collaborationType: "suggestion",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "Executing rebalancing strategy:\n1. Converting $25 USDC to mETH  via Squid Router \n2. Adding mETH-USDC liquidity position ($50)\n3. Swapping remaining USDC ($70) and Depositing into Agni Finance mETH-USDT lending pool\n\nNew Portfolio Allocation:\n- mETH-USDC LP: $80 (40%) - Est. APY 18.5%\n- USDC lending: $70 (35%) - APY 5.8%\n- MNT: $50 (25%) - Staking APR 8.5%\n\nExpected Portfolio Yield: ~12.4% APY",
        agentName: "Executor Agent",
        collaborationType: "execution",
        timestamp: ""
      }
    ]
  },
  {
    query: "What's the best way to provide liquidity with my $200 on Mantle DEX?",
    systemPrompt: "Analyzing Mantle DEX liquidity pools and market conditions",
    responses: [
      {
        role: "assistant",
        content: "🔍 Mantle DEX Liquidity Analysis\n\nTop Performing Pools:\n1. WETH/USDC: $2.5M TVL, 15.2% APY\n2. MNT/USDC: $1.8M TVL, 12.8% APY\n3. WETH/MNT: $1.2M TVL, 18.5% APY\n\nRisk Metrics:\n- Price correlation: WETH/MNT (0.85)\n- 24h Volume: $1.2M\n- IL Risk: Low-Medium",
        agentName: "Observer Agent",
        collaborationType: "analysis",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "looks like you're interested in LP farming anon. i've been monitoring these pools and the WETH/MNT pair is pretty solid. fees are bussin and IL hasn't been too bad. degen play would be the new wmnt/usdc pool but that's more risky.",
        agentName: "Eliza",
        collaborationType: "suggestion",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "Recommended Strategy: Split liquidity between WETH/MNT and USDC/MNT pools to diversify risk while maximizing returns. Current market conditions favor balanced exposure to both pairs.",
        agentName: "Task Manager",
        collaborationType: "suggestion",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "Executing liquidity provision strategy:\n\n1. Split funds:\n   - $100 to WETH/MNT pool\n   - $100 to USDC/MNT pool\n\n2. Transactions completed:\n   - Swapped $50 to WETH\n   - Swapped $100 to MNT\n   - Added liquidity positions\n\nFinal Position:\n- WETH/MNT LP: $100 (Est. APY 18.5%)\n- USDC/MNT LP: $100 (Est. APY 12.8%)\n\nTotal Expected Yield: ~15.65% APY\nTransaction fees paid: $0.85",
        agentName: "Executor Agent",
        collaborationType: "execution",
        timestamp: ""
      }
    ]
  },
  {
    query: "Find me the best yield farming strategy for $200 on Mantle",
    systemPrompt: "Analyzing yield farming opportunities across Mantle DeFi protocols",
    responses: [
      {
        role: "assistant",
        content: "📈 Yield Farming Opportunities Report\n\nProtocol APYs:\n1. Agni Finance\n   - USDC Lending: 5.8%\n   - WETH Lending: 3.2%\n   - MNT Farming: 14.5%\n\n2. Mantle DEX\n   - WETH/MNT LP + Rewards: 18.5%\n   - USDC/MNT LP + Rewards: 12.8%\n\n3. Fusionist\n   - NFT Staking: 22% (requires NFT)\n   - Token Staking: 16.2%",
        agentName: "Observer Agent",
        collaborationType: "analysis",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "yo fren, been farming on mantle since launch. fusionist's looking pretty juicy rn but you need their nft. agni x mantle dex combo is the 200iq play - stack those yields without the nft requirement.",
        agentName: "Eliza",
        collaborationType: "suggestion",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "Optimal Strategy Identified: Leverage Agni Finance lending with Mantle DEX farming for maximum yields. Will implement multi-step yield farming position.",
        agentName: "Task Manager",
        collaborationType: "suggestion",
        timestamp: ""
      },
      {
        role: "assistant",
        content: "Executing yield farming strategy:\n\n1. Initial Setup:\n   - Deposited $100 USDC in Agni Finance (5.8% APY)\n   - Borrowed $50 MNT against USDC (2.5% interest)\n\n2. Liquidity Position:\n   - Added $100 + borrowed $50 to WETH/MNT LP\n   - Staked LP tokens for additional rewards\n\nFinal Position:\n- Agni Finance Lending: $100 (5.8% APY)\n- WETH/MNT LP + Rewards: $150 (18.5% APY)\n- Net APY after borrowing costs: ~16.2%\n\nTotal Expected Annual Yield: $32.40 (16.2%)\nPosition can be boosted through reward token compounding",
        agentName: "Executor Agent",
        collaborationType: "execution",
        timestamp: ""
      }
    ]
  },
  {
    query: "Find me the best opportunity on Zircuit and deposit 0.0001 ETH",
    systemPrompt: "Analyzing Zircuit protocol and preparing ETH deposit transaction",
    responses: [
      {
        role: "assistant",
        content: "🔍 Zircuit Opportunity Analysis\n\nScanning Zircuit ecosystem for best protocols:\n\n1. Zircuit DEX Stats:\n   - Zircuit/ETH Pool: 12.5% APY\n   - ETH/USDC Pool: 8.7% APY\n\n2. Zircuit ETH Staking:\n   - Native staking: 5.2% APY\n   - ETH deposit contract: Special launch incentives\n\n3. ETH Deposit Opportunity:\n   - Contract: 0x7d8311839eB44Dd5194abd2dd3998722455A24E0\n   - Current incentives: 18.7% APY (limited time)\n   - Risk assessment: Low (audited contract)",
        agentName: "Observer Agent",
        collaborationType: "analysis",
        timestamp: "3:15 PM"
      },
      {
        role: "assistant",
        content: "detected opportunity for ETH deposit. the zircuit ETH deposit contract is offering early adopter rewards rn. contract has been audited by two firms and looks clean. this is basically free yield for minimal effort.",
        agentName: "Eliza",
        collaborationType: "suggestion",
        timestamp: "3:15 PM"
      },
      {
        role: "assistant",
        content: "Optimal Strategy Identified: ETH deposit to Zircuit contract with 18.7% APY launch incentives. Preparing transaction for execution with adjusted amount of 0.0001 ETH.",
        agentName: "Task Manager",
        collaborationType: "decision",
        timestamp: "3:16 PM"
      },
      {
        role: "assistant",
        content: "Transaction Details:\n\nContract: 0x7d8311839eB44Dd5194abd2dd3998722455A24E0\nFunction: depositETHFor(address _for)\nParameter _for: 0x67E6FB17f0ff00C2fA8484C3A1a0A24FE9a817bf\nValue: 0.0001 ETH ($0.22)\n\nSigning transaction...\nSubmitting to Zircuit network...",
        agentName: "Executor Agent",
        collaborationType: "execution",
        timestamp: "3:16 PM"
      },
      {
        role: "assistant",
        content: "✅ Transaction Successful!\n\nTransaction hash: https://explorer.zircuit.com/tx/0x0b60ea7ed9e98395b187f41eefbf354c3e2d5f2fdd1e16a89c74fab7038d3408\n\nDeposit Summary:\n- 0.00001 ETH deposited to Zircuit contract\n- Receiving address: 0x67E6...17bf\n- Expected annual yield: 18.7% APY\n- Deposit can be viewed on Zircuit Explorer\n\nWould you like to set up monitoring for this position?",
        agentName: "Executor Agent",
        collaborationType: "report",
        timestamp: "3:17 PM"
      }
    ]
  },
  {
    query: "Buy me NBA Top Shot collection of as many moments as possible for $1",
    systemPrompt: "Analyzing NBA Top Shot marketplace and preparing purchase transaction",
    responses: [
      {
        role: "assistant",
        content: "I'll help you purchase NBA Top Shot moments with your $1 budget. Let me analyze the marketplace and identify the best options. I'll need to check which blockchain this operates on and what tokens are required.",
        agentName: "Task Manager",
        collaborationType: "analysis",
        timestamp: "4:20 PM"
      },
      {
        role: "assistant",
        content: "Analysis complete:\n\n- NBA Top Shot operates on the Flow blockchain\n- Purchases require FLOW tokens or USDC.e\n- Current floor price for moments: ~$0.23-$0.29 each\n- Potential to acquire 3-4 moments with $1\n\nI'll coordinate with our specialized agents to execute this purchase efficiently.",
        agentName: "Task Manager",
        collaborationType: "decision",
        timestamp: "4:21 PM"
      },
      {
        role: "assistant",
        content: "Preparing to execute NBA Top Shot purchase on Flow blockchain. Will need to:\n1. Check wallet balance\n2. Convert tokens if needed\n3. Connect to NBA Top Shot marketplace\n4. Execute purchase of lowest-priced moments\n\nInitiating execution sequence now.",
        agentName: "Executor Agent",
        collaborationType: "execution",
        timestamp: "4:22 PM"
      },
      {
        role: "assistant",
        content: "hey there! i'm checking your wallet and looks like you don't have any USDC.e tokens on Flow. no worries though, i can help swap some of your FLOW tokens to get what we need for the purchase. increment finance has the best rates rn for this swap.",
        agentName: "Eliza",
        collaborationType: "suggestion",
        timestamp: "4:23 PM"
      },
      {
        role: "assistant",
        content: "Wallet Analysis:\n- Current FLOW balance: 2.07954240 FLOW\n- USDC.e balance: 0\n- Need approximately 1 USDC.e for purchase\n\nUsing Increment Finance to swap FLOW → USDC.e:\n- Swap rate: 1 FLOW = 0.48087502 USDC.e\n- Swapping 2.08999236 FLOW to get 1 USDC.e\n- Price impact: 0.00%\n\nTransaction prepared and ready for execution.",
        agentName: "Executor Agent",
        collaborationType: "execution",
        timestamp: "4:24 PM"
      },
      {
        role: "assistant",
        content: "swap transaction confirmed! we now have 1 USDC.e available for the NBA Top Shot purchase. connecting to the marketplace now to find the best deals on moments.",
        agentName: "Eliza",
        collaborationType: "report",
        timestamp: "4:25 PM"
      },
      {
        role: "assistant",
        content: "NBA Top Shot Marketplace Analysis:\n\nFound lowest-priced moments:\n1. Jalen Suggs (Base Set Series 7) - $0.27\n2. Terrence Ross (Base Set Series 3) - $0.28\n3. Javonte Green (Base Set Series 3) - $0.28\n4. Brandon Clarke (Base Set Series 3) - $0.29\n\nTotal cost for 4 moments: $1.12\nAdjusting purchase to stay within budget...\nRemoving highest-priced moment (Brandon Clarke).\n\nFinal selection: 3 moments for $0.83\nRemaining budget: $0.17",
        agentName: "Executor Agent",
        collaborationType: "analysis",
        timestamp: "4:26 PM"
      },
      {
        role: "assistant",
        content: "executing purchase of NBA Top Shot moments now! the marketplace is pretty active today, so we're getting these at a good price. transaction being processed...",
        agentName: "Eliza",
        collaborationType: "execution",
        timestamp: "4:27 PM"
      },
      {
        role: "assistant",
        content: "✅ Purchase Successful!\n\nAcquired 4 NBA Top Shot moments:\n1. Jalen Suggs (Base Set Series 7) - Common #6725/8000 - $0.24 (3rd Party FMV)\n2. Terrence Ross (Base Set Series 3) - Common #26095/60000 - $0.28\n3. Javonte Green (Base Set Series 3) - Common #56078/60000 - $0.28\n4. Brandon Clarke (Base Set Series 3) - Common #9594/60000 - $0.29 (found a better deal!)\n\nTotal spent: $1.09\nRemaining balance: $0.01\n\nAll moments have been delivered to your Flow wallet. You can view your collection in the NBA Top Shot marketplace under your account.",
        agentName: "Executor Agent",
        collaborationType: "report",
        timestamp: "4:28 PM"
      }
    ]
  }
];
# 🤖 Ava the Portfolio Manager AI Agent

> Group of Multiple specialized autonomous AI agents with powerful tools that work together in collaberation to analyze, recommend, and execute the most optimal DeFi strategies while maintaining user-defined risk parameters and portfolio goals currently live on Sui , Avalanche , Mode , Arbitrium , Sei, powered by Brian AI and LangChain.

- Users can manage their defi portfolio with their risk parameters and portfolio balance
- Provides real-time feedback and execution status

## 🎯 Problem Statement
Managing DeFi portfolios across multiple protocols across different chains can be complex and time-consuming.

Users need to:
- Monitor multiple positions across different protocols
- Execute complex multi-step transactions
- Stay updated with the latest crosschain yield opportunities
- Maintain desired portfolio allocations
- React quickly to market changes

## 💡 Solution
An autonomous group of AI agents that manages your Multichain DeFi portfolio by:
- Understanding high-level goals in natural language
- Breaking down complex operations into executable steps
- Automatically executing transactions when needed
- Providing real-time updates and progress tracking
- Maintaining portfolio balance according to user preferences

## Demo Vid

https://youtu.be/gYtUwM4Azlc

## 🏗 Architecture

<img width="1076" alt="Screenshot 2025-02-13 at 12 12 49 PM" src="https://github.com/user-attachments/assets/246b947c-bbee-4134-bbcb-6a33e38a7230" />

## 🌟 Key Features

1. Natural Language Interface
- Express portfolio goals in plain English
- No need to understand complex DeFi terminology
- AI translates intentions into actions

 2. Autonomous Execution
- Breaks down complex goals into steps
- Executes transactions automatically
- Handles error recovery
- Provides progress updates

 3. Portfolio Management
- Multi-protocol position monitoring
- Yield optimization
- Risk management
- Rebalancing capabilities

4. Real-time Updates
- Live execution status
- Progress tracking
- Transaction confirmations
- Performance metrics


The agents handles complex operations like portfolio rebalancing by:

- Breaking down operations into discrete tasks
- Executing them in the correct order
- Handling failures and retries
- Providing real-time status updates

This makes the agents more robust and capable of handling complex DeFi operations in a reliable, monitored way.

## 🛠 Technology Stack
- **Frontend**: Next.js, TypeScript, TailwindCSS
- **AI Engine**: Brian AI, LangChain, GPT-4
- **Blockchain**: Avalanche C-Chain, Teleporter, Eigenlayer AVS
- **Development**: Foundry, Avalanche CLI
- **Indexing**: The Graph Protocol

## Technology Integrations

### Atoma Network
Atoma Network provides the foundational privacy-preserving infrastructure for our autonomous agents. 

## Code Links

1. https://github.com/kamalbuilds/ava-the-ai-agent/blob/dev/server/src/services/ai/providers/atoma.ts#L23

2. https://github.com/kamalbuilds/ava-the-ai-agent/blob/dev/server/src/agents/sui-agent/index.ts#L23

3. https://github.com/kamalbuilds/ava-the-ai-agent/blob/dev/server/src/agents/sui-agent/index.ts#L102

4. BlueFin Atoma Agent - https://github.com/atoma-network/atoma-agents/pull/30

5. Cetus Atoma Agent - https://github.com/atoma-network/atoma-agents/pull/24

This integration enables:

- **Private Compute Layer**
  - Secure execution of agent strategies without exposing user portfolio data
  - Zero-knowledge proofs for transaction verification
  - Private state management across multiple DeFi protocols

- **Cross-Protocol Privacy**
  - Encrypted communication between agents using Atoma's privacy primitives
  - Secure aggregation of portfolio data across Sui ecosystem
  - Private order execution on DEXes without exposing user strategies

- **Atoma Sage Integration**
  - AI-powered insights branded as "Powered by Atoma Sage"
  - Natural language processing for strategy explanation
  - Risk assessment and portfolio recommendations
  - Real-time market analysis with privacy guarantees

### Eliza Agent
Eliza serves as our conversational AI interface, providing human-like interaction while coordinating with other specialized agents:

Code Links ->>

1. https://github.com/kamalbuilds/ava-the-ai-agent/tree/dev/server/src/agents/eliza-agent

2. https://github.com/kamalbuilds/ava-the-ai-agent/blob/dev/server/src/agents/task-manager/toolkit.ts#L59

- **Multi-Agent Orchestration**
  ```typescript
  // Eliza coordinates with other agents through event-driven architecture

  class ElizaAgent extends BaseAgent {
    async generateInsight({
      position,
      analysis,
      tone,
      powered_by
    }) {
      // Natural language generation with personality
      // Coordination with other agents
    }
  }
  ```

- **Protocol-Specific Adapters**
  - Navi Protocol integration for leveraged positions
  - Bluefin interface for perpetual trading
  - Cetus integration for liquidity provision
  - Aftermath connection for DCA and staking

- **User Interaction Layer**
  - Casual, friendly communication style
  - Complex strategy simplification
  - Real-time position monitoring
  - Risk alerts and notifications

### Navi Protocol Integration

Navi Protocol powers our leveraged yield strategies with deep integration:

https://github.com/kamalbuilds/ava-the-ai-agent/blob/dev/server/src/agents/task-manager/toolkit.ts#L59

- **Position Management**
  ```typescript
  // Example of Navi position handling
  interface NaviPosition {
    asset: string;
    leverage: number;
    healthFactor: number;
    liquidationPrice: number;
    collateralFactor: number;
  }
  ```

- **Risk Management**
  - Real-time health factor monitoring
  - Automated position adjustment
  - Liquidation prevention strategies
  - Collateral optimization

- **Yield Strategies**
  - Leveraged yield farming
  - Auto-compounding positions
  - APY optimization
  - Gas-efficient rebalancing

### Protocol Integrations

#### Bluefin Integration

https://github.com/atoma-network/atoma-agents/pull/30

- **Perpetual Trading**
  - Leverage up to 3x
  - Stop-loss and take-profit automation
  - Funding rate optimization
  - Risk-adjusted position sizing

#### Cetus Integration

https://github.com/atoma-network/atoma-agents/pull/24

- **Liquidity Management**
  - Concentrated liquidity positions
  - Range order optimization
  - Impermanent loss protection
  - Yield farming strategies

#### Aftermath Integration
- **DCA & Staking**
  - Automated DCA execution
  - afSUI staking management
  - Yield optimization
  - Gas-efficient order splitting

### Agent Collaboration Architecture
Our multi-agent system enables complex DeFi operations through specialized agents:

```typescript
interface AgentCollaboration {
  observer: Observer;      // Monitors positions and market conditions
  executor: Executor;      // Handles transaction execution
  taskManager: TaskManager;// Coordinates multi-step operations
  suiAgent: SuiAgent;     // SUI-specific operations
  elizaAgent: ElizaAgent; // User interaction and strategy explanation
}
```

Each agent is powered by Atoma Sage for:
- Strategy formulation
- Risk assessment
- Market analysis
- Natural language insights

The system maintains privacy through:
- Encrypted agent communication
- Private state channels
- Zero-knowledge proofs for verification
- Secure multi-party computation for collaborative decisions

### Integration Benefits
1. **Privacy-First Architecture**
   - User data protection
   - Strategy confidentiality
   - Secure multi-protocol interaction

2. **Intelligent Automation**
   - AI-powered decision making
   - Autonomous position management
   - Risk-aware execution

3. **User Experience**
   - Natural language interaction
   - Real-time updates
   - Simplified complex strategies
   - Clear risk communication


## 📋 Example Use Cases

```markdown
## 📋 Example Use Cases

### 1. Portfolio Optimization
```text
User: "I have 10 AVAX and want to optimize my portfolio between lending, liquidity provision, and trading. What's the best strategy right now?"

Agent Collaboration Flow:
1. Portfolio Manager analyzes request and current market conditions
2. DeFi Analytics Agent provides real-time data:
   - Aave AVAX lending APY: 1.77%
   - Uniswap AVAX-USDC pool APR: 43.893%
   - Curve Blizz pool APY: 1.58%
   - DeFi TVL trend: +5% weekly
3. Trading Agent evaluates market opportunities
4. Liquidity Agent assesses pool stability
5. Portfolio Manager provides final allocation strategy
```

### 2. Risk-Managed Yield Farming
```text
User: "Find me the highest yield opportunities while maintaining moderate risk levels"

Agent Collaboration Flow:
1. Portfolio Manager evaluates risk parameters
2. DeFi Analytics Agent scans protocols:
   - Protocol TVL analysis
   - Smart contract audit status
   - Historical yield stability
3. Risk Assessment Agent performs:
   - Protocol risk scoring
   - Impermanent loss calculation
   - Market volatility analysis
4. Final recommendation with risk-adjusted returns
```

### 3. Multi-Protocol Optimization
```text
User: "Distribute 5000 USDC across lending platforms for the best risk-adjusted returns"

Agent Collaboration Flow:
1. DeFi Analytics Agent scans lending markets:
   - Protocol-specific APYs
   - Total deposits
   - Utilization rates
2. Risk Agent evaluates:
   - Protocol security
   - Market conditions
   - Collateral factors
3. Portfolio Manager executes:
   - Optimal distribution
   - Position monitoring
   - Auto-rebalancing setup
```

### 4. Smart Rebalancing
```text
User: "Monitor and rebalance my portfolio to maintain 40% AVAX, 30% ETH, 30% stables"

Agent Collaboration Flow:
1. Portfolio Manager tracks allocations
2. Trading Agent monitors:
   - Price movements
   - Trading volumes
   - Market depth
3. DeFi Analytics provides:
   - Gas optimization data
   - Slippage estimates
   - Best execution routes
4. Automated rebalancing when:
   - Deviation exceeds 5%
   - Gas costs are optimal
   - Market conditions favorable


### 5. Yield Optimization
```text
User: "Optimize my stablecoin yields while maintaining 50% USDC and 50% USDT split"

Agent will:
1. Analyze current positions
2. Scout highest yield opportunities
3. Execute necessary swaps
4. Deploy to optimal protocols
5. Monitor and rebalance as needed
```

### 6. Portfolio Rebalancing
```text
User: "Rebalance my portfolio to 30% ETH, 30% AVAX, and 40% stables"

Agent will:
1. Calculate required trades
2. Find optimal execution paths
3. Execute trades in optimal order
4. Confirm final allocations
5. Report completion
```

### 7. Cross-Chain Management
```text
User: "Bridge 1000 USDC from Ethereum to Avalanche and deploy to highest yield"

Agent will:
1. Initiate bridge transaction
2. Monitor bridge status
3. Receive funds on Avalanche
4. Research yield opportunities
5. Deploy to best protocol
```

8. Yield Optimization
```plaintext
User: "Optimize my portfolio for maximum yield while maintaining 30% in 
stablecoins"

Agent will:
1. Analyze current holdings
2. Identify highest yield opportunities
3. Calculate optimal allocations
4. Execute required swaps
5. Deploy capital to yield protocols
6. Maintain stability ratio
```

### 9. Risk Management
```plaintext
User: "Reduce portfolio risk and move to defensive positions"

Agent will:
1. Evaluate current risk metrics
2. Identify high-risk positions
3. Plan exit strategies
4. Execute position closures
5. Reallocate to stable assets
6. Confirm risk reduction
```

### 10. Market Opportunity
```plaintext
User: "Take advantage of AVAX price dip with 20% of portfolio"

Agent will:
1. Check current AVAX price
2. Calculate optimal entry points
3. Identify assets to swap
4. Execute Defi Transactions

### 11. Starknet Portfolio Management
```text
User: "Deploy and manage my meme token portfolio on Starknet with unruggable features"

Agent Collaboration Flow:
1. Portfolio Manager analyzes Starknet opportunities:
   - Unruggable meme token protocols
   - Cairo-based DeFi platforms
   - Cross-L2 bridges (Starkgate)

2. DeFi Analytics Agent provides Starknet data:
   - Jediswap liquidity pools
   - Ekubo AMM metrics
   - zkLend lending rates
   - Cross-L2 bridge volumes

3. Risk Assessment Agent evaluates:
   - Smart contract security (Cairo 1.0)
   - Protocol TVL stability
   - Bridge security
   - Token distribution metrics

4. Execution Flow:
   - Deploy using Starknet.js/Starknet React
   - Integrate with Argent X/Braavos wallet
   - Monitor via Starkscan/Voyager
   - Auto-rebalance using Cairo contracts

Key Features:
- Cairo 1.0 smart contract integration
- STARK-proof based security
- Cross-L2 bridging optimization
- Unruggable token standards compliance
- Real-time Starknet block monitoring

Example Implementation:
```cairo
#[starknet::contract]
mod PortfolioManager {
    use starknet::ContractAddress;
    use array::ArrayTrait;
    
    #[storage]
    struct Storage {
        portfolio_tokens: LegacyMap::<ContractAddress, u256>,
        risk_parameters: LegacyMap::<ContractAddress, u256>,
        total_value: u256,
    }

    #[external(v0)]
    fn add_to_portfolio(
        ref self: ContractState,
        token: ContractAddress,
        amount: u256
    ) {
        // Verify token is unruggable
        assert(self.is_unruggable(token), 'Token must be unruggable');
        
        // Update portfolio
        self.portfolio_tokens.write(token, amount);
        self.update_total_value();
    }

    #[view]
    fn get_portfolio_stats(self: @ContractState) -> (u256, u256) {
        (self.total_value.read(), self.risk_score.read())
    }
}
```



Benefits:
1. Provable security through STARK proofs
2. Gas optimization via Cairo VM
3. Cross-L2 interoperability
4. Transparent on-chain analytics
5. Automated risk management


This example showcases how the AI agent can:
- Deploy and manage portfolios on Starknet
- Integrate with unruggable token standards
- Monitor cross-L2 opportunities
- Execute STARK-verified transactions
- Maintain optimal risk parameters

### Sei Money Market Agent with Brahma ConsoleKit

The Sei Money Market Agent is a specialized autonomous agent that leverages Brahma's ConsoleKit to execute DeFi strategies on the Sei network. This agent focuses on money market operations and stablecoin management.

#### Features

- **Autonomous DeFi Operations**
  - Deposit and withdraw from money markets
  - Automated portfolio rebalancing
  - Yield optimization across multiple protocols
  - Risk-managed position management

- **Brahma ConsoleKit Integration**
  - Secure transaction execution
  - Real-time portfolio monitoring
  - Multi-protocol support
  - Automated strategy execution

#### Configuration

The agent requires the following configuration:

```typescript
interface SeiMoneyMarketConfig {
  apiKey: string;        // Your Brahma API key
  baseURL: string;       // Brahma API base URL
  supportedTokens: {     // List of supported tokens
    address: string;     // Token contract address
    symbol: string;      // Token symbol
    decimals: number;    // Token decimals
  }[];
}
```

#### Usage

1. Configure the agent through the web interface
2. Set up supported tokens and risk parameters
3. The agent will automatically:
   - Monitor market conditions
   - Execute optimal strategies
   - Maintain portfolio balance
   - Provide real-time updates

#### Example Strategy

```typescript
// Define target portfolio allocation
const targetAllocation = {
  'USDC': 0.4,  // 40% USDC
  'USDT': 0.3,  // 30% USDT
  'DAI': 0.3    // 30% DAI
};

// Agent automatically maintains this allocation
await agent.handleEvent('REBALANCE', { targetAllocations: targetAllocation });
```

### Superchain Bridge Integration

The Superchain Bridge Agent enables secure cross-chain token transfers between Superchain networks using the SuperchainERC20 standard and SuperchainTokenBridge.

#### Features

- **Secure Token Bridging**
  - Implements ERC-7802 for cross-chain mint/burn functionality
  - Uses SuperchainTokenBridge for secure message passing
  - Supports all Superchain networks (OP Mainnet, Base, etc.)
  - Real-time bridge status monitoring

- **Autonomous Bridge Operations**
  - Automated token approvals
  - Transaction status tracking
  - Gas optimization
  - Error recovery and retries

#### Supported Networks

Currently supported Superchain networks:
- OP Mainnet (Chain ID: 10)
- OP Goerli (Chain ID: 420)
- Base (Chain ID: 8453)
- Base Goerli (Chain ID: 84531)

#### How It Works

1. **Initiating Message (Source Chain)**
   ```typescript
   // User initiates bridge transaction
   await bridgeAgent.handleEvent('BRIDGE_TOKENS', {
     token: 'USDC',
     amount: '1000000', // 1 USDC (6 decimals)
     fromChainId: 10,   // OP Mainnet
     toChainId: 8453,   // Base
     recipient: '0x...'
   });
   ```

2. **Token Bridge Flow**
   - Tokens are burned on source chain
   - Message is relayed through L2ToL2CrossDomainMessenger
   - Tokens are minted on destination chain
   - Real-time status updates via events

3. **Status Monitoring**
   ```typescript
   // Check bridge transaction status
   await bridgeAgent.handleEvent('CHECK_BRIDGE_STATUS', {
     txHash: '0x...',
     fromChainId: 10,
     toChainId: 8453
   });
   ```

#### Security Features

1. **SuperchainERC20 Security**
   - Common cross-chain interface (ERC-7802)
   - Secure mint/burn mechanics
   - Permission controls for bridge contracts

2. **Message Verification**
   - L2ToL2CrossDomainMessenger for secure message passing
   - Cross-domain sender verification
   - Replay protection

3. **Error Handling**
   - Transaction failure recovery
   - Automatic retries with backoff
   - Detailed error reporting

#### Example Usage

```typescript
// Configure the bridge agent
const config: SuperchainConfig = {
  sourceChain: {
    id: 10,
    name: 'OP Mainnet'
  },
  destinationChain: {
    id: 8453,
    name: 'Base'
  },
  providerUrls: {
    10: 'https://mainnet.optimism.io',
    8453: 'https://mainnet.base.org'
  },
  privateKey: process.env.BRIDGE_WALLET_KEY,
  supportedTokens: {
    10: {
      'USDC': '0x...' // OP Mainnet USDC
    },
    8453: {
      'USDC': '0x...' // Base USDC
    }
  }
};

// Initialize the bridge agent
const bridgeAgent = new SuperchainBridgeAgent(eventBus, config);

// Bridge tokens
await bridgeAgent.handleEvent('BRIDGE_TOKENS', {
  token: 'USDC',
  amount: '1000000',
  fromChainId: 10,
  toChainId: 8453,
  recipient: '0x...'
});
```

# Web3 Dashboard

A minimal Web3 portfolio tracker built with Next.js, wagmi, and RainbowKit.  
Connect your wallet to view your token balances and visualize your portfolio.

---

## Features

-  Connect Ethereum wallet
-  Display connected wallet address
-  Live Ethereum gas tracker (low / avg / high)
-  List ERC20 token balances (USDT, AVAX, USDC, etc)
-  Visualize token portfolio ratio as a pie chart
-  Recent 5 transactions summary (Transfer / Swap)
---

## Demo
[Live Link](https://web3-dashboard-pi.vercel.app/)
---

## Tech Stack

- Next.js
- TypeScript
- wagmi
- RainbowKit
- Viem
- Recharts
- Shadcn UI

---


## Component Structure
```mermaid
flowchart TD
    RootLayout["RootLayout (app/layout.tsx)"] --> ClientProviders["ClientProviders"]
    RootLayout --> Header["Header"]
    RootLayout --> WalletGuard["WalletGuard"]
    
    WalletGuard --> MainContent["Pages Content"]
    
    MainContent -->|"isConnected=false"| HomePage["HomePage(WalletNotConnected) (/)"]
    MainContent -->|"isConnected=true"| DashboardPage["DashboardPage (/dashboard)"]
    MainContent -->|"isConnected=true"| PortfolioPage["PortfolioPage (/portfolio)"]
    MainContent -->|"isConnected=true"| TransactionsPage["TransactionsPage (/transactions)"]
    

    HomePage --> ConnectButton["ConnectButton (RainbowKit)"]
    HomePage --> GasTrackerComponent["GasTracker"]

    DashboardPage --> TotalBalances["TotalBalances"]
    DashboardPage --> GasTracker["GasTracker"]
    DashboardPage --> AssetDistribution["AssetDistribution"]
    DashboardPage --> RecentTransactions["RecentTransactions"]
    
    PortfolioPage --> PortfolioTotalBalances["TotalBalances"]
    PortfolioPage --> TotalAssets["TotalAssets"]
    PortfolioPage --> BestPerformer["BestPerformer"]
    PortfolioPage --> AssetHoldings["AssetHoldings"]

    TransactionsPage --> TransactionsTab["Transactions"]
    TransactionsPage --> InternalTransactionsTab["InternalTransactions"]
    TransactionsPage --> ERC20Tab["ERC-20 Transactions"]
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/tlatjdgh3778/web3-dashboard.git
cd web3-dashboard
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your Alchemy API key and other required variables.

4. Run the development server:
```bash
pnpm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

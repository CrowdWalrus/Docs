# Frontend Architecture & Tools

# CrowdWalrus Frontend Architecture and Tools Document

## Executive Summary

CrowdWalrus is a decentralized crowdfunding platform built on Sui blockchain with frontend deployed on Walrus Sites. This document outlines the frontend architecture using Vite, React, TypeScript, Tailwind CSS, and TanStack Query for building a Web3 application.

---

## 1. Architecture Overview

### System Architecture

The frontend follows a **three-tier decentralized architecture**:

1. **Presentation Layer** - React components for UI
2. **Business Logic Layer** - Hooks and services for data management
3. **Blockchain Layer** - Direct interaction with Sui blockchain and Walrus storage

### Key Architectural Decisions

- **No Backend Server** - All data comes directly from blockchain
- **Static Build** - Vite production build for Walrus deployment
- **Client-Side Rendering** - Dynamic interactions via React
- **Decentralized Storage** - Project websites hosted on Walrus
- **On-Chain State** - All application state stored on Sui blockchain

---

## 2. Technology Stack

### Core Technologies

| Category | Technology | Purpose |
| --- | --- | --- |
| **UI Library** | React 19.1v | Component-based user interfaces |
| **Language** | TypeScript | Type safety and developer experience |
| **Blockchain SDK** | @mysten/dapp-kit | Sui blockchain integration |
| **State Management** | TanStack Query | Server state caching and synchronization |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **UI Components** | Flowbite React | Accessible, unstyled components |
| **Deployment** | Walrus Sites | Decentralized hosting |
| Build Tool | Vite 7 | Lightening-fast HMR and build tool |
| Router | React Router v7 | Client-side routing |

### Development Tools

- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier, Husky
- **Testing**: Vitest, React Testing Library

---

## 3. Project Structure

### Directory Layout

```
src/
├── pages/                 # Page components
│   ├── Home.tsx          # Home page
│   ├── Projects/
│   │   ├── index.tsx     # Projects list
│   │   ├── Create.tsx    # Create project
│   │   └── Detail.tsx    # Project details
│   ├── Campaigns/
│   ├── Donations/
│   └── Admin/
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── features/         # Feature-specific components
│   └── layouts/          # Layout components
├── lib/                  # Core libraries
│   ├── sui/             # Sui blockchain services
│   ├── walrus/          # Walrus integration
│   └── constants/       # App constants
├── hooks/               # Custom React hooks
│   ├── use-sui-client.ts
│   ├── use-wallet.ts
│   └── use-projects.ts
├── types/               # TypeScript definitions
│   ├── project.ts
│   ├── campaign.ts
│   └── donation.ts
├── router/              # React Router configuration
│   └── index.tsx        # Route definitions
├── utils/               # Utility functions
├── main.tsx             # App entry point
├── App.tsx              # Root component
└── index.html           # HTML template (at root level)
```

### Module Organization

```
Frontend Application
├── User Modules
│   ├── Wallet Connection
│   ├── Project Management
│   ├── Campaign Creation
│   ├── Donation Flow
│   └── Update Publishing
├── Admin Modules
│   ├── Project Moderation
│   ├── Analytics Dashboard
│   └── Platform Settings
└── Shared Modules
    ├── Transaction Management
    └── Decentralized Storage

```

---

## 4. Vite Configuration

### Build Configuration

```tsx
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // Required for Sui SDK
      globals: {
        Buffer: true,
        process: true,
      },
    }),
  ],
  define: {
    global: 'globalThis',
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'sui-sdk': ['@mysten/sui', '@mysten/dapp-kit'],
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@mysten/sui', '@mysten/dapp-kit'],
  },
});
```

### **Routing Configuration**

```tsx
// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/create', element: <CreateProjectPage /> },
  { path: '/projects/:id', element: <ProjectDetailPage /> },
  { path: '/campaigns/:id', element: <CampaignPage /> },
  { path: '/donations', element: <DonationsPage /> },
  { path: '/admin/*', element: <AdminLayout /> },
]);
```

---

## 5. State Management Architecture

### TanStack Query Setup

```tsx
// Provider structure for blockchain data
QueryClientProvider
  └── SuiClientProvider
      └── WalletProvider
          └── App Components

```

### Data Fetching Strategy

1. **On-Chain Data** - Fetched via @mysten/dapp-kit hooks
2. **Walrus Data** - Media and HTML content
3. **Caching Strategy** - TanStack Query with stale-while-revalidate
4. **Event Monitoring** - Polling strategy using `queryEvents` (WebSocket subscriptions were deprecated in July 2024, gRPC streaming coming soon)

---

## 6. Blockchain Integration

### Wallet Integration

- **Multi-Wallet Support** via @mysten/dapp-kit
- **Connection Management** with session persistence
- **Transaction Building** using Sui Transaction API

### Smart Contract Interaction

| Operation | Method | Description |
| --- | --- | --- |
| **Read** | `useSuiClientQuery` | Query blockchain state |
| **Write** | `useSignAndExecuteTransaction` | Execute transactions via PTBs |
| **Subscribe** | `queryEvents` (polling) | Poll for events (WebSocket deprecated) |

### Walrus Quilt Integration

- **Batch Data Storage**: We use **Walrus Quilt** to save and manage batch data for projects. This provides an efficient way to handle large data sets, such as project metadata, campaign details, and donation history, by batching them into manageable chunks and storing them on Walrus.
- **Storage Operations**:
    - Upload batches of project data in a single transaction.
    - Each batch is stored as a separate unit, and the IDs are referenced on the Sui blockchain for integrity and accessibility.

### Programmable Transaction Blocks (PTBs)

Sui uses Programmable Transaction Blocks (PTBs) for all transaction execution. PTBs allow you to bundle up to 1024 operations into a single atomic transaction, providing significant gas savings and better performance.

```tsx
// Example: Multiple operations in a single PTB
const tx = new Transaction();

// Split coins, transfer to multiple recipients, and call a Move function
const [coin1, coin2] = tx.splitCoins(tx.gas, [100, 200]);
tx.transferObjects([coin1], recipientAddress1);
tx.transferObjects([coin2], recipientAddress2);
tx.moveCall({
  target: `${packageId}::module::function`,
  arguments: [tx.object(objectId)]
});

// All operations execute atomically
await client.signAndExecuteTransaction({
  transaction: tx,
  signer: keypair
});
```

### Data Models

```
Project Object
├── Basic Info (title, description, logo)
├── Funding Address
├── Walrus Site ID
├── Subdomain
└── Verification Status

Campaign Object
├── Project Reference
├── Goal & Limits
├── Date Range
├── Recipient Address
└── Split Model

Donation Object
├── Donor Address
├── Amount
├── Campaign/Project Reference
└── Fee Distribution

```

---

## 7. Walrus Sites Integration

### Deployment Architecture

```
Vite Production Build
    ↓
Optimized Bundle (HTML/JS/CSS in dist/)
    ↓
Walrus Site Builder
    ↓
Deployed to Walrus Network
    ↓
Accessible via Portal (*.wal.app)

```

### Site Management

1. **Main Platform** - CrowdWalrus frontend on Walrus
2. **Project Sites** - Individual sites for each project
3. **Dynamic Updates** - Content updates without redeployment
4. **Subdomain Routing** - SuiNS integration

### Deployment Configuration

```yaml
# sites-config.yaml
package: 0x[WALRUS_SITES_PACKAGE_ID]
general:
  rpc_url: https://fullnode.testnet.sui.io:443
  gas_budget: 500000000

```

---

## 8. Development Workflow

### Environment Setup

| Environment | Sui Network | Walrus Network | Purpose |
| --- | --- | --- | --- |
| **Local** | Local node | Local storage | Development |
| **Staging** | Testnet | Testnet | Testing |
| **Production** | Mainnet | Mainnet | Live users |

### Development Process

1. **Local Development** - Vite
2. **Testing** - Unit and integration tests
3. **Build** - Static export generation
4. **Deploy** - Upload to Walrus Sites
5. **Verify** - Test on live network

### Key Commands

```bash
# Development
npm run dev             # Start Vite dev server
npm run build           # Build production bundle
npm run preview         # Preview production build
npm run test            # Run test suite with Vitest

# Deployment
site-builder publish ./dist      # Deploy to Walrus
site-builder update <id> ./dist  # Update existing site
```

---

## 9. Data Flow Architecture

### Read Operations

```
Component → Custom Hook → TanStack Query → Sui RPC (polling) → Blockchain
                                    ↓
                            Cached Response
                                    ↓
                        Stale-while-revalidate
```

> **Note**: Real-time event subscriptions currently use polling due to WebSocket deprecation. Set appropriate polling intervals based on our application's requirements and rate limits.
> 

### Write Operations

```
User Action → Transaction Builder → Wallet Sign → Sui Network
                                           ↓
                                    Event Emission
                                           ↓
                                    Cache Update

```

### Storage Operations

```
Media Upload → Walrus Quilt → Save Batch Data → Walrus → Get Batch ID
                                           ↓
                                 Store Batch ID on Sui
```

---

## 10. Monitoring and Analytics

### Key Metrics

- **Blockchain Metrics**: Transaction success rate, gas costs
- **User Metrics**: Wallet connections, active projects
- **Platform Metrics**: Total donations, platform fees collected

### Error Handling

- Client-side error boundaries
- Transaction failure recovery
- Network error retries
- User-friendly error messages

---

### 11. Event Handling and Real-time Data

### Current Limitations

The Sui WebSocket API for event subscriptions (`suix_subscribeEvent` and `suix_subscribeTransaction`) was deprecated in July 2024. Currently, applications must use a polling approach:

```tsx
*// Poll for events every 2 seconds*
const pollForEvents = async () => {
  const events = await client.queryEvents({
    query: { 
      MoveModule: { 
        package: CONFIG.PACKAGE_ID,
        module: 'crowdfunding'
      }
    },
    cursor: lastEventCursor,
    limit: 50
  });
  
  *// Process new events*
  if (events.data.length > 0) {
    processEvents(events.data);
    lastEventCursor = events.nextCursor;
  }
  
  *// Continue polling*
  setTimeout(pollForEvents, 2000);
};
```

### Future Migration Path

- **Short-term**: Continue using polling with `queryEvents` and `queryTransactionBlocks`
- **Medium-term**: gRPC API with streaming support (currently in beta)
- **Considerations**: Implement exponential backoff to handle rate limits

## 12. Deployment Strategy

### Build Process

1. **TypeScript Compilation** - Type checking
2. **Vite Build** - Production bundle generation via Rollup
3. **Asset Optimization** - Minification, compression
4. **Walrus Upload** - Deploy to decentralized storage

### CI/CD Pipeline

```
Git Push → GitHub Actions → Build → Test → Deploy to Testnet
                                      ↓
                              Manual Approval
                                      ↓
                              Deploy to Mainnet

```

### Deployment Checklist

- [ ]  Environment variables configured
- [ ]  Smart contract addresses updated
- [ ]  RPC endpoints verified
- [ ]  Build successful
- [ ]  Tests passing
- [ ]  Walrus deployment successful
- [ ]  Site accessible via portal
- [ ]  Event polling intervals configured (recommended: 2-5 seconds)
- [ ]  Rate limiting handled with exponential backoff
- [ ]  PTB operations optimized to minimize transactions
- [ ]  Fallback strategy for missed events during downtime

---

## Conclusion

The CrowdWalrus frontend architecture leverages Vite’s powerful features with Sui blockchain integration to create a fully decentralized crowdfunding platform. By using static site generation and Walrus Sites for hosting, we eliminate the need for traditional backend infrastructure while maintaining a modern web application experience.

### Key Architectural Benefits

- **True Decentralization**: No central servers or databases
- **Cost Efficiency**: Minimal hosting costs via Walrus
- **Scalability**: Horizontal scaling through decentralized storage
- **Security**: Blockchain-level security and transparency
- **Developer Experience**: Modern tooling with TypeScript and Vite

This architecture ensures CrowdWalrus can operate as a censorship-resistant, peer-to-peer crowdfunding platform while providing the development efficiency and user experience expected from modern web applications.

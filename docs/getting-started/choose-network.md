---
title: Choose Sui Mainnet Network
---

# Choose Sui Mainnet Network

CrowdWalrus is a **non-custodial crowdfunding app that runs only on Sui**.  
Your wallet network matters because **Mainnet** and **Testnet** are two different worlds—even if your address looks the same.

:::info
**Regular users:** use **Sui Mainnet** (real funds).  
**Developers/testers only:** use **Sui Testnet** (free test tokens).
:::

---

## Why this exists

On Sui, your wallet can be connected to different networks:

- **Mainnet** → real assets, real consequences
- **Testnet** → free test tokens, safe for QA and demos

If your wallet is on one network and CrowdWalrus is using another, you’ll see issues like:
- transactions failing to build/sign
- “network mismatch” behavior
- transfers not showing up where you expect

---

## Mainnet vs Testnet

| Network | Best for | Tokens | Faucet? |
|---|---|---|---|
| **Sui Mainnet** | Real fundraising & contributions | Real SUI (gas), real WAL (storage), real donation tokens | ❌ No faucet |
| **Sui Testnet** | Developers, QA, demos | Test SUI / Test WAL / Test USDC (no real value) | ✅ Yes |

---

## Make sure you’re on Sui Mainnet in Slush Wallet

Before you create a campaign or contribute:

### 1) Check the network in wallet settings
Open **Slush → Settings → Network** and select **Sui Mainnet**.

<p align="center">
  <img src="/img/n1.png" alt="Slush - mainnet selection"  />
</p>



### 2) Confirm during the signing prompt
When CrowdWalrus asks you to sign, your wallet confirmation should clearly show the network.  
If you see **Testnet**, switch back before proceeding.

### 3) Quick sanity checks
- If you’re using a **faucet**, you’re on **Testnet** by definition.
- If your explorer link shows **Testnet**, you’re not on Mainnet.

:::tip
For Mainnet onboarding: you’ll typically **buy SUI**, then optionally **swap some SUI/USDC to WAL** to pay for Walrus storage.
:::

---

## What’s next

- Next: [Get SUI for gas](./get-sui-for-gas.md)
- Next: [Get WAL for storage](./get-wal-for-storage.md)

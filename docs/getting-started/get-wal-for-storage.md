---
title: Get $WAL for storage
---

# Get $WAL for storage

CrowdWalrus uses **Walrus** to store rich, verifiable content such as:

- campaign cover images
- campaign story content
- updates and media
- profile avatars

Storage on Walrus is paid using **WAL**.  
If you plan to create or actively manage a campaign, you’ll need WAL.

:::info
**Mainnet users:** need **real WAL on Sui Mainnet**.  
**Developers / testers:** can use **test WAL on Sui Testnet**.
:::

---

## WAL on Sui Mainnet (real WAL)

### Official WAL coin on Sui

This is the **canonical WAL asset used by Walrus on Sui Mainnet**.

**Coin type / address**
`0x356a26eb9e012a68958082340d4c4116e7f55615cf27affcff209cf0ae544f59::wal::WAL`

**Explorer**
https://suivision.xyz/coin/0x356a26eb9e012a68958082340d4c4116e7f55615cf27affcff209cf0ae544f59::wal::WAL

You can use the explorer to:
- verify the token contract
- confirm balances
- inspect WAL transfers on-chain

---

### How to get real WAL (Mainnet)

#### Option A — Buy WAL on an exchange
If $WAL is available on an exchange in your region:

1. Buy **$WAL**
2. Withdraw to your **Sui wallet address** (`0x...`)
3. Select **Network: Sui / Sui Mainnet**
4. (Recommended) Withdraw a small test amount first

:::caution
Do **not** withdraw via Ethereum or other EVM networks.  
CrowdWalrus works on **Sui Mainnet only**.
:::

---

#### Option B — Swap into WAL on Sui (on DEXes)

If you already have a token on Sui:

1. Connect your wallet to a Sui DEX
2. Swap **SUI → WAL** or **USDC → WAL**
3. Keep some **SUI** for gas

:::tip
You only need WAL when paying for Walrus storage.  
Start small, you can always top up later.
:::

**Direct swap examples (SUI → WAL)**

- **Bluefin**
  - <a href="https://trade.bluefin.io/swap/SUI-WAL" target="_blank" rel="noopener noreferrer">Open SUI → WAL swap page</a>

- **Cetus**
  - <a href="https://app.cetus.zone/swap/0x2::sui::SUI/0x356a26eb9e012a68958082340d4c4116e7f55615cf27affcff209cf0ae544f59::wal::WAL" target="_blank" rel="noopener noreferrer">Open SUI → WAL swap page</a>

---

## WAL on Sui Testnet (test WAL)

For development, QA, or demos, you can use **test WAL**.  
Test WAL has **no real value** and works **only on Sui Testnet**.

### Testnet WAL coin

**Coin type / address**
`0x8270feb7375eee355e64fdb69c50abb6b5f9393a722883c1cf45f8e26048810a::wal::WAL`


**Explorer**
https://suiexplorer.com/coin/0x8270feb7375eee355e64fdb69c50abb6b5f9393a722883c1cf45f8e26048810a::wal::WAL?network=testnet

Use this explorer to confirm:
- you are on **Testnet**
- your wallet holds **test WAL**
- transactions are not on Mainnet

---

### How test WAL is typically obtained

Depending on the Walrus tooling you’re using, test WAL may be obtained by:

- Walrus testnet UI flows
- Walrus CLI workflows
- Exchanging **test SUI → test WAL**
- Other official Walrus test utilities

More details:
https://docs.wal.app/docs/usage/networks

---

## How WAL is used (epochs)

Walrus storage is purchased for **epochs** (prepaid storage time windows).

- Larger or richer content → more WAL
- Storage usage is transparent and verifiable on-chain
- You only pay when you upload or update stored content

---

## Quick checklist

Before uploading content on CrowdWalrus:

- Wallet is on **Sui Mainnet** (or Testnet if testing)
- You have **SUI** for gas
- You have **WAL** for storage
- WAL coin address matches the official contract above

---

## What’s next

- Back: **Choose Sui Mainnet Network**
- Next: Campaign creation & content uploads

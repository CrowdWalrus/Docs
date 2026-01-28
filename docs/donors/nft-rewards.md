# NFT Rewards & Donor Levels

CrowdWalrus includes a participation layer: **NFT badge rewards**. As you support campaigns over time, you can earn donor-level NFTs that live in your wallet and show up on your CrowdWalrus profile.

## What you earn

When you contribute, CrowdWalrus can mint an **NFT badge** to your wallet.

Badges are:

- **visible on your CrowdWalrus profile**
- visible in your wallet (as NFTs)
- a simple, on-chain **proof of participation**

:::info
Badges are meant to celebrate participation — they are **not** an investment product, and they don’t represent ownership, profit-sharing, or a promise of future value.
:::

---

## Where badges show up

### On your profile


<p align="center">
![Profile showing NFT badges](/img/d4.png)
</p>

### In your wallet

Most Sui wallets display NFTs under a dedicated **Collectibles / NFTs** tab.

---

## Donor tiers

To earn a tier, you must meet **both**:

- **Min # Payments** (number of successful contribution transactions)
- **Min Total Value** (your aggregated contribution value in USD)

| Level | NFT Tier Name | Min # Payments | Min Total Value | Human feel |
|------:|---------------|---------------:|----------------:|------------|
| 1 | Harbor Pup | 1 | $10 | “I showed up and supported for real.” |
| 2 | Tusk Starter | 2 | $150 | “I didn’t just donate once — I came back.” |
| 3 | Icebreaker | 4 | $400 | “I’m building momentum by backing campaigns consistently.” |
| 4 | Wave Warden | 8 | $900 | “I’m a reliable regular — people can count on me.” |
| 5 | Arctic Elder | 15 | $1,800 | “I’m top-tier community power — a serious long-term supporter.” |

---

## How eligibility is detected (automatic)

Right after **any successful contribution**, CrowdWalrus checks whether you’ve crossed a tier threshold.

Here’s the flow:

1. Your contribution transaction confirms on-chain.
2. CrowdWalrus updates your supporter stats:
   - total number of contributions
   - total contribution value (USD)
3. The system checks your highest eligible tier.
4. If you newly qualify, the **badge is minted to your wallet** and becomes visible on your profile.

:::tip
You don’t need to “claim” anything. If you qualify, it’s detected automatically after the payment is confirmed.
:::

---

## How “Min Total Value” is calculated

CrowdWalrus computes an **USD value at the time of payment** (not based on later price changes).

- Each contribution is valued using an oracle price **at the time you pay**
- Your tier value is the **sum** of those recorded USD values
- The value does **not** update retroactively if token prices move later

:::warning
Crypto prices move. Your tier progress is based on the USD value recorded **at contribution time**, not on today’s market price.
:::

---

## What it is / what it is not

**What it is**
- A transparent, on-chain way to show ongoing support
- A collectible badge that’s visible to you and the community

**What it is not**
- A refund mechanism
- A guarantee of perks, financial return, or campaign outcomes
- A custody model (badges are minted directly to your wallet)

---

## What’s next

Next: [Creating a Profile](./creating-a-profile.md)

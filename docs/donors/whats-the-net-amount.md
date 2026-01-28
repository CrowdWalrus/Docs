# What’s the Net Amount?

When you donate on CrowdWalrus, there are a few numbers to understand. They answer two questions:

- **How many tokens did you send?**
- **How much actually reached the campaign recipient?**

## The three numbers that matter

1. **Donation amount (gross)** — the token amount you choose and send (e.g., `10 SUI`, `50 USDC`)
2. **Platform fee** — *only if the campaign is commercial* (deducted from your donation amount)
3. **Net amount** — what the campaign recipient receives (after the platform fee, if any)

Separately, your wallet will also show **gas**.

## Platform fee (commercial campaigns only)

CrowdWalrus applies a **5% platform fee only to commercial campaigns**.

- Fees are expressed in **bps** (basis points)
- **500 bps = 5%**
- The fee is deducted from the **donation amount**
- The remaining tokens are the **net amount** sent to the campaign recipient

### Example (commercial campaign — 5% fee)

- You donate **10 SUI**
- Platform fee (**5%**) = **0.5 SUI**
- **Net amount to recipient** = **9.5 SUI**

<p align="center">
  <img src="/img/d3.png" alt="Donations table"  />
</p>


:::info
The platform fee split happens **on-chain**. Anyone can verify the exact amounts (recipient vs platform) by checking the donation transaction.
:::

## Gas fees (paid to the network)

Gas is **not** part of the donation amount.

- **You pay gas to the Sui network** (validators) to execute the transaction
- Gas is paid in **SUI**
- Gas is **not related to the donation size** (it depends on transaction complexity and network conditions)
- In most cases it’s a **tiny amount** compared to the donation

:::tip
Think of gas as the “network execution fee.” It does **not** reduce the campaign’s net amount.
:::

## USD value (price at the time of donation)

CrowdWalrus also shows a **USD value** for donations, based on the **token price at the time your donation is made**.

- The app fetches a **fresh price update** (via a price oracle) when you donate
- It calculates the donation’s **USD value** using that price snapshot
- This USD value is used for:
  - campaign totals and progress bars
  - donor totals
  - reward / badge thresholds (if enabled)

:::warning
USD value is a **snapshot** at donation time. Token prices can move after you donate, but the **on-chain token amounts** you sent (and the net amount received) do not change.
:::

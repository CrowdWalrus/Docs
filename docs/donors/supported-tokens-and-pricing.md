# Supported Tokens & Pricing

CrowdWalrus is built on **Sui**, so contributions are made in **Sui-native tokens**. You always send tokens on-chain — and CrowdWalrus shows an **estimated USD value** so campaigns are easier to compare and track.

:::info
**Non-custodial by design**  
Your contribution is sent **directly** to the campaign’s recipient address (and any platform-fee address if applicable). CrowdWalrus does not hold or escrow funds — we only index and display what happened on-chain.
:::

---

## Supported donation tokens

CrowdWalrus currently supports these tokens for donations and contributions:

| Token | Symbol | Typical use |
|------|--------|-------------|
| Sui | **$SUI** | Native Sui token (also used for gas) |
| USD Coin | **$USDC** | Stable-value contributions (less price volatility) |
| Tether | **$USDT** | Stable-value contributions (less price volatility) |
| Walrus | **$WAL** | Walrus ecosystem token |
| Sui Name Service | **$SUINS** | SuiNS ecosystem token |
| Bluefin | **$BLUEFIN** | Bluefin ecosystem token |

:::tip
**Why you might choose stablecoins**  
If you want your donation’s USD value to be more predictable, **$USDC / $USDT** are usually the simplest option (though they can still deviate slightly from $1).
:::

---

## How USD value is calculated

CrowdWalrus uses a **price oracle** to compute a USD value for each contribution.

### The important detail: **USD value is locked at time of payment**
When you donate:

1. Your wallet signs the token transfer transaction.
2. The transaction includes (or fetches) a **fresh oracle price update**.
3. CrowdWalrus computes the **USD value at the moment the payment happens** (the on-chain execution time).
4. That USD value is what’s used in totals and progress tracking.

:::info
**Time-of-payment pricing (why it matters)**  
Campaign totals and progress toward a USD goal are calculated using the token’s **price at the time of each contribution** — not the price later.  
This avoids “moving targets” and keeps the fundraising history **honest and verifiable** even if the market changes.
:::

### What the USD value is used for (and what it is not)

**Used for:**
- Campaign totals (e.g., “raised $12,340”)
- Progress bars vs the campaign’s USD goal
- Donor totals and stats
- Reward thresholds / donor levels (if enabled)

**Not used for:**
- Changing how many tokens you send
- Changing how many tokens the recipient receives (that’s determined by the on-chain transfer and fee policy)

---

## Price freshness (and why a transaction can fail)

Oracle prices have a **max age** window. If a price update is **too old**, the transaction may fail **by design**.

If this happens:
- Retry the donation after a moment
- Make sure your wallet/network connection is stable
- If the app offers multiple tokens, try a different supported token (stablecoins often have very reliable pricing feeds)

:::warning
**USD values are informational**  
Crypto prices move. USD values shown in the UI are meant for **readability and comparability**, not guarantees or financial advice.
:::

---

## Supported token list is on-chain

The list of supported donation tokens is controlled by an **on-chain token registry**:

- If a token is **disabled**, it won’t appear in the donation dropdown.
- If a token is **enabled**, it can appear immediately without requiring a frontend update.

---

Next: [What’s the Net Amount?](./whats-the-net-amount.md)

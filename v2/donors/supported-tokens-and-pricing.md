# Supported Tokens & Pricing

CrowdWalrus can support multiple donation tokens.

## Supported tokens
The token list is controlled by an on-chain registry.
If a token is disabled, it won’t appear in the donation dropdown.

## USD display (oracle-based)
CrowdWalrus uses a price oracle to compute an **USD value** for each donation.

This USD value is used for:
- campaign totals
- donor totals
- reward thresholds

It does **not** change how many tokens you send.

## Price freshness
Oracle prices have a “max age” window.
If the price is stale, the transaction can fail (by design).

---

Next: [What’s the Net Amount?](./whats-the-net-amount.md)

# Smart Contract Overview

This section is intentionally high-level (dev-friendly without turning into a Move textbook).

## Key objects

### Campaign
Holds campaign metadata, payout config, and references to Walrus content.

### CampaignOwnerCap
An ownership capability object that authorizes edits, updates, deactivation, and deletion.

### Donation records
Donations are on-chain transactions that:
- transfer coins
- split amounts between recipient and platform
- record oracle-derived USD value

### Profile
Stores identity metadata + aggregated stats.

### Badge rewards
Mints NFT badges when donation thresholds are reached.

## Key invariants (by design)
To prevent bait-and-switch:
- funding goal is immutable
- recipient address is immutable
- subname is immutable

---

Next: [Indexer & APIs](./indexer-and-apis.md)

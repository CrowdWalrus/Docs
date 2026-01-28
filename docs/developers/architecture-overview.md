# Architecture Overview

CrowdWalrus is built like a modern web3 app:

- **Frontend**: static site (can be hosted on Walrus Sites)
- **Sui smart contracts**: campaigns, donations, profiles, rewards
- **Walrus storage**: rich content blobs (stories, images, updates, avatars)
- **Indexer + API**: faster discovery/search and pagination
- **Oracle integration**: token → USD valuation for stats and badges

## Data flow (high level)

1. User signs a transaction in their wallet.
2. Contract emits events.
3. Indexer ingests events → serves API.
4. Frontend queries indexer for pages and stats.

---

Next: [Walrus Storage (Quilt)](./walrus-storage-quilt.md)

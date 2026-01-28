# Walrus Storage (Quilt)

Walrus is optimized for storing “blob” data.
CrowdWalrus uses:
- **Quilts** for campaign story + images (multiple files bundled)
- **Blobs** for profile avatars and campaign updates

## Epoch model
Walrus storage is prepaid for a number of epochs.
See Walrus docs:
- https://docs.wal.app/docs/usage/networks

## Public by default
Content stored on Walrus is publicly retrievable if you know the blob id.
If you need private storage, you’ll want an encryption layer (e.g., Seal) — this may be a future addition.

---

Next: [Smart Contract Overview](./smart-contract-overview.md)

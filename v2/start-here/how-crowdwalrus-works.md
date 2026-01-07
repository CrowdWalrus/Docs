# How CrowdWalrus Works (Sui + Walrus + SuiNS)

CrowdWalrus is a “hybrid on-chain app”:

- **Sui** stores the state that must be trustless and verifiable.
- **Walrus** stores the rich content that would be expensive or impractical on-chain.
- **SuiNS subnames** make campaigns and profiles human-readable.

## The big picture

### 1) You create a campaign
When you create a campaign, the app:
1. uploads your **cover image + rich story** to Walrus (as a *Quilt*, i.e., a batch of files)
2. writes a **Campaign object** on Sui that includes:
   - campaign metadata (name, short description, dates)
   - payout details (recipient + platform fee policy)
   - references to Walrus content (e.g., `walrus_quilt_id`, storage epochs)
   - your campaign subname label (for SuiNS)

### 2) Supporters donate
When someone donates, the app creates an on-chain transaction that:
- transfers the donation coin(s)
- splits amounts between:
  - the **campaign recipient**
  - the **platform fee address** (if applicable)

Separately, the app fetches a fresh **Pyth price update** so the donation gets an **USD value** recorded for stats and badges.

### 3) You post updates
Updates are also on-chain entries that point to Walrus content (so you can include rich text and images).

### 4) Identity via SuiNS subnames
CrowdWalrus can register leaf subnames under its domains:
- Mainnet: `crowdwalrus.sui`
- Testnet: `crowdwalrus-test.sui`

So your campaign can be referenced by a human name like:
- `my-campaign.crowdwalrus.sui`

…and your profile can use a similar subname.

## What goes where

### Stored on Sui
- Campaign metadata + state flags (verified, active, deleted)
- Donation records (amounts, coin type, recipients)
- Policy configuration (platform fee bps + platform address)
- Token registry (supported tokens + oracle feed IDs)
- Profile stats (total donated, badges earned)

### Stored on Walrus
- Campaign story (rich editor JSON)
- Cover images and embedded media
- Profile avatars
- Campaign updates content

## Why this architecture is awesome

- **Cheap + rich content**: Walrus is built for blobs/media.
- **On-chain trust**: the money flow is verifiable.
- **Composable**: other apps can build on top of the same objects.

---

**Next:** [Key Concepts & Glossary](./key-concepts-glossary.md).

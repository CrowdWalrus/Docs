# Key Concepts & Glossary

A quick dictionary so the rest of the docs feel obvious.

## Core objects

### Campaign
A fundraising page with:
- a goal (in USD terms for readability)
- a funding window (start/end)
- a payout setup (recipient + policy)
- Walrus-backed rich content

### Profile
A user identity layer.
Profiles can include:
- avatar (Walrus)
- name + bio + socials
- an optional SuiNS subname
- badges / NFT rewards

### Update
A progress post tied to a campaign.
Updates are on-chain records that point to Walrus content.

## Trust signals

### Verified badge
A badge that indicates a campaign has been reviewed against basic trust and safety criteria.

**Important:** CrowdWalrus does **not** block unverified campaigns from existing. It only affects **listing/visibility**.

### Listing
The “home/explore” surfaces that show campaigns to newcomers.
Usually only verified campaigns are listed.

## Storage & costs

### Walrus blob
A single stored object on Walrus.

### Quilt
A “bundle” of multiple files stored efficiently as one unit.
CrowdWalrus uses quilts for campaign content (story JSON + images).

### Epochs (Walrus)
Walrus storage is bought for a number of **epochs** (time periods). You pay upfront in **WAL**.

### Gas fees (Sui)
Every on-chain action needs a small amount of **SUI** to pay for computation.

### Net amount
The amount that reaches the **campaign recipient** after any configured platform fee, excluding your gas.

## Payouts

### Policy preset
A named payout configuration (e.g., Nonprofit vs Commercial) that sets:
- platform fee (basis points)
- platform fee address

## IDs & addresses

### Sui address
A `0x...` address on Sui.

### Tx digest
A transaction ID you can paste into a Sui explorer.

---

If you ever feel lost, jump to [FAQ](../help/faq.md).

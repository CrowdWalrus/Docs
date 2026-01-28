# Key Concepts & Glossary

A quick dictionary so the rest of the CrowdWalrus docs feel obvious. Each term includes a “learn more” link where the docs already cover it in depth.

:::tip TL;DR
- **CrowdWalrus is non-custodial**: funds move wallet → recipient via on-chain transactions you sign.
- **Sui = state + money flow**, **Walrus = rich content storage** (images, story editor, updates).
- **Verification affects listing/visibility**, not whether a campaign can exist.
:::

---

## Foundations

### Decentralization
A system design where control isn’t held by a single party. In CrowdWalrus, the core idea is:
- **fund flows** and **campaign state** are on-chain (verifiable),
- the platform does not custody funds,
- anyone can verify activity via transaction history.

**Learn more:** [How CrowdWalrus Works](./how-crowdwalrus-works.md), [Security Model](../developers/security-model.md)

### Blockchain
A shared ledger where transactions and state changes are recorded publicly and are hard to tamper with. CrowdWalrus uses blockchain for:
- campaigns and their status,
- donations/contributions,
- updates (as on-chain records pointing to Walrus content).

**Learn more:** [How CrowdWalrus Works](./how-crowdwalrus-works.md)

### Token
A digital asset on-chain (e.g., SUI, USDC, WAL). On CrowdWalrus:
- supporters contribute using supported tokens,
- the UI may show **USD value** for comparison (based on oracle price),
- storage on Walrus is paid in **WAL**.

**Learn more:** [Supported Tokens & Pricing](../donors/supported-tokens-and-pricing.md), [Get WAL for storage](../getting-started/get-wal-for-storage.md)

---

## Wallets, addresses, and transactions

### Wallet address (Sui address)
A `0x...` address on Sui that can hold tokens and sign transactions.

**Learn more:** [Install a Sui wallet](../getting-started/install-a-sui-wallet.md)

### Connect wallet
The act of linking your wallet app/extension to the CrowdWalrus dApp so you can:
- see your address and balances,
- sign transactions (create campaign, contribute, post updates).

**Learn more:** [Install a Sui wallet](../getting-started/install-a-sui-wallet.md), [How to Contribute](../donors/how-to-contribute.md)

### Recipient address
The wallet address that receives campaign funds. In CrowdWalrus, it’s intentionally **immutable** to reduce bait-and-switch risk.

**Learn more:** [Choosing a recipient wallet](../campaign-owners/choosing-recipient-wallet.md)

### Sui chain
The blockchain network CrowdWalrus runs on (Testnet or Mainnet). All core actions are Sui transactions.

**Learn more:** [Choose network](../getting-started/choose-network.md), [How CrowdWalrus Works](./how-crowdwalrus-works.md)

### Sui transaction (tx)
A signed action on Sui (e.g., create campaign, donate, post update). Transactions produce a **tx digest** you can paste into a Sui explorer.

**Learn more:** [How to Contribute](../donors/how-to-contribute.md), [Troubleshooting](../help/troubleshooting.md)

### On-chain receipts
A practical way to say: “the proof is on-chain.” Receipts can include:
- tx digests for donations and updates,
- public contract events,
- verifiable splits (recipient vs platform fee).

**Learn more:** [Transparency Playbook](../trust-safety/transparency-playbook.md), [Managing Your Campaign](../campaign-owners/managing-your-campaign.md)

---

## Core objects

### Campaign
A fundraising page with:
- a **goal** (shown in USD terms for readability),
- a **funding window** (start/end),
- a **recipient address** + payout policy,
- Walrus-backed rich content (cover + story).

**Learn more:** [Launch a Campaign](../campaign-owners/launch-a-campaign.md), [How CrowdWalrus Works](./how-crowdwalrus-works.md)

### Update
A progress post tied to a campaign.
Updates are **on-chain records** that point to Walrus content (so you can include rich text + images).

**Learn more:** [Managing Your Campaign](../campaign-owners/managing-your-campaign.md), [Transparency Playbook](../trust-safety/transparency-playbook.md)

### Profile
A user identity layer that can include:
- avatar (stored on Walrus),
- name + bio + socials,
- optional SuiNS subname,
- contributions and NFT rewards.

**Learn more:** [Creating a Profile](../donors/creating-a-profile.md)

---

## Campaign statuses

CrowdWalrus uses a simple model based on dates + flags:

### Open Soon
Start date is in the future. Page is readable; contributions aren’t open yet.

### Funding
Now is between start and end. Contributions are enabled.

### Active
End date has passed. Campaign is “complete,” but the page stays up for updates, transparency, and history.

### Ended
Campaign is deactivated or deleted. Contributions are disabled.

**Learn more:** [Campaign Statuses](../campaign-owners/campaign-statuses.md)

---

## Contributions and fundraising metrics

### Contribution
A supporter’s on-chain donation transaction.

**Learn more:** [How to Contribute](../donors/how-to-contribute.md)

### Number of contributors
The count of unique supporters who contributed to a campaign (typically derived from on-chain donation data via the indexer).

**Learn more:** [How to Contribute](../donors/how-to-contribute.md)

### Funds raised
A campaign total shown in the UI. This usually includes:
- total contributed value (often in **USD value** for comparability),
- sometimes split into **gross** and **net** views depending on the screen.

**Learn more:** [Supported Tokens & Pricing](../donors/supported-tokens-and-pricing.md)

### Value (USD)
An estimated USD value recorded for stats and comparability across tokens, based on oracle pricing at time of contribution. You still donate in the token you select.

**Learn more:** [Supported Tokens & Pricing](../donors/supported-tokens-and-pricing.md)

### Net value / Net amount
What the **recipient actually receives** after any configured platform fee (gas is separate).

**Learn more:** [What’s the Net Amount?](../donors/whats-the-net-amount.md)

### Fee (platform fee)
Some campaigns apply a platform fee (configured by policy preset). Fees are:
- shown before you sign,
- enforced on-chain in the donation transaction.

**Learn more:** [What’s the Net Amount?](../donors/whats-the-net-amount.md), [Non-profit vs Commercial Campaigns](../campaign-owners/nonprofit-vs-commercial.md)

---

## Campaign types (policy presets)

### Non-profit campaign
A policy preset typically intended for public goods / nonprofits, often with reduced or zero platform fee (exact rules depend on current presets and verification requirements).

**Learn more:** [Non-profit vs Commercial Campaigns](../campaign-owners/nonprofit-vs-commercial.md)

### Commercial campaign
A policy preset for commercial fundraising, typically with a platform fee applied and disclosed on-chain.

**Learn more:** [Non-profit vs Commercial Campaigns](../campaign-owners/nonprofit-vs-commercial.md)

---

## Trust signals: verification and listing

### Verification (Verified badge)
A review process that can grant a campaign a **verified badge** indicating it met baseline trust & safety criteria.

**Important:** verification does **not** block unverified campaigns from existing. It mainly affects **listing/visibility**.

**Learn more (docs site):** [Verification & Listing](../campaign-owners/verification-and-listing.md), [Verification Process](../trust-safety/verification-process.md)  
**More info (GitHub):** [Read the verification process spec](https://github.com/CrowdWalrus/Docs/blob/main/VerificationProcess.md)  
**Apply here:** [Open the verification application form](https://form.typeform.com/to/HaM6QLE7)

### Listing
The “home/explore” discovery surfaces that show campaigns to newcomers. Usually:
- verified campaigns are eligible to be listed,
- unverified campaigns remain accessible via direct link.

**Learn more:** [Verification & Listing](../campaign-owners/verification-and-listing.md)

---

## Identity: SuiNS subnames

### SuiNS subnames (CrowdWalrus domains)
Human-readable names for campaigns and profiles under CrowdWalrus domains. Examples:
- `mycampaign.crowdwalrus.sui`
- `myprofile.crowdwalrus.sui`

This makes sharing and identity easier than raw `0x...` addresses.

**Learn more:** [Campaign SuiNS Subname](../campaign-owners/campaign-suins-subname.md), [Profile SuiNS Subname](../donors/profile-suins-subname.md)

---

## Storage: Walrus

### Walrus storage
Walrus stores rich content that would be expensive or impractical on-chain, such as:
- campaign cover images + story editor state,
- update content,
- profile avatars.

**Learn more:** [How CrowdWalrus Works](./how-crowdwalrus-works.md), [Walrus Storage (Quilt)](../developers/walrus-storage-quilt.md)

### Walrus blob
A single stored object on Walrus (think: one piece of content).

### Quilt (Walrus)
A “bundle” of multiple files stored efficiently as one unit. CrowdWalrus uses quilts for campaign content (story JSON + images).

**Learn more:** [Walrus Storage (Quilt)](../developers/walrus-storage-quilt.md), [Storage epochs](../campaign-owners/storage-epochs.md)

---

## Rewards

### NFT rewards
CrowdWalrus can mint NFT badges based on participation (e.g., donation count and/or total USD value). These badges are:
- visible on your profile,
- visible in your wallet as NFTs.

**Learn more (docs site):** [NFT Rewards & Donor Levels](../donors/nft-rewards.md)  
**More info (GitHub):**
- [NFT reward mechanism spec](https://github.com/CrowdWalrus/Docs/blob/main/NFT-Reward-Mechanism.md)  
- [Implementation tracking issue (#109)](https://github.com/CrowdWalrus/crowdwalrus-dapp/issues/109)

---

:::warning Transparency & privacy
Anything stored on-chain or on Walrus is effectively public. Don’t upload private keys, passports, or sensitive personal data.
:::

If you ever feel lost, jump to [FAQ](../help/faq.md).
``` :contentReference[oaicite:0]{index=0}

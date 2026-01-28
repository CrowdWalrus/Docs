# What is CrowdWalrus

CrowdWalrus is a **decentralized crowdfunding platform** built on **Sui + Walrus** — for builders, communities, and creators who want fundraising that’s **transparent, non-custodial, and censorship-resistant by default**.

**No gatekeepers. No middlemen. Just you and your supporters.** 🦭

:::info TL;DR
CrowdWalrus makes fundraising verifiable:

- **On-chain state:** campaigns, donations, updates, and profiles live as Sui transactions/objects.
- **Censorship-resistant media:** your story, cover image, and updates are stored on Walrus (decentralized blob storage).
- **Non-custodial payouts:** donations are sent in one on-chain transaction and split to the campaign recipient (and platform fee address, if configured).
- **Trust signals, not permission:** anyone can create a campaign; verification affects listing/visibility, not whether your campaign can exist.
:::

## Why it exists

Traditional crowdfunding is powerful, but it comes with tradeoffs:

- Platforms can de-list pages, freeze funds, or change rules overnight.
- Fees can be hard to audit.
- Data and media live behind a single company.
- Global supporters may face payment friction.

CrowdWalrus flips the model: the source of truth is public, programmable, and portable.

## CrowdWalrus vs traditional platforms

| Topic | Traditional crowdfunding | CrowdWalrus |
| --- | --- | --- |
| Custody | Platform/processor may custody funds | Donations move on-chain (non-custodial) |
| Auditability | Limited/opaque reporting | Anyone can verify transactions |
| Content durability | Pages/media can be removed | Media stored on decentralized storage |
| Fees | Can be hard to verify | Fee split is enforced on-chain |
| Access | Gatekeeping and regional restrictions | Permissionless campaign creation |

## Who CrowdWalrus is for

CrowdWalrus is built for:

- **Open-source teams & public goods** raising for audits, infra, research, or grant rounds
- **DAOs & on-chain communities** funding bounties, events, and shared initiatives
- **Creators & collectives** who want direct supporter funding and on-chain patronage
- **Nonprofits & local causes** who want transparent receipts and verifiable fundraising

## What you can do on CrowdWalrus

### For campaign owners

- Create a campaign (name, goal, dates, recipient address, categories, socials)
- Upload a cover + rich story (stored on Walrus)
- Edit campaign basics (some fields are intentionally immutable)
- Post on-chain updates (with Walrus-backed content)
- Deactivate or delete your campaign

### For supporters

- Contribute using supported tokens
- See an on-chain breakdown of where funds went (recipient vs platform fee)
- Earn **NFT badges** as you contribute and participate
- Create a profile to show your identity and contributions

## How it works in 60 seconds

1. **You create a campaign.** CrowdWalrus stores the campaign state on **Sui** and uploads your story + media to **Walrus**.
2. **Supporters donate.** A donation is a wallet-signed on-chain transaction. Funds go directly to the recipient and (optionally) a fee address.
3. **You post updates.** Updates are recorded on-chain and can reference new Walrus content (images, rich text).
4. **Identity stays human.** Optional **SuiNS subnames** make campaigns and profiles shareable (for example, `my-campaign.crowdwalrus.sui`).

:::tip About costs
On-chain actions require a little **SUI** for gas. Storing media requires **WAL** for Walrus storage time (epochs).
:::

## What CrowdWalrus is not

- It’s **not a custodian**: funds don’t sit in a CrowdWalrus bank account.
- It’s **not reversible**: blockchain transactions can’t be “chargebacked.”
- It’s **not a guarantee**: donating is supporting; outcomes depend on campaign owners.

## Trust & safety: open, but not lawless

CrowdWalrus is permissionless for creation, but trust still matters.

- **Verification** is a trust signal used for **listing/visibility**, not for blocking creation.
- **Reporting** exists to help the community flag scams, abuse, or policy violations.
- The best campaigns publish **updates + receipts** (links, commits, milestone notes, transaction IDs).

## Privacy note

Walrus content is public by default, and blockchain transactions are public. **Do not upload sensitive data** (private keys, passports, addresses, or anything you wouldn’t share publicly).

---


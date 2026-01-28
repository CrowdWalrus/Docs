# Campaign SuiNS Subname

Every CrowdWalrus campaign has a **SuiNS subname** — a short, human-readable label that becomes your campaign’s **on-chain name** *and* your **URL path**.

It’s the closest thing to a “campaign handle”.

:::info
## TL;DR
- Your campaign URL is: `https://crowdwalrus.xyz/campaigns/<campaign-subname>`
- Your SuiNS name is: `<campaign-subname>.crowdwalrus.sui` (mainnet)
- Subnames are **unique** and **scarce** (NFT-like). Once created, you **can’t rename** it.
:::

---

## Where your campaign lives

When you choose a subname like `my-campaign`, your campaign becomes:

- **Production URL:** `https://crowdwalrus.xyz/campaigns/my-campaign`
- **Staging URL:** `https://staging.crowdwalrus.xyz/campaigns/my-campaign`

:::tip
Use the URL in announcements, social posts, and sharing. It’s stable and easy to remember.
:::

---

## On-chain identity (SuiNS)

CrowdWalrus registers **leaf subnames** under its SuiNS domains:

- **Mainnet:** `crowdwalrus.sui`
- **Testnet:** `crowdwalrus-test.sui`

So your campaign can have an on-chain name like:

- `my-campaign.crowdwalrus.sui` (mainnet)
- `my-campaign.crowdwalrus-test.sui` (testnet)

This is **verifiable on-chain** and gives campaigns a consistent identity across the ecosystem.

---

## Why we treat subnames like NFTs

SuiNS names are **unique on-chain objects** (NFT-like):

- **scarce:** only one campaign can own a specific label under a domain
- **valuable:** short, clean names get taken fast
- **transferable (in principle):** SuiNS objects can be transferred, like NFTs

That said, CrowdWalrus adds an important constraint:

:::warning
**Subnames are immutable in the app today.**  
Once your campaign is created, you can’t rename its subname. If you need a different label, you must create a new campaign.
:::

---

## How binding works in CrowdWalrus

Today, CrowdWalrus **keeps the subname bound to the campaign contract** so the name reliably resolves to the same campaign over time.

- The subname is **tied to your campaign on-chain**
- The campaign is also associated with your **campaign recipient address** (so supporters can verify where funds go)
- Long-term, we may support **transfer flows** (e.g., ownership changes), but the campaign’s public identity remains **tamper-resistant**

:::info
This design prevents “bait-and-switch” behavior after people have shared or bookmarked your campaign.
:::

---

## Subname rules

Your subname must follow these rules:

- lowercase letters + numbers
- interior hyphens allowed (e.g. `my-campaign-2`)
- no leading/trailing hyphens (❌ `-abc` / `abc-`)

<p align="center">
![SuiNS subname available](/img/c3-subnameavailable.png)
![SuiNS subname taken](/img/c2-subnametaken.png)
</p>

---

## If your subname is taken

Try small variants that still look clean:

- add a suffix: `my-campaign-v2`, `my-campaign-2026`
- add a short keyword: `my-campaign-sui`, `my-campaign-grants`
- keep it short and pronounceable

---

## Subname vs Campaign name

These are different:

- **Campaign name** = the title people read (can be longer, more descriptive)
- **Subname** = the permanent handle used for URL + SuiNS identity

A good pattern is:
- campaign name: “Save the Mangroves in Bushehr”
- subname: `save-mangroves`

---

Next: [How to Contribute / Donate](../donors/how-to-contribute.md)

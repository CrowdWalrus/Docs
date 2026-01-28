# Launch a Campaign 
This is the **“from zero to fundraising”** path.

## Before you start
- A Sui wallet installed
- Enough **SUI** for gas
- Enough **WAL** for storage (cover image + campaign story and inline pictures)

## Step 1 — Open the campaign creator
In the app, click **Launch Your Campaign**.

<p align="center">
  <img src="/img/c1.png" alt="Start a campaign"  />
</p>


## Step 2 — Fill all required fields
You’ll provide:
- **Campaign name** 
This shows at the top of your campaign page and campaign cards.
- **Short description** (the one-line pitch - limit to 280 characters) 
- **Subname** (This works as our campaign slug, it gives you a unique SuiNS subname under `crowdwalrus.sui`, like `[YourCampaign].crowdwalrs.sui` and your campaign url will be like `www.crowdwalrus.sui/campaigns/[YourCampaign]`)

:::tip Find a memorable name.
Find a memorable and easy to remember name for your campaign, it might get valuable later. SuiSN subnames are like NFTs. They could be taken by others. Try to look up and find out is it available or not. Once booked, you can not change it unless you create another campaign. 
:::

<p align="center">
  <img src="/img/c3-subnameavailable.png" alt="SuiNS subnames for CrowdWalrus campaigns."  />
  <img src="/img/c2-subnametaken.png" alt="SuiNS subname is taken."  />
</p>


⚠️ Subname rules:
- lowercase letters + numbers
- interior hyphens allowed
- no leading/trailing hyphens

## Step 3 — Upload your cover image

Upload a **JPG** or **PNG** cover image (up to **~5MB**). You can **adjust the crop** before saving.

Your cover image is stored on **Walrus** (decentralized storage). Because it’s decentralized, **CrowdWalrus can’t audit, edit, or remove** this file after it’s published—so you’re free to choose what you upload, but you should **treat it as public content**.

This image is your campaign’s visual “ID” across CrowdWalrus—it appears in listings, cards, and your campaign page. Choose a clear image that represents your campaign well.




## Step 4 — Choose a campaign type

If your campaign is a public good, non-profit, or charity—and you (and any related individuals/companies) do not receive direct financial benefit—you can self-declare as Non-Profit. We trust your self-declaration. Non-Profit campaigns qualify for CrowdWalrus’s zero-fee policy.

If your campaign is commercial—for example, you expect revenue, capital gains, pre-sales, paid sponsorships, or increased sales—choose Commercial. Commercial campaigns share a 5% platform fee with CrowdWalrus, calculated on the amount contributed by supporters.

The fee is clearly shown in the UI before supporters confirm their contribution, so everyone can see the net amount your campaign will receive.




## Step 5 — Categories & socials
Select at least one category and optionally add up to 5 social links. Those category and links will help the search and visibility of your campaign.
The more proof and digital presense you provide, the more tust the supporters may have. Those social link will be shown in your campaign page. You can also provide websites, blogs or any type of simple hyperlinks to showcase your work and grab user attention. 



## Step 6 — Goal and timeline
⚠️ **This is immutable.** Double-check the date and financial target before submit.


### 6.1 Set a financial goal (USD)

Set a **financial goal in USD**. This goal is mainly a **visual benchmark**:

- The **progress bar** and **% funded** are calculated based on this number.
- It appears on your **campaign card** and **campaign page**.
- Reaching the goal **does not stop contributions** — support can continue until your **funding window ends**.

**Best practice:** Set the goal to the **minimum amount you actually need**. Since campaigns are time-bound, pick a goal that’s **realistic for your chosen timeline**. If you need more later, you can always launch a **new related campaign** — so avoid inflating the goal “just in case”.

---

### 6.2 Pick a start and end date (your funding window)

Choose a **start** and **end** date for funding. This is your **funding window** — the period when people can contribute.

This is different from:

- **Publish date** (when your page becomes visible)
- **Campaign end state** (when you choose to close the campaign in the app)

How it works:

1. **Open Soon** — Your campaign can be visible before funding starts. Use this time to share the link, announce your campaign, and build momentum.
2. **Funding** — During the funding window, supporters can contribute and your progress bar updates toward your USD goal.
3. **Active** — When the end date is reached, contributions close automatically and the campaign moves to Active (where you continue posting updates and delivering milestones).

**Best practice:** Choose dates that match your **milestones**, **real-world constraints**, and **promotion plan**. Most successful campaigns have a strong first few days — plan for that.

:::info
**How the USD value is calculated**  
Supporters contribute using supported tokens. Your progress toward the USD goal is calculated using the token’s **price at the time of each contribution**. Because campaign owners can withdraw at any time, totals are measured **at the time of payment**, not later.
:::


## Step 7 — Recipient wallet

Enter the **Sui address** that should receive your campaign funds.

- This address should be **yours** (or your organization’s), and you must **control the private key**. As the campaign owner, you’re responsible for access to this wallet.
- Contributions are sent **directly** to this address. CrowdWalrus does **not** custody funds — we don’t block, hold, or delay payments.
- CrowdWalrus only **indexes and displays** the on-chain contributions on your campaign page, so supporters can verify the flow transparently.

:::tip
Your connected wallet address is shown as the default recipient address. If the recipient should be different, you can change it.
:::


⚠️ **This is immutable.** Double-check the address.

## Step 8 — Write your story and your campaign details

Most supporters will scan your page for **30 seconds** before deciding to contribute. Keep it clear, specific, and easy to verify.

### A simple structure that works

Use this as your outline (you can literally copy/paste and fill it in):

- **Who?** Who you are (person, team, org) — and why you’re trusted to execute.
- **What?** What you’re raising for — the concrete deliverable(s).
- **Why?** Why this matters — and why you’re doing it now.
- **Where?** Where the work happens (online / local / global) + who it helps.
- **How?** How funds will be used + how you’ll report progress (updates, milestones).
- **When?** When supporters should expect key milestones and updates.

:::tip
Write the first 2–3 lines as a standalone summary. If someone only reads that, they should still understand your campaign.
:::

### Make “impact” easy to understand

- Add **2–4 example contribution amounts** and what they unlock.
- Be specific: *tools, people, shipping, production, scholarships, audits, research hours, etc.*


### Set expectations (and build trust)

- List **milestones** you can realistically deliver.
- Explain your **stewardship plan**:
  - how you’ll thank supporters
  - how often you’ll post updates
  - what proof you’ll share (photos, receipts, links, shipped deliverables)

:::info
Want a ready-to-copy template + examples? See the [Campaign Writing Toolkit](./campaign-writing-toolkit).
:::




## Step 9 — Choose storage duration
Select how long to store your campaign content on Walrus (epochs). This will determine how much $WAL you have to pay for hosting your campaign. 

Don’t overthink it:
- Testnet: pick a short option
- Mainnet: pick 6 months–1 year, then renew later

:::warning
Walrus storage is affordable compared to most centralized storage options. Choose the longest storage period for maximum stability. If you select a short period and your campaign is still active, your campaign details may become unavailable when the storage expires.
:::



## Step 10 — Sign transactions
Campaign creation usually involves multiple steps:
1. Walrus registration transaction
2. Walrus certification transaction
3. Final “Create Campaign” transaction on Sui

You’ll see a wallet confirmation for each.

⚠️ **Don't forget to publish** Just paying for storage does not mean your campaign is published. When you pay for storage, you'll be able to click on  `PUBLISH` button. 


---

Next: [Choosing a goal & timeline](./choosing-goal-timeline.md)

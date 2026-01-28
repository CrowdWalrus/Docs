# Safety for Donors

Crowdfunding is powerful — and it can be abused. CrowdWalrus is **non-custodial**: when you donate, you’re signing an on-chain transaction and funds go **directly** to the campaign’s recipient wallet.

:::warning
**Donations are generally irreversible.**  
Before you sign, double-check the campaign and the recipient address. “Undo” and chargebacks are not how blockchains work.
:::

## Quick donor checklist (30 seconds)
- Confirm you’re on the **official campaign page** (bookmark it if you plan to donate more than once).
- Read the story and look for **concrete milestones + budget breakdown**.
- Check the **recipient wallet address** matches what the campaign claims.
- Review updates and evidence links (repo, website, socials).
- If anything feels off, **pause** and report it.

## Verify legitimacy
### 1) Look for trust signals (but still verify)
- **Verified badge** (if present) is a helpful signal — not a guarantee.
- Clear team/organization identity (who is behind it? how can they be verified?).
- Transparent plan: milestones, timeline, and how funds will be used.

### 2) Check proof links
- Website / docs / repository (do the links look legitimate?).
- Social accounts (age, activity, consistency with the campaign story).
- Updates and receipts (deliverables, commits, screenshots, on-chain references).

### 3) Compare recipient address with the claimed entity
A common scam pattern is a credible story paired with a wallet that **doesn’t belong** to the claimed person/org.

Look for:
- The address published on the org’s official website/docs.
- Matching addresses across multiple trusted channels (not just one social post).

## Common warning signs
- No real identity or proof
- Vague budget (e.g., “marketing” with no details)
- Pressure tactics (“donate now or else”)
- Recipient address mismatch (doesn’t match the claimed entity)
- Suspicious links, shortened URLs, “connect wallet to verify” prompts
- Recycled content (copy/paste story, generic images, no campaign-specific detail)
- “We will change the wallet later” (recipient address should be stable and verifiable)

:::tip
If you’re unsure, start small. You can always donate more later after you see credible updates and consistent proof.
:::

## Reporting suspicious campaigns
If you suspect a scam, impersonation, or abusive campaign, please report it early:

- **Recommended:** GitHub report form (public issue)  
  <a href="https://github.com/CrowdWalrus/crowdwalrus-dapp/issues/new?template=report-abuse---scam-campaigns.md" target="_blank" rel="noopener noreferrer">Open “Report Abuse / Scam Campaign” form</a>

- **If you have sensitive information:** email instead  
  <a href="mailto:crowdwalrus@generalmagic.io">crowdwalrus@generalmagic.io</a>

### How the GitHub report link works
1. Open the report link (you may need to sign in to GitHub).
2. It creates a **new issue** pre-filled with a reporting template.
3. Fill the fields (campaign link, category, evidence, on-chain tx digests if you have them).
4. Submit — maintainers can triage and follow up.

:::warning
GitHub issues are **public**. Never post seed phrases, private keys, passwords, or sensitive personal documents.
:::

See: [Reporting Abuse / Scams](../trust-safety/reporting-abuse.md)

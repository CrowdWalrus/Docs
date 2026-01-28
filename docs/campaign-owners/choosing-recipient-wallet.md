# Choosing a recipient wallet

Your **recipient wallet** is the Sui address that receives campaign funds.

It maps to **Step 7** in [Launch a Campaign](./launch-a-campaign.md).

---

## What happens when someone contributes?

CrowdWalrus is **non-custodial**:

- Supporters’ funds are sent **directly** to your recipient address on-chain
- CrowdWalrus does **not** hold, delay, or route funds through a platform wallet
- The app simply **indexes and displays** what happened on-chain so anyone can verify it

---

## Pick an address you control

Choose an address where **you (or your organization) controls the private key**.

Recommended setups:

- **Solo creator:** a dedicated wallet used only for this campaign
- **Team / org:** a **multi-sig** or treasury address (safer and more accountable)
- **DAO:** a treasury address that matches your governance process

Avoid:

- Exchange deposit addresses (you usually **don’t control the keys** and policies can change)
- Random “temporary” addresses you might lose access to later

:::tip
If the recipient should be different from your currently connected wallet, you can change it **before** publishing. After publishing, it becomes fixed.
:::

---

## Why the recipient address is immutable

CrowdWalrus intentionally makes the recipient address **unchangeable** to prevent bait-and-switch.

✅ Good: “This is our organization’s treasury address.”  
❌ Bad: “We’ll change the address later.”

:::warning
**Immutable setting**  
Double-check the address before you submit. If you publish with the wrong address, you can’t edit it — you’d need to create a new campaign.
:::

---

## What supporters will see (and verify)

On every contribution, supporters can verify:

- The **recipient address**
- The **platform fee address** (if your campaign policy includes a fee)
- The **split amounts** (net to you vs platform fee)
- The transaction on a Sui explorer (fully auditable)

---

Next: [Categories & socials](./categories-and-socials.md)

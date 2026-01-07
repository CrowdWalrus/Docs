# Security Model

## What CrowdWalrus can’t do
- It can’t move your funds without your signature.
- It can’t “refund” a blockchain transaction.
- It can’t edit your campaign without the owner capability.

## Wallet signing flow
All sensitive actions are user-signed:
- campaign creation
- campaign edits
- donations
- posting updates
- profile creation

## Walrus upload flow
Walrus uploads are structured as multiple signed steps:
- register
- upload
- certify

This design avoids exposing private keys to the browser.

## Your responsibilities
- verify URLs
- verify recipient addresses
- keep your seed phrase safe

---

Next: [Legal / Disclaimer](../legal/disclaimer.md)

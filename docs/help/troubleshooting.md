# Troubleshooting

This page covers the most common “why is this not working?” cases.

## Wallet connect issues
**Symptoms**: connect button does nothing, or the wallet never pops up.

- Make sure your wallet extension is unlocked.
- Disable other wallet extensions that might conflict.
- Try a hard refresh (Ctrl/Cmd + Shift + R).

## Network mismatch
**Symptoms**: transactions fail, or you see “wrong network” errors.

- Check your wallet network (Testnet vs Mainnet).
- Switch to match the CrowdWalrus network.

## Failed transaction
**Symptoms**: “dry run failed” / “transaction failed” / explorer shows abort.

- Confirm you have enough SUI for gas.
- If donating, confirm the token is supported.
- Try again (RPC nodes can be flaky during heavy load).

## “Insufficient WAL”
**Symptoms**: campaign creation/update fails during Walrus steps.

- You need WAL to store blobs.
- Get WAL (testnet) or top up (mainnet).

## Image upload issues
- Max image size is typically 5MB.
- Use JPG/PNG.
- If you’re on a slow connection, upload may time out — retry.

## “Subname taken”
- Subnames must be unique under the CrowdWalrus domain.
- Try a different name, add a suffix, or use hyphens.

---

If you hit a bug, please report it (with your tx digest).

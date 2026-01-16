# Griff Green - Test Party

https://app.tactiq.io/api/2/u/m/r/R7OilXZzZWzcosET2sk7?o=sl

### Report:

Compiled feedback, test results, bugs and user-experience notes from Griff during the “Moenick & Griff Sync” meeting.

High-level summary

- Overall positive about flow and improvements vs previous product; many UX polish issues and functional bugs found in staging/testnet.
- Key themes: wallet/login friction, confusing UI text/units, date/availability bugs for campaigns, missing/slow metadata (images, markdown), indexer/transaction/display limitations, and product/monetization suggestions.

Detailed feedback, tests, and bugs (grouped)

1. Wallets / tokens / payments
- Wallet options: Slush (Slush wallet) recommended; Phantom not fully tested/unsupported for login. (UX: clarify supported wallets.)
- Token receipt test: Griff received 15 SUI and some WALS but USDC test tokens did not appear in Moe’s wallet — investigate token faucet/indexer mapping and token symbols.
- Donation flow: platform fee shown (5%) and confusing expiry/donation wording after donation. Verify fee display and flow.
- UX friction: requesting/sharing an address was clunky (popups, mobile-app prompts). Improve request flow and make address visible/copyable in obvious place.
1. Campaign creation / date & duration bugs
- Start/open date: UI prevents selecting today even when it shows as selected; funding duration selector behaves inconsistently (selecting 2 or 3 days jumps or displays incorrectly). (Bug: date selector logic/state mismatch.)
- “Open soon” state: campaigns show “open soon” for one day — confirm intended behavior and ensure it matches date selectors.
- Funding duration / end date logic: default/future-dated selections permitted unexpectedly; ensure validations match product rules.
1. Storage / registration / expiry
- Storage registration spinner/error: “register for storage” spinner and Unexpected Error / Reload App reported when trying to register on testnet/mainnet switch. (Bug: registration transaction flow and error handling.)
- Storage expiry default is 3 days in staging; should be at least 6 months in production. (Config mismatch between staging and expected prod.)
- Notification for expiring storage: missing — recommend email/Telegram notifications integration.
1. Display / metadata / profile issues
- Short description: only three sentences show; no character limit displayed — add limit and guidance text. (UX improvement.)
- Images and profile pictures: images sometimes don’t show; no loading indicator. (Bug/UX: show placeholder/loading state and retry.)
- Markdown: markdown rendering not showing; flagged as known issue. (Bug: render engine or sanitization.)
- Control-Z (undo) not supported in rich text editor — requested by Griff. (UX feature request.)
- Address raw display: showing raw addresses on cards and donation UI is ugly/scary. Suggest showing domain name / profile name instead, with address only in detailed view. (UX improvement)
- ENS-like names: when user has a readable name (e.g., Griff.crowdwalrus) it should display across product — currently missing in some places. (Bug/UX integration)
1. Indexer / donation details / explorer
- Indexer missing: many pages simplified or missing filters/sorting because indexer wasn't ready — causes lack of donation detail tables. (Engineering dependency)
- Showing addresses and transaction details depends on indexer; confirm timeline for indexer completion and rollout plan.
1. UX clarity & wording
- Currency conversion: showing “one wall = $0.38” confuses users into thinking they pay $0.38. Griff recommends showing fiat dollar value instead of raw token conversion, or hide it entirely for users and sponsor token costs server-side.
- Nonprofit vs commercial selection: confusing and likely to be misused; suggest verification/listing flows and possibly charging small fee (1%) for nonprofits to cover costs or sponsorship model.
- Invite-only launch: Griff strongly recommends invite-only rollout to create scarcity and better onboarding.
1. Misc functional/edge errors observed
- Unexpected Error -> Reload App when switching networks or during registration (reproducible in session). Severity: high for onboarding.
- Selecting published campaign after error sometimes resolves flow (workaround mentioned). Note exact repro steps for devs.
- Some UI buttons require multiple navigation steps (e.g., Save changes separate from registration) — suggest combine into a single transaction / single-save UX.

Suggestions and product recommendations from Griff

- Hide raw addresses in cards and use readable domains/profiles; show addresses only on demand.
- Display fiat prices prominently instead of token conversion to avoid confusion.
- Sponsor users’ storage fees for initial launch (or charge a small default fee) so users don’t need to manage token buys for trivial costs.
- Add loading indicators and better error messages (e.g., for images, registration, markdown rendering). Make undo available in rich text editor.
- Consider invite-only launch and curated initial campaigns to grow interest.
- Implement notifications for storage expiry (email/Telegram) and clearer lifecycle states for campaigns.

Severity / priority (recommended)

- High (blockers/urgent): registration transaction errors (Unexpected Error/Reload), wallet/token receipt inconsistencies (USDC not showing), date selector bugs preventing today’s start, storage expiry config mismatch.
- Medium: markdown rendering, image loading/placeholder, showing raw addresses, missing name/resolution display, indexer integration roadmap (affects many features).
- Low / UX improvements: control-Z in editor, three-sentence description guidance, fiat-only display or clearer conversion UI, invite-only gating.

Actionable next steps (recommended)

1. Reproduce and log the “Unexpected Error / Reload App” flow with exact steps (network switch, registration click, popup state). Capture browser console and network traces. Priority: high.
2. Investigate token display issue: why USDC test tokens didn’t show — check token registry, token metadata, and wallet token detection. Priority: high.
3. Fix date selector state mismatch and funding duration validations. Priority: high.
4. Add loading placeholders for images and profile pics; ensure markdown renderer enabled in staging. Priority: medium.
5. Replace raw address presentation with domain/profile labels on cards and donation UI. Priority: medium.
6. Add UI hints: short description limit (3 sentences) and show Save + Register as single action in UX. Priority: medium.
7. Decide product policy: invite-only launch + storage sponsorship or small default fee for nonprofits; document approach. Priority: product decision.

If you want, I can convert these into: a prioritized bug tracker (CSV), a short email to the dev/product team summarizing high-priority issues, or a concise list of reproduction steps for the top 3 bugs.
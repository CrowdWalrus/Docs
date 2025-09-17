# MVP Scoping by User Stories - First Milestone (Sep 17th)

| **No** | **Epic** | **User Story** | **Detail** | **is MVP** | **❌ What’s NOT in MVP** |
| --- | --- | --- | --- | --- | --- |
| 1 | Front | Connect wallet | As a user I want to connect my Slush wallet to interact with app. <br>It’s possible for all types of users | ✅ | Other wallets than Slush |
| 2 | Profile | Create Profile | As a user I want to create profile with more information to be recognized. <br>Possible for all kinds of users <br>They can upload their information, including their pictures <br>Email/socials / Name/websites <br>Everyone can view profiles <br>NFTs and User level will be shown in the Profile page.  | ✅ | email verification |
| 3 | Profile | Edit Profile | As a user I want to edit my profile and change the information I provided. | ✅ |  |
| 4 | Project | Create Project | As a nonprofit, community or ecosystem member, I want to run a fundraising projects and would define different campaigns with some impact makers. <br>This feature includes: <br>Storage payment <br>Subname look up <br>Fields are: <br>Title <br>Description (HTML / Files) <br>Keywords <br>logo <br>footer logo <br>Socials/links/website <br>Location / Address <br>Funding Sui Address <br>non-Profit/commercial <br>SplitModel <br>Allowed tokens for payment | ❌ | Project-Campaign association is not in the MVP scope. <br>Tokens are limited - Preferable only Sui will be possible in MVP. |
| 5 | Project | Edit Projects | As a nonprofit, community, or ecosystem, I want to edit part of my project information. | ❌ |  |
| 6 | Project | Add Project Moderator | As a nonprofit, community, or ecosystem, I want to add/remove moderators to my project. | ❌  |  |
| 7 | Campaign | Create Campaign | As a fund raiser, I want to create a campaign to raise funds in it. <br>Storage payment <br>Subname look up <br>Title <br>Description (HTML / Files) <br>Keywords <br>logo <br>footer logo <br>start date <br>end date <br>Financial goal (token amount) <br>Socials/links/website <br>Location / Address <br>Funding Sui Address <br>non-Profit/commercial <br>SplitModel <br>allowedTokens for payment | ✅ | The split model would be fixed only based on the type of campaign. <br>Requesting to be part of a project is not in the MVP scope <br>Tokens are limited - Preferable only Sui will be possible in MVP <br>The cap model of (All or Nothing) would not be possible in MVP. All payments are split and distributed right away with the “Take it all” model, even when the financial goal has not been met at the end of the funding window. |
| 8 | Campaign | Edit Campaign | As a Campaign Owner, I want to edit my created campaign. | ✅ | |
| 9 | Campaign | SUI leaf subname registration | As CrowdWalrus, I want to register a subname to recognize campaigns with a memorable name and path. <br>user lookup for a subdomain on Crowdwalrs SUI <br>Subname works as a slug for |  ❌ | Change of subname is not in the MVP scope. |
| 10 | Front | Home Page / Landing | As a general user, I want to see the Landing Page to get more familiar with CrowdWalrus and know how I can raise funds or support campaigns <br>General information, with showcase some projects, numbers and vision. | ✅ |  |
| 11 | Front | List of all projects/search / Filter | Show and filter all projects and campaigns altogether | ✅ | Search will not be in the MVP due to the lack of time to write indexer <br>support of subname resolution on our app subdomain (we handle them by the path) |
| 12 | Campaign | Campaign Page Public View  | As a general user, I want to read more about the campaign to know <br>general information / total amount raised / all objects as walrus sites | ✅ |  |
| 13 | Campaign | Campaign Page Public View | As a general user, I wanted to see the list of donations to this campaign. <br>from <br>to <br>token name <br>token amount <br>USD value at the time of donation <br>link to explorer <br>link to profile | ✅ | limited tokens would be possible in MVP |
| 14 | Campaign | Campaign Page Public View | View List of updates with | ✅ |  |
| 15 | Payment | Donation / Payment | As a donor, investor, supporter, or backer of a campaign, I want to participate in raising funds and show my support and interest in the campaign. <br>user needs to make the Amount / Token / and see the price, with the fee calculation. | ✅ |  |
| 16 | NFT | Reward NFT | As crowdWalrus, I want to incentivize donors by contributing more to the platform. So I give them the award as NFTs, which acts as a leveling game for users. | ✅ |  |
| 17 | Profile | User Public Page | As a general user, I want to know more or contact the campaign owners or donors. So I need to see their profile, their donations and the campaigns they created. | ✅ |  |
| 18 | Profile | User Public Page - NFTs | As a general user, I want to see what level the user is. Watching the others’ NFT badges incentivizes me to contribute more. | ✅ |  |
| 19 | Campaign | Campaign Page Owner View - General| As a fundraiser, I want to have a section to see all of my campaigns, amounts raised, donations, updates, and have CTAs to initiate some actions like edit, post an update | ✅ |  |
| 20 | Campaign | Campaign Page Owner View - Update | As a fundraiser, I want to post an update and report to the supporters and community about the progress of my campaign. | ✅ |  |
| 21 | Campaign | Campaign Page Owner View - Deactivate | As a fundraiser, I want to be able to stop raising funds and be inactive while still wanting to have my website up and running. | ✅ |  |
| 22 | Campaign | Campaign Page Owner View - Delete | As a fundraiser, I want to be able to totally erase my projects and the contents from CrowdWalrus. | ✅ |  |
| 23 | Front | SysAdmin Reports | As a CrowdWalrus admin, I want to see the list of Projects/campaigns/users/transactions to have a better overview of the platform for business and operational activities | ✅ |  |
| 24 | Verifier | Give Verified badge | As an admin, I want to review the list of campaigns and attest to those that are reliable; in this case, they can be listed on the CrowdWalrus app. | ✅ |  |
| 25 | Verifier | remove Verified badge | As an admin, I want to remove the verified badge for the campaigns that violated the TOS, or were recognized as a fake or illegal. | ✅ |  |
| 26 | CrowdWalrus owner | add remove verifier | As an admin, I want to decentralize the verification process by nominating other verifiers to attest to the verification process besides me. So it makes the process easier and more efficient. | ❌ |  |

### 🚫 What’s out of MVP scope in general

1. We won’t support sub-name resolution on our app; we will handle subname detection by path. So we are going to have https://crowdwalrus.io/campaigns/campaign-subname
2. We won’t have a multiplier verifier for the MVP. The number of projects is limited, and the admin can review them in MVP.
3. All the financial cap models are “take it all” (TIA), so if a campaign could not meet its financial model at the end of the allowed period, the funds won’t get back to the payers.
4. We can’t write an indexer in this limited time, so the loading for some heavy-data views will be a bit slow due to the blockchain limitations.
5. Projects as hosts of campaigns may be too much for MVP.

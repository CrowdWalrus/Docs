# Decentralized Crowdfunding - CrowdWalrus

## 1. Project Name
CrowdWalrus

## 2. Purpose
As former builders of Giveth.io, we deeply understand the limitations of traditional crowdfunding platforms—high fees, censorship risks, and accessibility barriers that disproportionately affect small and underrepresented communities worldwide. We’ve witnessed firsthand the global demand for a more inclusive fundraising solution, which drives our vision for CrowdWalrus, a decentralized, censorship-resistant P2P crowdfunding platform built on Sui and Walrus Sites.

Leveraging our experience and Giveth’s battle-tested codebase, we aim to create a platform that empowers project creators by combining Sui’s high-throughput blockchain with Walrus Sites’ decentralized storage and hosting. Giveth was so dependent on the backend and was not fully decentralized.

After users connect their wallet, "CrowdWalrus" would allow users to either use a simple web editor to create HTML/CSS websites or upload their existing website files. Once ready, users can publish their site, and "CrowdWalrus" would use the Walrus Sites site-builder tool to store the content on Walrus and create a Sui object, making the site live. We need to do custom changes for adding the framing of a crowdfunding, like list of donations, total amount raised, and the donation button etc. These changes come from a standard design of CrowdWalrus projects.

After publishing, users get a default subdomain, based on the site's object ID. Optionally, "CrowdWalrus" can guide users to set a custom subdomain by acquiring a SuiNS domain (e.g., mywebsite.sui) and linking it, resulting in a URL. Users can update their sites by editing through the web editor or uploading new files, with "CrowdWalrus" handling republishing to reflect changes. These pages could be for projects, campaigns, or updates, all in structured design.

Additionally, CrowdWalrus will address a major onboarding pain point from Giveth by integrating Sui Wallet for a user-friendly experience, allowing non-web3 project owners to sign up and raise funds as effortlessly as signing in with a Google account.

Our focus is on delivering a platform that prioritizes accessibility, transparency, and ease of use, enabling creators globally to launch and manage campaigns without barriers.

## 3. Target Audience
- **Primary User Personas**: General Users, Donors, Fund Raisers, Project Managers, Public Good Owners.
- **Accessibility Goals**: The user flows are as easy as a web2 experience. For both donors and project managers.

## 4. Project Versions (Iterative Approach)

### Version 1: Minimum Viable Product (MVP)

#### Project Owner
- Can connect wallet to CrowdWalrus-Admin-UI and manage their projects.
- Can create a project and launch their decentralized website.
- Can manage to register a subdomain.
- Can create campaigns and add recipient address.
- Can provide updates for their campaign.

#### Donor
- Can view the decentralized projects website, campaigns, and updates.
- Can connect wallet and donate to the campaigns.
- Can see their donations recorded on the campaign website.

### Version 2: Quadratic Funding

#### Project Owner
- Can buy an NFT to be eligible to be in a QF Round.
- Can put a QF verified badge on their website.
- Can get benefitted from a shared funding pool at the end of the round.

#### Donors
- Can prove their humanity and contribute in QF Rounds.
- Can see the approximate amounts matched from the funding pool while deciding on the donation amount.
- Can get an NFT for their donation.

### Future Versions: Long-Term Vision
- **CrowdWalrus launches its tokenEconomy**:
    - Providing utility to token holders to curate the projects.
    - Creating a community of donors.
    - Incentivizing donations by token rewards.
    - DeFi and staking pools.
- **CrowdWalrus Accelerator (Equity-based CF for projects)**:
    - Enabling public goods to raise funds from the crowd.
    - Helping projects set up mutual defi pools with sponsors.
    - Launching the project's token and helping them list on a DEX.

## 5. Technology and Tools

### Frontend
- React and Next.js
    - It’s possible to generate static websites and deploy them on Walrus.
    - Team talents are experienced in it.
- Tailwind CSS
- Mystenlabs Sui and dapp-kit libraries
    - Ease of collaboration with Sui chain.

### Backend
- Ideally, we won’t have any backend, and everything will be read from the chain.
- As a plan B, Supabase with TypeScript as:
    - Ease of development.
    - Team experience in TypeScript.
    - Lower scalability and maintenance cost.

### Blockchain Tools
- Move on Sui

### Database
- Ideally, everything will be fetched from Sui.
- Plan B: Postgres.

### Other Integrations
- Github for source code management.
- Github Action for CI/CD.
- Issue tracking.
- Project management.

## 6. Timeline (MVP)

### Phase 1: MVP Development
- **Discovery & Planning (Weeks 1–2)**  
  Deliverables: Tech Research, Personas, user journeys, MVP scope.
  
  Success Criteria: MVP scope validated by stakeholders.
  
  **UI/UX Design (Weeks 3–4)**
- Deliverables: Wireframes, UX flows, MVP clickable prototype, design components, owner and public view of projects and campaigns.
  
  Success Criteria: Internal and stakeholder testing complete, visual system approved for dev handoff.

- **Implementation and Integration (Weeks 5–10)**  
  Deliverables: Design and develop smart contracts using Move, Sui Wallet Integration, Walrus Sites integration, domain selection flow, donation flows, NFT rewards logic, donations, and other functionalities.
  
  Success Criteria: All flows should be testable on staging.

- **QA & Testing (Week 11)**  
  Deliverables: Unit tests, UX QA, wallet edge case handling.
  
  Success Criteria: All tests pass, staging build cleared for mainnet.

- **Launch & Deployment (Week 12)**  
  Deliverables: Test on Prod, Announcement, early stage supporting and marketing for early adopters.

  Success Criteria: Campaigns launched, public URL shareable, min 10 active projects.

### Phase 2: Version 2 Development
- **Duration**: 6 weeks
- **Deliverables**: Quadratic Funding (as described in product versions)

### Phase 3: Future Iterations
- **Duration**: Ongoing
- **Focus Areas**: TokenEconomy - DeFi, Curation, Incentivizing, Acceleration.

## 7. Budget Request Overview
**Total Requested Budget**: 

- **Past Demonstration of Technical Expertise**
    - Amin Latifi: Senior Software Engineer, Developer, and Solution Architect.
    - Meriem Barhoomi: Software Engineer, Developer.
    - Griff Green: Advisor, Co-founder of Giveth, Commons Stack, General Magic, and q/acc.
    - Marko Prljic: Design Lead, Head of Design and Business Development at General Magic.
    - Moe Nick: Product Manager.

Additional Links:
- [General Magic](https://generalmagic.io/)
- [Giveth](https://giveth.io/)
- [q/acc](https://qacc.giveth.io/)

Some useful GitHub Links:
- [Impact Graph](https://github.com/Giveth/impact-graph)
- [Giveth Dapps V2](https://github.com/Giveth/giveth-dapps-v2)

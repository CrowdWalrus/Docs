# Software Architecture

# Introduction

**CrowdWalrus** is a decentralized crowdfunding platform (dApp) built on the **Sui blockchain**, leveraging **Walrus** decentralized storage for hosting and managing crowdfunding campaigns. The backend logic of CrowdWalrus will be powered by smart contracts developed in **Move**, running on the Sui network. Additionally, the platform's websites will be deployed on the **Walrus network**.

This document provides an overview of the high-level software architecture for **CrowdWalrus**, detailing the design components, technologies, and tools that will be utilized throughout the development process. It serves as a reference for stakeholders, product managers, and new developers to gain insight into the product’s overall software architecture and operational mechanisms.

## System Overview

CrowdWalrus will be a platform that enables project owners and supporters to collaborate on the Sui decentralized network. The goal is to implement the entire logic and deployment on decentralized platforms (Sui + Walrus), with participants engaging through their on-chain identities and assets.

Participants can generally be categorized into Admins, Project and Campaign Owners, and Contributors. Each of these roles will interact with the system using their Sui wallets.

## Architecture Goals and Principles

The design goal of **CrowdWalrus** is to leverage **Sui smart contract development principles** to deliver a decentralized, secure, and scalable service. Utilizing **Walrus** for storage further enhances the platform’s availability and decentralization.

The **Sui network**, serving as the backend for core logic, follows a resource-oriented design that enables decoupling and encapsulation of service components. CrowdWalrus will consist of multiple logical components, each implemented as an independent unit that collaborates through well-defined and secure workflows. This document adopts the same design mindset in defining components, roles, responsibilities, and inter-component relationships. Aligning with Sui’s architectural principles allows us to fully harness the network’s capabilities, ensuring a high-quality, secure, and efficient product.

## High-Level Architecture

### Logical View

The core logic of CrowdWalrus will be implemented using Sui smart contracts. Thanks to Sui’s resource-oriented design, developers can build a well-decoupled system with clear responsibilities and precise access control.

Based on the initial design, CrowdWalrus will support the following user roles:

| **Role** | **Description** |
| --- | --- |
| Owner | It will be the highest-priority role, typically granted to a multi-sig. This account will own the CrowdWalrus domain name, Sui packages (contract modules), and have authority to grant the verifier role on the CrowdWalrus main contract. It may also have the ability to change the owner of projects or campaigns, though this is not yet certain.

Additionally, the owner will have control over the SuiNS manager. SuiNS is a contract that will have access to the CrowdWalrus main SuiNS domain (which owns the domain’s NFT). This enables programmatic registration of SuiNS subdomains during project and campaign creation. The owner will be able to transfer the domain NFT ownership to this contract and reclaim ownership when necessary. We may have define other accesses over SuiNS manager based on needs. |
| Verifier/Admin | This role, which can be held by multiple accounts, will have the ability to grant or revoke verified badges for projects and campaigns. |
| Project Owner | The project creator will hold the project owner capability, ownerCap, by default, unless it is transferred to another account. The project owner will be able to create adminCap for accounts and grant them  the admin privileges. |
| Project Moderator | Holding moderatorCap, will be able to manage collected donations, publish project updates, make edits when needed, activate/deactivate the project, and accept link requests from campaigns.  |
| Campaign Owner | The campaign creator will be its owner and can transfer ownership to another account. Similar to a project owner, they can manage funds, post updates, and activate/deactivate the campaign. They also may propose link requests to projects. |
| Backer | Supports projects and campaigns with allowed tokens. |

![Untitled-2025-09-01-1308.svg](Untitled-2025-09-01-1308.svg)

### Storage

CrowdWalrus relies on Walrus storage to host off-chain data, including core web application files (HTML, JavaScript, etc.) and large object files such as project descriptions. For these object files, all content that needs to be accessible in the web app is stored on Walrus, while the corresponding object IDs are saved as fields within Sui objects. When the web app loads project or campaign data, it fetches the associated object IDs, retrieves the stored content, and renders it seamlessly in the interface.

### Smart Contracts

The initial design expects the logic for each entity to be implemented in separate, decoupled contracts. Each smart contract, as a logical unit, will handle most of the scenarios related to its entity, while maintaining relationships with other contracts to enable authorized collaboration between components.

### Price On-Chain

To enhance transparency and usability, users may want to see the USD equivalent of their on-chain donations. For this purpose, the system integrates the **Pyth price oracle**, which regularly publishes price feeds directly on the Sui blockchain. These on-chain price updates are accessible to our Move smart contracts, enabling us to fetch reliable token-to-USD rates and display the corresponding fiat value of each donation within the application. This integration ensures accurate, verifiable, and decentralized pricing without relying on off-chain services.

### Split Model

The split model is a key component of the CrowdWalrus revenue model and plays a crucial role in user acquisition and growth. Essentially, the split model defines the fees applied to the payment made by the end user and can take various forms:

- **No Charge:** No fee is deducted from the amount paid by the end user.
- **Range Percentage:** The involved entity (CrowdWalrus or Campaign) charges a percentage of the original payment amount as a fee.

Split models are created for each entity pair (CrowdWalrus↔Project, Project↔Campaign) and define the fee deduction policy for the respective pair. By default, newly created projects will be on the Range Percentage split model plan, unless CrowdWalrus admins decide to switch it. 

## Technology Stack

### Smart Contracts

Smart contracts will be developed in **Move**, the smart contract language of Sui. The repository will contain both the contracts and their tests. Upgradability and migration of entities to newer versions must be taken into account in the contract implementation.

### Front-End

See [Frontend Architecture Tools](https://www.notion.so/Frontend-Architecture-Tools-2613ab28d48c80cb912dc594702020e5?pvs=21) 

### Walrus

Walrus has provided an [SDK](https://sdk.mystenlabs.com/walrus), based on TypeScript, that will be used in the front-end app to read from and upload to the Walrus space. 

### Indexer

An indexer is not yet a mandatory part of the software design. We may be able to deliver a fast application without using one, as the initial plan is to read all data directly from the Sui network through API calls. Sui Foundation provides robust [gRPC and GraphQL endpoints](https://docs.sui.io/guides/developer/getting-started/data-serving) for data access. However, this approach could result in excessive repeated calls to the endpoint, making the system vulnerable to rate limits or slow rendering. In such cases, we will need to consider developing an indexer, with the best option being a [Sui custom indexer](https://docs.sui.io/guides/developer/advanced/custom-indexer) built on Rust and Postgres.

## Entities

In the CrowdWalrus platform, entities represent the core components within the system. Each entity is responsible for different aspects of the platform's operations, and their interactions are managed through decentralized logic on the Sui blockchain. Below are the main entities within the CrowdWalrus ecosystem and their responsibilities:

### CrowdWalrus

The CrowdWalrus object is the central entity responsible for initiating and managing most core transactions, such as project and campaign creation, as well as contributions. Only a single instance of this object will be deployed during the package initialization. Its primary role is to validate inputs and facilitate interactions with other related entities across various scenarios

### Project

Each instance represents a single project created within the CrowdWalrus app. Project-related methods will be implemented to require an instance of this entity.

### Campaign

Each instance represents a single campaign created within the CrowdWalrus app. Campaign-related methods will be implemented to require an instance of this entity.

### Payment

Each entity capable of receiving funds will have an associated payment instance. In practice, the CrowdWalrus main contract, each project, and each campaign will each have their own payment contract. This contract will collect the funds sent to the corresponding entity, and its handler methods will be called when an entity is eligible to receive money during the donation flow.

This entity will be open for extension to allow implementing various vault policies, e.g. cap limit, time window, collect or withdraw rules, etc.

### User Profile

Will be created per contributor and may or may not hold the NFT role.

### SuiNS Manager

Its role is to automate subname registration during project and campaign creation flows. Managed by the CrowdWalrus owner, will hold the SuiNS NFT, enabling the automatic registration of new subnames under the CrowdWalrus main domain.

### Project Update

Holds updates project owners publish about their activities

## Use Cases / Sequence Flow

> **NOTE:** The details of the flows mentioned in this section are subject to change during the implementation stage.
> 

### Project/Campaign Creation

This flow enables project/Campaign owners to create projects with their provided data, granting them ownership of both the project/campaign entity and a subdomain under CrowdWalrus’s primary SuiNS domain.

**Flow**

1. The user fills project/campaign creation form including the title, description, domain and images. The domain value is validated and checked to be available at this step. Then user presses the submit button.
2. The data/metadata of project/campaign is uploaded to the Walrus storage and the stored data object ID is obtained. This would involve a multi-step user flow that requires transactions to be signed by the user. We may use Walrus Quilt to store multiple files (description html/css files, images, …) in fewer steps.
3. The user makes a call to the CrowdWalrus main contract to create the new project/campaign. She/He will pass the info as parameters, including the uploaded walrus object ID. This transaction will:
    1. Validates inputs
    2. Creates a new project/campaign object (contract) on-chain and shares its ownership.
    3. Creates ownerCap and transfers its ownership to the user
    4. Register the suggested subdomain as a leaf subname under the CrowdWalrus main domain. The subname will point to the CrowdWalrus walrus app ID (project/campaign page will be rendered by route pattern matching).
    5. Creates a new Payment object (contract) and transfers ownership of it to the project/campaign. This contract will collect and manage contributions to the project/campaign. 

### Donate

Users who want to contribute to projects or campaigns on CrowdWalrus will follow this scenario. The contracts involved in this scenario include the CrowdWalrus main contract and the relevant contracts for the involved parties, such as Project or Campaign.

**Flow**

1. On the project or campaign page, the user selects the token and amount they wish to contribute. If the [Split Model](https://www.notion.so/Split-Model-26f3ab28d48c8041985cf53f489b5c41?pvs=21)  allows the user to choose the fees for the involved parties, the user will select the fee percentage for each involved party.
2. The user makes a call to the CrowdWalrus main contract to contribute to the selected project or campaign, including parameters that define the split model for the involved parties (e.g., CrowdWalrus 2%, Project 7%). The method signature could look like this:
    
    `crowdwalrus.donate(amount: u64, coin: Coin, project_id: Option<ID>, campaign_id: Option<ID>, crowdwalrus_fee: SplitModel, project_fee: Option<SplitModel>, campaign_fee: Option<SplitModel>)`
    
    Upon calling the transaction:
    
    1. The CrowdWalrus main contract validates the input, including the split models. It checks that the defined split model matches the model defined in the contract states, such as No Charge or Range Percentage. Additionally, the split model between the campaign and project pair is validated by querying the project’s contract.
    2. Each party's share is calculated based on the defined split model fees.
    3. Each share is passed to the respective party's Payment contract to handle the received funds.
    4. Informative events are emitted.
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🧭 Start Here',
      collapsed: false,
      items: [
        'start-here/what-is-crowdwalrus',
        'start-here/how-crowdwalrus-works',
        'start-here/key-concepts-glossary',

        'getting-started/install-a-sui-wallet',
        'getting-started/choose-network',
        'getting-started/get-sui-for-gas',
        'getting-started/get-wal-for-storage',

        'help/faq',
        'help/troubleshooting',
      ],
    },

    {
      type: 'category',
      label: '🚀 Campaign Owners',
      collapsed: true,
      items: [
        'campaign-owners/launch-a-campaign',
        'campaign-owners/choosing-goal-timeline',
        'campaign-owners/choosing-recipient-wallet',
        'campaign-owners/categories-and-socials',
        'campaign-owners/cover-image-and-story-editor',
        'campaign-owners/storage-epochs',
        'campaign-owners/campaign-writing-toolkit',
        'campaign-owners/managing-your-campaign',
        'campaign-owners/campaign-statuses',
        'campaign-owners/verification-and-listing',
        'campaign-owners/nonprofit-vs-commercial',
        'campaign-owners/campaign-deactivation',
        'campaign-owners/campaign-deletion',
        'campaign-owners/campaign-suins-subname',
      ],
    },

    {
      type: 'category',
      label: '🤝 Donors & Supporters',
      collapsed: true,
      items: [
        'donors/how-to-contribute',
        'donors/supported-tokens-and-pricing',
        'donors/whats-the-net-amount',
        'donors/nft-rewards',
        'donors/creating-a-profile',
        'donors/profile-suins-subname',
        'donors/safety-for-donors',
      ],
    },

    {
      type: 'category',
      label: '🛡️ Verification & Trust',
      collapsed: true,
      items: [
        'trust-safety/verification-overview',
        'trust-safety/verification-process',
        'trust-safety/apply-for-verification',
        'trust-safety/reporting-abuse',
        'trust-safety/content-and-listing-policy',
        'trust-safety/transparency-playbook',
      ],
    },

    {
      type: 'category',
      label: '🧱 Developers',
      collapsed: true,
      items: [
        'developers/architecture-overview',
        'developers/walrus-storage-quilt',
        'developers/smart-contract-overview',
        'developers/indexer-and-apis',
        'developers/contributing',
        'developers/security-model',
      ],
    },

    {
      type: 'category',
      label: '⚖️ Legal',
      collapsed: true,
      items: [
        'legal/terms-of-use',
        'legal/privacy-policy',
        'legal/disclaimer',
      ],
    },
  ],
};

export default sidebars;

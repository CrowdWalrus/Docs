import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "CrowdWalrus Docs",
  tagline: "Decentralised Crowd Funding, Documented",
  favicon: "img/crowdwalrus-favicon.ico",

  future: {
    v4: true,
  },

  // ✅ set these to your real domain/repo when ready
  url: "https://crowdwalrus.github.io",
  baseUrl: "/Docs",
  trailingSlash: false,
  organizationName: "CrowdWalrus",
  projectName: "crowdwalrus-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        // ✅ Make docs live at "/" so the sidebar shows on homepage
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
                  },

        // ✅ Remove blog completely
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // ✅ Force light mode only (removes dark toggle)
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      // ✅ no "My Site" text in navbar
      title: "",
      logo: {
        alt: "CrowdWalrus Logo",
        src: "img/crowdwalrus-logo.svg",
        href: "/", // homepage (which will be a doc)
      },

      // ✅ Right-aligned items
      items: [
        {
          type: "doc",
          docId: "start-here/what-is-crowdwalrus",
          label: "About CrowdWalrus",
          position: "right",
        },
        {
          type: "doc",
          docId: "campaign-owners/launch-a-campaign",
          label: "Start a campaign",
          position: "right",
        },
        {
          type: "doc",
          docId: "donors/how-to-contribute",
          label: "Support a campaign",
          position: "right",
        },
        {
          href: "https://github.com/CrowdWalrus/",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Start Here", to: "/start-here/what-is-crowdwalrus" },
            { label: "Campaign Owners", to: "/campaign-owners/launch-a-campaign" },
            { label: "Donors", to: "/donors/how-to-contribute" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Brand book", href: "https://github.com/CrowdWalrus/brand-assets" },
            { label: "GitHub", href: "https://github.com/CrowdWalrus" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CrowdWalrus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github, // light-only site anyway
    },
  } satisfies Preset.ThemeConfig,
};


export default config;

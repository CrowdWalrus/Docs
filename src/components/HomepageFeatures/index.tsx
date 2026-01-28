import React from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// ✅ If your docs live at "/docs" keep this.
// If your docs are served at "/", change it to "" (empty string).
const DOCS_BASE = '/docs';
const doc = (slug: string) => `${DOCS_BASE}/${slug}`.replace(/\/+/g, '/');

type ActionCard = {
  title: string;
  icon: string;
  to: string;
  description: string;
};

const actions: ActionCard[] = [
  {
    title: 'Understand CrowdWalrus',
    icon: '🧭',
    to: doc('start-here/what-is-crowdwalrus'),
    description: 'What it is, how it works, and the concepts you’ll see across the app.',
  },
  {
    title: 'Launch a campaign',
    icon: '🚀',
    to: doc('campaign-owners/launch-a-campaign'),
    description: 'Goal, recipient wallet, story, storage — step by step.',
  },
  {
    title: 'Support a campaign',
    icon: '💸',
    to: doc('donors/how-to-contribute'),
    description: 'How contributions work, supported tokens, and what gets shown publicly.',
  },
  {
    title: 'Verification & trust',
    icon: '🛡️',
    to: doc('trust-safety/apply-for-verification'),
    description: 'What the verified badge means, what we check, and what it does not guarantee.',
  },
  {
    title: 'Report abuse',
    icon: '🚨',
    to: doc('trust-safety/reporting-abuse'),
    description: 'How to report scams, what evidence helps, and where to escalate.',
  },
  {
    title: 'Developers',
    icon: '🧱',
    to: doc('developers/architecture-overview'),
    description: 'Architecture, contracts, storage, and integration notes.',
  },
];

const popular = [
  {label: 'Install a Sui wallet', to: doc('getting-started/install-a-sui-wallet')},
  {label: 'Choose network', to: doc('getting-started/choose-network')},
  {label: 'Get SUI for gas', to: doc('getting-started/get-sui-for-gas')},
  {label: 'Get WAL for storage', to: doc('getting-started/get-wal-for-storage')},
  {label: 'Supported tokens & pricing', to: doc('donors/supported-tokens-and-pricing')},
  {label: 'Safety for donors', to: doc('donors/safety-for-donors')},
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">

        {/* Minimal "Buddy + Quick start" strip */}
        <div className="row margin-bottom--lg">
          <div className="col col--7">
            <div className="card">
              <div className="card__body">
                <Heading as="h2">Start in the right place</Heading>
                <p className="margin-bottom--md">
                  Pick the path that matches what you’re trying to do.
                </p>

                <div className="row">
                  <div className="col col--6 margin-bottom--sm">
                    <Link className="button button--primary button--block" to={doc('start-here/what-is-crowdwalrus')}>
                      🧭 Start here
                    </Link>
                  </div>
                  <div className="col col--6 margin-bottom--sm">
                    <Link className="button button--secondary button--block" to={doc('campaign-owners/launch-a-campaign')}>
                      🚀 Launch a campaign
                    </Link>
                  </div>
                </div>

                <div className="alert alert--info margin-top--md" role="alert">
                  <strong>Non-custodial:</strong> supporters pay the recipient wallet directly — CrowdWalrus does not hold funds.
                </div>
              </div>
            </div>
          </div>

          <div className="col col--5">
            <div className="card">
              <div className="card__body text--center">
                <img
                  src={useBaseUrl('/img/home/buddy-reading.png')}
                  alt="CrowdWalrus Buddy reading CrowdWalrus Docs"
                  style={{maxWidth: 280, width: '100%', height: 'auto'}}
                />
                <p className="margin-top--md margin-bottom--sm">
                  <strong>CrowdWalrus Buddy</strong>
                </p>
                <p className="margin-bottom--none">
                  Calm guidance for launching, supporting, and verifying campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shortcuts grid */}
        <div className="margin-bottom--lg">
          <Heading as="h2">I want to…</Heading>
          <p className="margin-bottom--md">Shortcuts to the most-used docs.</p>

          <div className="row">
            {actions.map((a) => (
              <div key={a.title} className="col col--4 margin-bottom--md">
                <Link to={a.to} style={{textDecoration: 'none'}}>
                  <div className="card">
                    <div className="card__body">
                      <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                        <span style={{fontSize: 20}} aria-hidden="true">{a.icon}</span>
                        <strong>{a.title}</strong>
                      </div>
                      <p className="margin-top--sm margin-bottom--none" style={{opacity: 0.9}}>
                        {a.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Trust by design */}
        <div className="margin-bottom--lg">
          <Heading as="h2">Trust by design</Heading>

          <div className="row">
            <div className="col col--4 margin-bottom--md">
              <div className="card">
                <div className="card__body">
                  <strong>Non-custodial payments</strong>
                  <p className="margin-top--sm margin-bottom--none" style={{opacity: 0.9}}>
                    Supporters pay the recipient wallet directly. The platform doesn’t custody funds.
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4 margin-bottom--md">
              <div className="card">
                <div className="card__body">
                  <strong>Verifiable activity</strong>
                  <p className="margin-top--sm margin-bottom--none" style={{opacity: 0.9}}>
                    Donations and updates are on-chain and auditable in explorers.
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4 margin-bottom--md">
              <div className="card">
                <div className="card__body">
                  <strong>Persistent content</strong>
                  <p className="margin-top--sm margin-bottom--none" style={{opacity: 0.9}}>
                    Campaign stories and media can be stored on Walrus with prepaid epochs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular + Help */}
        <div className="row">
          <div className="col col--7 margin-bottom--md">
            <Heading as="h2">Popular pages</Heading>
            <div className="card">
              <div className="card__body">
                <ul className="clean-list">
                  {popular.map((p) => (
                    <li key={p.label} style={{marginBottom: 10}}>
                      <Link to={p.to}>{p.label} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col col--5 margin-bottom--md">
            <Heading as="h2">Need help?</Heading>
            <div className="card">
              <div className="card__body">
                <p style={{opacity: 0.9}}>
                  For support, verification questions, or reporting scams:
                </p>

                <div className="button-group button-group--block">
                  <a className="button button--secondary" href="https://discord.gg/SXE2Y5cE" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>
                  <a className="button button--secondary" href="https://t.me/crowdwalrus" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                  <a className="button button--secondary" href="mailto:crowdwalrus@generalmagic.io">
                    Email support
                  </a>
                </div>

                <div className="alert alert--warning margin-top--md" role="alert">
                  <strong>Reminder:</strong> Public reports can be indexed forever. Never share seed phrases, private keys, or sensitive documents.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: GitHub report abuse shortcut */}
        <div className="margin-top--lg">
          <div className="alert alert--secondary" role="alert">
            <strong>Report abuse (public):</strong>{' '}
            <a
              href="https://github.com/CrowdWalrus/crowdwalrus-dapp/issues/new?template=report-abuse---scam-campaigns.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the GitHub report template →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

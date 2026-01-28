import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "../pages/index.module.css"; // re-use your existing styles

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/start-here/what-is-crowdwalrus">
            Start reading docs →
          </Link>
        </div>
      </div>
    </header>
  );
}

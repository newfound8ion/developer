import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/overview">
            Get Started With Newcoin
          </Link>
        </div>
        <img src="/img/welcome.png" alt="Welcome to the cutting-edge, anon!" style={{marginTop: '44px'}} />
        <div className={styles.buttons} style={{marginTop: '44px'}}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/newfound8ion/newcoin-evm">
            Newcoin EVM GitHub Repo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Welcome to the cutting edge, anon!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
         
        <img 
          src="/img/hypernetwork.png" 
          alt="Newcoin Hypernetwork" 
          style={{ 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            marginTop: '0', 
          }} 
        />
<div className="container">
         <h2>Robust</h2> <p>Newcoin is designed to interface with diverse systems, handling varied input data types and formats. By strictly regulating output while accommodating a broad spectrum of inputs, networks achieve consistent and clear communication across nodes.</p>
          <h2>Adaptive</h2> <p> As Newcoin collects data signals, the Proof-of-Creativity algorithm recursively adjusts its centrality measurement and makes the next computation more accurate and relevant.</p>
          <h2>Synergistic</h2> <p>  Newcoin is designed to mutualize data and computation into a shared intelligence greater than the sum of their separate intelligence. A like on social media enhances the decentralization of a consensus mechanism which in turn fuels better data inputs to ML pipelines.</p>
       </div>
 <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/overview">
            Get Started With Newcoin
          </Link>
        </div>
      </main>
    </Layout>
  );
}

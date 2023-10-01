import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is Newcoin?',
    description: (
      <>
        Newcoin is a log of cryptographically signed credentials that are processed in parallel using a probabilistic 
        state machine to achieve a shared consensus state powered by the Proof-of-Creativity algorithm. 
        <ul>
          <li><b>Robust</b> Newcoin is designed to interface with diverse systems, handling varied input data types and formats. By strictly regulating output while accommodating a broad spectrum of inputs, networks achieve consistent and clear communication across nodes.</li>
          <li><b>Adaptive</b> As Newcoin collects data signals, the Proof-of-Creativity algorithm recursively adjusts its centrality measurement and makes the next computation more accurate and relevant.</li>
          <li><b>Synergistic</b>  Newcoin is designed to mutualize data and computation into a shared intelligence greater than the sum of their separate intelligence. A like on social media enhances the decentralization of a consensus mechanism which in turn fuels better data inputs to ML pipelines.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Why do I need it?',
    description: (
      <>
        Make your application natively Sybil-resistant and qualitative by leveraging the ocean of data points available 
        across the World Wide Web into a universal algorithmic endpoint that can be read by smart contracts, backend and clients.
      </>
    ),
  },
  {
    title: 'How does it work?',
    description: (
      <>
        Contribute to the algorithm by deploying ActivationFunction contracts that contribute to the Proof-of-Creativity algorithm
        and reward your users with trust points and query the WATT score of any blockchain wallet to instantly detect awesomeness.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

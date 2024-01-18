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
        Newcoin allows you to mint, distribute, compute and query Immutable Points across the World Wide Web. 
        Immutable Points are like token balances but they measure the merits of a data object within a context.
       
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
        You can read and write Immutable Points onchain and offchain to build eventually consistent algorithmic mechanism design
        and allow smart contracts to automate decisions such as ranking, permissions, ressource allocation and more.
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

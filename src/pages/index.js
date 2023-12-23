import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src="img\itc_logo.jpg" width="250" height="250"></img>
        <div className={styles.buttons}>
          <p>
          Benvenuti nella Italian Truck Company 2023!
          Siamo un gruppo a cui piace ridere, scherzare e giocare insieme in maniera tranquilla ad ETS2 e ATS!
          Se sei interessato ad entrare a far parte della nostra azienda puoi chiedere maggiori informazioni nel server Discord
          tramite link disponibile nella sezione community!
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Benvenuti in ${siteConfig.title}`}
      description="[ITC] Italian Truck Company 2023 <head />">
      <HomepageHeader />
    </Layout>
  );
}

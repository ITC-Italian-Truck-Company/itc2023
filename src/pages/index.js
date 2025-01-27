import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <head><meta name="google-site-verification" content="Kg9ShFJONmQ9gcsz43sOGRWnUkQWwMqd4aVhSLEA1DE" /></head>
        <img1>
          <img src="img\fenixgold.png"></img>
        </img1>

        <div>
          <font face="Verdana, Arial, Helvetica, sans-serif" color="black">
            <font size="7">Chi Siamo ?</font>
          </font>
          <p>
            La Fenice Italiana è un'azienda di autotrasporti virtuale ATS ed ETS2 come nessun'altra.
            Siamo un gruppo impegnato a cambiare il modo dell'autotrasporto virtuale.
            Assumiamo camionisti da tutta Italia che si impegnano a diventare membri preziosi della nostra azienda.
            La nostra missione è sempre stata quella di costruire un luogo in cui il gruppo possa incontrarsi per formare una comunità amichevole.
            I nostri autisti, amici vengono sempre al primo posto, facendo della responsabilità, del rispetto e della fiducia la base su cui abbiamo costruito la nostra fiorente comunità.
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
      description="[LFI] La Fenice Italiana è una compagnia di trasporti virtuali,
       formata da un gruppo di amici con la passione per Euro Truck Simulator 2 & American Truck Simulator.
      <head />">
      <HomepageHeader />
    </Layout>
  );
}

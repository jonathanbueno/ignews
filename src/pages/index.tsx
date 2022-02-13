import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>início | ig.news</Head>
      <main className={`container ${styles.contentContainer}`}>
        <section className={styles.hero}>
          <span className={styles.hero__salutation}>👏 Hey, welcome</span>
          <h1 className={styles.hero__title}>
            News about the{' '}
            <span className={styles['hero__title--highlight']}>React</span>{' '}
            world.
          </h1>
          <p className={styles.hero__description}>
            Get access to all the publications <br />
            <span className={styles['hero__description--highlight']}>
              for $9.90 month
            </span>
          </p>

          <SubscribeButton />
        </section>

        <img src='/images/avatar.svg' alt='Welcome' />
      </main>
    </>
  );
}

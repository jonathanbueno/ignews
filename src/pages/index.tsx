import { GetStaticProps } from 'next';
import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
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
              for {product.amount} month
            </span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src='/images/avatar.svg' alt='Welcome' />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KTaRADFg0J5T9ZOzN3vi7y9');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100), // work with cents
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '../components';

const Portfolio: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Florian Bühler</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default Portfolio;

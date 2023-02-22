import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: React.FC = () => {
  const seo = {
    title: 'Florian Bühler',
    description:
      'Florian Bühler is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    url: 'portfolio-eta-eight-97.vercel.app/'
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;

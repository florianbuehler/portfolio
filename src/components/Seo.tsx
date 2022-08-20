import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

type Props = {
  title?: string;
  description?: string;
  pathname?: string;
};

// https://www.gatsbyjs.com/docs/add-seo-component/
const SEO: React.FC<Props> = ({ title, description, pathname }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  const { title: defaultTitle, description: defaultDescription, siteUrl } = site.siteMetadata;

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ''}`
  };

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
    </>
  );
};

export default SEO;

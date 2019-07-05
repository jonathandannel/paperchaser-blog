import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ props }) => {
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;
  return React.createElement(
    Layout,
    {
      location,
      title: siteTitle,
    },
    React.createElement(SEO, {
      title: '404: Not Found',
    }),
    React.createElement('h1', null, 'Not Found'),
    React.createElement('p', null, "You just hit a route that doesn't exist... the sadness."),
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

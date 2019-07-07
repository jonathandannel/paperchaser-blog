import { createElement as h } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Contributors = () => {
  const data = useStaticQuery(graphql`
    query ContributorQuery {
      allContributorsJson {
        nodes {
          name
          email
          role
        }
      }
    }
  `);

  return h('div');
};

export default Contributors;

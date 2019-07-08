import { createElement as h } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import contributorStyles from './styles';

const ContributorPanel = () => {
  const { contributorsMain, contributorBox, contributorInfo } = contributorStyles();

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

  return h(
    'div',
    { className: contributorsMain },
    data.allContributorsJson.nodes.map(c => h(
        'div',
        { className: contributorBox },
        h('span', { className: contributorInfo }, c.name),
        h('span', { className: contributorInfo }, c.role),
        h('span', { className: contributorInfo }, c.email),
      )),
  );
};

export default ContributorPanel;

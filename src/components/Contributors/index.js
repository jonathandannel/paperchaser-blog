import { createElement as h } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Avatar } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

import contributorStyles from './styles';
import ContributorCard from './ContributorCard';

const ContributorPanel = () => {
  const { contributorsMain, contributorBox, contributorInfo } = contributorStyles();

  const data = useStaticQuery(graphql`
    query ContributorQuery {
      allContributorsJson {
        nodes {
          name
          email
          role
          imageUrl
        }
      }
    }
  `);

  return h(
    'div',
    { className: contributorsMain },
    data.allContributorsJson.nodes.map(({ name, email, role, imageUrl }) => h(ContributorCard, { name, email, role, imageUrl })),
  );
};

export default ContributorPanel;

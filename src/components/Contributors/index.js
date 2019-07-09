import { createElement as h } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Avatar } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

import contributorStyles from './styles';
import ContributorCard from './ContributorCard';

const ContributorPanel = ({ contributors, contributorImages }) => {
  const { contributorsMain, contributorBox, contributorInfo } = contributorStyles();

  return h(
    'div',
    { className: contributorsMain },
    contributors.nodes.map(({ name, email, role }) => h(ContributorCard, {
        name,
        email,
        role,
        image: contributorImages.edges.find(({ node }) => node.name.includes(name[0].toLowerCase()))
          .node.childImageSharp,
      })),
  );
};

export default ContributorPanel;

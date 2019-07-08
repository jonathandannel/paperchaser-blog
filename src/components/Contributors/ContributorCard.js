import { createElement as h } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Avatar, Paper, Card } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

import contributorStyles from './styles';

const ContributorCard = ({ name, email, role }) => {
  const { contributorsMain, contributorBox, contributorInfo } = contributorStyles();

  return h(
    Card,
    { style: { display: 'flex', flexDirection: 'column' } },
    h('span', {}, name),
    h('span', {}, email),
    h('span', {}, role),
  );
};

export default ContributorCard;

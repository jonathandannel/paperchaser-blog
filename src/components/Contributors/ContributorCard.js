import { createElement as h } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Avatar, Paper, Card } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

import contributorStyles from './styles';

const ContributorCard = ({ name, email, role, imageUrl }) => {
  const { contributorCard, nameAndAvatar, avatar } = contributorStyles();

  return h(
    'div',
    { className: contributorCard },
    h(
      'div',
      { className: nameAndAvatar },
      h(Avatar, { className: avatar, color: 'green' }, h('img', { href: imageUrl })),
      h('span', {}, name),
    ),
    h('span', {}, email),
    h('span', {}, role),
  );
};

export default ContributorCard;

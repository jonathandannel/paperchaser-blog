import { createElement as h, useEffect, useState } from 'react';
import { Link, Img, useStaticQuery, graphql } from 'gatsby';

import { Avatar, Paper, Card } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

import contributorStyles from './styles';

const ContributorCard = ({ name, email, role }) => {
  const { contributorCard, nameAndAvatar, avatar } = contributorStyles();
  return h(
    'div',
    { className: contributorCard },
    h(
      'div',
      { className: nameAndAvatar },
      h(Avatar, { className: avatar, color: 'green' }, h('img', {})),
      h('span', {}, name),
    ),
    h('span', {}, email),
    h('span', {}, role),
  );
};

export default ContributorCard;

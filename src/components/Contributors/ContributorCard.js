import { createElement as h, useEffect, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Avatar, Paper, Card } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

import contributorStyles from './styles';

const ContributorCard = ({ name, email, role, image }) => {
  const { contributorCard, nameAndAvatar, avatarRoot, avatarImage } = contributorStyles();
  return h(
    'div',
    { className: contributorCard },
    h(
      'div',
      { className: nameAndAvatar },
      h(Avatar, {
        classes: { root: avatarRoot, img: avatarImage },
        color: 'green',
        srcSet: image.fluid.srcSet,
      }),
      h('span', { style: { paddingTop: '0.4rem' } }, name),
    ),
    // h('span', {}, email),
    // h('span', {}, role),
  );
};

export default ContributorCard;

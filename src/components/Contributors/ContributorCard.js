import { createElement as h, useEffect, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Avatar, Paper, Card } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

import contributorStyles from './styles';

const ContributorCard = ({ name, email, role, image }) => {
  const { contributorCard, nameAndAvatar, avatar } = contributorStyles();

  const b = image;
  debugger;

  return h(
    'div',
    { className: contributorCard },
    h(
      'div',
      { className: nameAndAvatar },
      h(Avatar, { className: avatar, color: 'green', srcSet: image.fluid.srcSet }),
      h('span', {}, name),
    ),
    h('span', {}, email),
    h('span', {}, role),
  );
};

export default ContributorCard;

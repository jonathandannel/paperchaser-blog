import { makeStyles } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import { rhythm } from '../utils/typography';

export const indexStyles = makeStyles(({}) => ({
  avatarRoot: {
    marginRight: rhythm(0.5),
  },
  avatarImage: {
    marginBottom: 0,
  },
}));

export const postStyles = makeStyles(({}) => ({
  avatarImage: {
    marginBottom: 0,
  },
}));

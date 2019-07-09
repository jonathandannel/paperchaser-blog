import { makeStyles } from '@material-ui/core';
import { rhythm } from '../utils/typography';

export const indexStyles = makeStyles(() => ({
  avatarRoot: {
    marginRight: rhythm(0.5),
  },
  avatarImage: {
    marginBottom: 0,
  },
  authorContainer: {
    display: 'flex',
    margin: '1rem 0rem 0.5rem 0rem',
  },
  flex: {
    display: 'flex',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  halfMarginTop: {
    marginTop: rhythm(0.5),
  },
  halfMarginRight: {
    marginRight: rhythm(0.5),
  },
  halfMarginBottom: {
    marginBottom: rhythm(0.5),
  },
}));

export const postStyles = makeStyles(() => ({
  avatarImage: {
    marginBottom: 0,
  },
}));

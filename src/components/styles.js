import { makeStyles } from '@material-ui/core';
import { rhythm } from '../utils/typography';

export const layoutStyles = makeStyles(({ breakpoints }) => ({
  mainContent: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rhythm(30),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    [breakpoints.down('md')]: {
      padding: rhythm(1),
      marginTop: 0,
      maxWidth: 'auto',
    },
    marginTop: rhythm(1),
  },
  headerInPost: {
    fontSize: '1.5rem',
    marginTop: 0,
  },
  headerInMain: {
    fontSize: '3rem',
    marginBottom: rhythm(1.5),
    marginTop: 0,
    display: 'flex',
  },
  noLinkColor: {
    color: 'inherit',
  },
  mainContainer: {
    height: '100%',
  },
  greyText: {
    color: '#615c5c',
  },
}));

export const indexStyles = makeStyles(() => ({
  avatarRoot: {
    marginRight: rhythm(0.5),
  },
  tagline: {
    display: 'inline-block',
    marginBottom: 0,
  },
  avatarImage: {
    marginBottom: 0,
  },
  greyText: {
    color: '#615c5c',
  },
  orangeLink: {
    color: '#e67c32',
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
  avatarRoot: {
    marginRight: rhythm(0.5),
  },
  avatarImage: {
    marginBottom: 0,
  },
  noMarginBottom: {
    marginBottom: 0,
  },
  marginTop: {
    marginTop: '0.9rem',
  },
  greyText: {
    color: '#615c5c',
  },
  listStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0,
  },
  divider: {
    marginTop: rhythm(1),
    marginBottom: rhythm(1),
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

import { makeStyles } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import { rhythm } from '../utils/typography';

export const layoutStyles = makeStyles(({ breakpoints }) => ({
  mainContent: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rhythm(30),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  },
  splitContainer: {
    display: 'flex',
  },
  headerInPost: {
    fontSize: '1rem',
    marginTop: 0,
  },
  headerInMain: {
    fontSize: '3rem',
    marginBottom: rhythm(1.5),
    marginTop: 0,
  },
  linkStyle: {
    boxShadow: 'none',
    textDecoration: 'none',
    color: 'inherit',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
  },
}));

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

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
  }
  html {
    height: 100vh;
  }
  #___gatsby {
    height: 100%;
  }
  #gatsby-focus-wrapper {
    height: 100%;
  }
`;

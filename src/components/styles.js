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
    fontFamily: 'Montserrat, sans-serif',
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

export const headerStyles = makeStyles(({ breakpoints }) => ({
  headerContainer: {
    maxWidth: '80vw',
    display: 'flex',
  },
  grow: {
    flexGrow: 2,
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  linkStyle: {
    boxShadow: 'none',
    marginLeft: '1rem',
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: 'orange',
    },
    '& > h3': {
      marginTop: '2rem',
    },
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

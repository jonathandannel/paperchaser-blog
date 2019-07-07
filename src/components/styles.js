import { makeStyles } from '@material-ui/core';
import { rhythm } from '../utils/typography';

const layoutStyles = makeStyles(({ breakpoints }) => ({
  main: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
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
}));

export default {
  layoutStyles,
};

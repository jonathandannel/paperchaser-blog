import { makeStyles } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

const contributorStyles = makeStyles(({ breakpoints }) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ff9354',
    maxWidth: rhythm(8),
    minWidth: rhythm(8),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    height: '100vh',
  },
  contributorBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: rhythm(1),
  },
  contributorInfo: {
    color: 'white',
  },
}));

export default contributorStyles;

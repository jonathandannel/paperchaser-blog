import { makeStyles } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

const contributorStyles = makeStyles(({ breakpoints }) => ({
  contributorsMain: {
    display: 'flex',
    flexDirection: 'column',
    background: '#ff7878',
    maxWidth: rhythm(10),
    minWidth: rhythm(10),
    padding: `${rhythm(2.25)} ${rhythm(3 / 4)}`,
  },
  contributorBox: {
    display: 'flex',
    flexDirection: 'column',
    padding: rhythm(1),
  },
  contributorInfo: {
    color: 'white',
  },
  contributorCard: {
    display: 'flex',
    fontSize: '0.8rem',
    flexDirection: 'column',
    marginBottom: rhythm(1),
  },
  nameAndAvatar: {
    display: 'flex',
  },
  avatarRoot: {
    marginRight: '0.5rem',
  },
  avatarImage: {
    marginBottom: 0,
  },
}));

export default contributorStyles;

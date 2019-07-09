import { makeStyles } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

const contributorStyles = makeStyles(({ breakpoints }) => ({
  contributorsMain: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    maxWidth: rhythm(10),
    minWidth: rhythm(10),
    paddingTop: '8rem',
    paddingLeft: '5rem',
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
    marginBottom: '1rem',
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

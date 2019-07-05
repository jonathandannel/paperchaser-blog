import { createElement as h } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../utils/typography';

// h(Image, {
//   fixed: data.avatar.childImageSharp.fixed,
//   style: {
//     marginRight: rhythm(1 / 2),
//     marginBottom: 0,
//     minWidth: 50,
//     borderRadius: '100%',
//   },
//   imgStyle: {
//     borderRadius: '50%',
//   },
// }),

const Bio = () => {
  const data = useStaticQuery(graphql`
    query ContributorQuery {
      allContributorsJson {
        nodes {
          name
          email
          role
        }
      }
    }
  `);
  const {
    allContributorsJson: { nodes },
  } = data;
  return h(
    'div',
    {
      style: {
        display: 'flex',
        marginBottom: rhythm(2.5),
      },
    },
    h('p', null, 'Paperchaser is ', nodes.map(c => h('p', null, c.name, c.email, c.role))),
  );
};

export default Bio;

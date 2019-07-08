import { createElement as h } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Avatar } from '@material-ui/core';
import { rhythm } from '../../utils/typography';

import contributorStyles from './styles';
import ContributorCard from './ContributorCard';

const ContributorPanel = () => {
  const { contributorsMain, contributorBox, contributorInfo } = contributorStyles();

  const data = useStaticQuery(graphql`
    query ContributorQuery {
      allContributorsJson {
        nodes {
          name
          email
          role
          image
        }
      }
    }
  `);

  return h(
    'div',
    { className: contributorsMain },
    data.allContributorsJson.nodes.map(({ name, email, role }) => {
      const imageUrl = `images/${name}.jpeg`;
      const image = () => useStaticQuery(
          graphql(
            `
              query ContributorImageQuery($imageUrl: String) {
                file(relativePath: { eq: $imageUrl }) {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 250) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `,
            { imageUrl },
          ),
        );
      return h(ContributorCard, {
        name,
        email,
        role,
        image,
      });
    }),
  );
};

export default ContributorPanel;

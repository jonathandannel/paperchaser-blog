import { createElement as h } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({
  location,
  data: { site, allMarkdownRemark, contributors, contributorImages },
}) => {
  const posts = allMarkdownRemark.edges;
  const { tagline, title } = site.siteMetadata;

  return h(
    Layout,
    {
      location,
      title,
      contributors,
      contributorImages,
    },
    h('h4', null, tagline),
    h(SEO, {
      title: 'All posts',
    }),
    posts.map(({ node }) => {
      const frontMatterTitle = node.frontmatter.title || node.fields.slug;
      return h(
        'div',
        {
          key: node.fields.slug,
        },
        h(
          'h3',
          {
            style: {
              marginBottom: rhythm(1 / 4),
            },
          },
          h(
            Link,
            {
              style: {
                boxShadow: 'none',
              },
              to: node.fields.slug,
            },
            frontMatterTitle,
          ),
        ),
        h('small', null, node.frontmatter.date),
        h('p', {
          dangerouslySetInnerHTML: {
            __html: node.frontmatter.description || node.excerpt,
          },
        }),
      );
    }),
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        tagline
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    contributors: allContributorsJson {
      nodes {
        name
        email
        role
        image
      }
    }
    contributorImages: allFile(filter: { absolutePath: { regex: "/Contributors/images/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

import { createElement as h } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ location, data: { site, allMarkdownRemark, allContributorsJson } }) => {
  const posts = allMarkdownRemark.edges;
  const { tagline, title } = site.siteMetadata;
  const contributors = allContributorsJson.nodes;

  return h(
    Layout,
    {
      location,
      title,
    },
    h(SEO, {
      title: 'All posts',
    }),
    h('h4', null, tagline),
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
                color: '#e18819',
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
    allContributorsJson {
      nodes {
        name
        email
        role
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
  }
`;

import { createElement as h } from 'react';
import { Link, graphql } from 'gatsby';
import { Avatar, Divider } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

import { indexStyles } from './styles';

const BlogIndex = ({
  location,
  data: { site, allMarkdownRemark, contributors, contributorImages },
}) => {
  const { avatarImage, avatarRoot } = indexStyles();
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
    h('h3', null, tagline),
    h(SEO, {
      title: 'All posts',
    }),
    posts.map(({ node }) => {
      const frontMatterTitle = node.frontmatter.title || node.fields.slug;
      const authorAvatar = contributorImages.edges.find(
        ({ node: { name } }) => name === node.frontmatter.author.split(' ')[0].toLowerCase(),
      ).node.childImageSharp.fluid;
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

        h(
          'div',
          { style: { display: 'flex', margin: '1rem 0rem 0.5rem 0rem' } },
          h(Avatar, {
            classes: { root: avatarRoot, img: avatarImage },
            srcSet: authorAvatar.srcSet,
          }),
          h(
            'div',
            { style: { display: 'flex', flexDirection: 'column' } },
            h('small', {}, node.frontmatter.author),
            h('small', { style: { marginRight: '0.5rem' } }, node.frontmatter.date),
          ),
        ),
        h('small', { style: { marginRight: '0.5rem' } }, `☕   ${node.timeToRead} minute read`),
        h('p', {
          dangerouslySetInnerHTML: {
            __html: node.frontmatter.description || node.excerpt,
          },
        }),
        h(Divider),
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
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
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

import { createElement as h } from 'react';
import { Link, graphql } from 'gatsby';
import { Avatar, Divider } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { indexStyles } from '../components/styles';

const BlogIndex = ({
  location,
  data: { site, allMarkdownRemark, contributors, contributorImages },
}) => {
  const {
    authorContainer,
    avatarImage,
    avatarRoot,
    flexColumn,
    tagline,
    flex,
    greyText,
    halfMarginRight,
    halfMarginTop,
    halfMarginBottom,
  } = indexStyles();
  const posts = allMarkdownRemark.edges;
  const { title } = site.siteMetadata;

  return h(
    Layout,
    {
      location,
      title,
      contributors,
      contributorImages,
    },
    h(
      'p',
      { className: `${greyText} ${tagline}` },
      `A code-centric blog focusing on the collaborative, iterative process of writing software for a changing world.
        Written and maintained by the developers of Toronto-based legal tech startup `,
      h('a', { href: 'https://clausehound.com/' }, 'Clausehound'),
      '.',
    ),
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
          'h2',
          {
            className: halfMarginBottom,
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
          { className: authorContainer },
          h(Avatar, {
            classes: { root: avatarRoot, img: avatarImage },
            srcSet: authorAvatar.srcSet,
          }),
          h(
            'div',
            { className: flexColumn },
            h('small', {}, node.frontmatter.author),
            h('small', { className: halfMarginRight }, node.frontmatter.date),
          ),
        ),
        h(
          'div',
          { className: `${halfMarginBottom} ${halfMarginTop} ${flex}` },
          h('small', { className: halfMarginRight }, '☕'),
          h('small', {}, `${node.timeToRead} minute read`),
        ),
        h('p', {
          className: halfMarginTop,
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

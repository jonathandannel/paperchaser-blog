import { createElement as h } from 'react';
import { Link, graphql } from 'gatsby';
import { Avatar, Divider } from '@material-ui/core';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import { postStyles } from '../components/styles';

const BlogPostTemplate = ({ location, pageContext, data }) => {
  const {
    authorContainer,
    avatarImage,
    avatarRoot,
    flexColumn,
    divider,
    listStyle,
    halfMarginTop,
    marginTop,
    noMarginBottom,
    greyText,
    halfMarginRight,
  } = postStyles();
  const post = data.markdownRemark;
  const { contributorImages } = data;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const authorAvatar = contributorImages.edges.find(
    ({ node: { name } }) => name === post.frontmatter.author.split(' ')[0].toLowerCase(),
  ).node.childImageSharp.fluid;

  return h(
    Layout,
    {
      location,
      title: siteTitle,
    },
    h(SEO, {
      title: post.frontmatter.title,
      description: post.frontmatter.description || post.excerpt,
    }),
    h(
      'h1',
      {
        className: `${halfMarginTop} ${noMarginBottom}`,
      },
      post.frontmatter.title,
    ),
    h('p', { className: ` ${marginTop} ${greyText}` }, post.frontmatter.description),
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
        h('small', {}, post.frontmatter.author),
        h('small', { className: halfMarginRight }, post.frontmatter.date),
      ),
    ),
    h(Divider, { className: divider }),
    h('div', {
      dangerouslySetInnerHTML: {
        __html: post.html,
      },
    }),
    h('hr', {
      style: {
        marginBottom: rhythm(1),
      },
    }),
    h(
      'ul',
      {
        className: listStyle,
      },
      h(
        'li',
        null,
        previous
          && h(
            Link,
            {
              to: previous.fields.slug,
              rel: 'prev',
            },
            '\u2190 ',
            previous.frontmatter.title,
          ),
      ),
      h(
        'li',
        null,
        next
          && h(
            Link,
            {
              to: next.fields.slug,
              rel: 'next',
            },
            next.frontmatter.title,
            ' \u2192',
          ),
      ),
    ),
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
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

import { createElement as h } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { postStyles } from '../components/styles';

const BlogPostTemplate = ({ location, pageContext, data }) => {
  const {
    authorContainer,
    avatarImage,
    avatarRoot,
    flexColumn,
    flex,
    halfMarginRight,
    halfMarginTop,
    halfMarginBottom,
  } = postStyles();
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
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
        style: {
          marginTop: rhythm(1),
          marginBottom: 0,
          color: '#fb251b',
        },
      },
      post.frontmatter.title,
    ),
    h(
      'p',
      {
        style: { ...scale(-1 / 5), display: 'block', marginBottom: rhythm(1) },
      },
      post.frontmatter.date,
    ),
    h(
      'p',
      {
        style: { ...scale(-1 / 5), display: 'block', marginBottom: rhythm(1) },
      },
      post.frontmatter.author,
    ),
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
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        },
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
  }
`;

import { createElement as h } from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  let header;

  console.log(location);

  if (location) {
    header = h(
      'h1',
      {
        style: { ...scale(1.5), marginBottom: rhythm(1.5), marginTop: 0 },
      },
      h(
        Link,
        {
          style: {
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          },
          to: '/',
        },
        title,
      ),
    );
  } else {
    header = h(
      'h3',
      {
        style: {
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
        },
      },
      h(
        Link,
        {
          style: {
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          },
          to: '/',
        },
        title,
      ),
    );
  }

  return h(
    'div',
    {
      style: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      },
    },
    h('header', null, header),
    h('main', null, children),
    h(
      'footer',
      null,
      '\xA9 ',
      new Date().getFullYear(),
      ' ',
      h(
        'a',
        {
          href: 'https://clausehound.com/documents',
        },
        'Clausehound',
      ),
    ),
  );
};

export default Layout;

import { createElement as h } from 'react';
import { Link } from 'gatsby';

import { scale } from '../utils/typography';

import ContributorPanel from './Contributors';
import layoutStyles from './styles';

const Layout = ({ location: { pathname }, title, children }) => {
  const {
    headerInMain,
    headerInPost,
    flex,
    linkStyle,
    main,
    body,
    splitContainer,
    contributorPanel,
  } = layoutStyles();

  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (pathname === rootPath) {
    header = h(
      'h1',
      {
        className: headerInMain,
        style: { ...scale(1.5) },
      },
      h(
        Link,
        {
          to: '/',
          className: linkStyle,
        },
        title,
      ),
    );
  } else {
    header = h(
      'h3',
      {
        className: headerInPost,
      },
      h(
        Link,
        {
          className: linkStyle,
          to: '/',
        },
        title,
      ),
    );
  }

  return h(
    'div',
    { className: body },
    h(ContributorPanel),
    h(
      'div',
      {
        className: main,
      },
      h('header', null, header),
      h('main', null, children),
    ),
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

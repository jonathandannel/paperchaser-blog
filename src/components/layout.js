import { Fragment, createElement as h } from 'react';
import { Link } from 'gatsby';

import { scale } from '../utils/typography';
import { GlobalStyle, layoutStyles } from './styles';

const Layout = ({ location: { pathname }, title, children }) => {
  const { headerInMain, headerInPost, linkStyle, mainContent, mainContainer } = layoutStyles();

  const rootPath = `${__PATH_PREFIX__}/`;
  let titleText;

  if (pathname === rootPath) {
    titleText = h(
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
    titleText = h(
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
    Fragment,
    null,
    h(
      'div',
      { className: mainContainer },
      h(GlobalStyle),
      h(
        'div',
        {
          className: mainContent,
        },
        h('span', null, titleText),
        h('main', null, children),
      ),
    ),
  );
};

export default Layout;

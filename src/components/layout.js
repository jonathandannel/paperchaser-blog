import { Fragment, createElement as h } from 'react';
import { Link } from 'gatsby';

import { scale } from '../utils/typography';
import { GlobalStyle, layoutStyles } from './styles';

const Layout = ({ location: { pathname }, title, children }) => {
  const { headerInMain, headerInPost, linkStyle, mainContent, mainContainer } = layoutStyles();

  // Useless.
  const rootPath = `${__PATH_PREFIX__}/`;

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
        h(
          'h1',
          {
            className: pathname === rootPath ? headerInMain : headerInPost,
          },
          h(
            Link,
            {
              to: '/',
              className: linkStyle,
            },
            title,
          ),
        ),
        h('main', null, children),
      ),
    ),
  );
};

export default Layout;

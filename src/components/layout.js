import { Fragment, createElement as h } from 'react';
import { Link } from 'gatsby';
import { GlobalStyle, layoutStyles } from './styles';

const Layout = ({ location: { pathname }, title, children }) => {
  const { headerInMain, headerInPost, noLinkColor, mainContent, mainContainer } = layoutStyles();

  const rootPath = `${__PATH_PREFIX__}/`;

  return h(
    Fragment,
    null,
    h(
      'div',
      { className: mainContainer },
      // h(GlobalStyle),
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
              className: pathname === rootPath && noLinkColor,
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

import { createElement as h } from 'react';
import { Link } from 'gatsby';

import { scale } from '../utils/typography';
import { headerStyles } from './styles';

const Header = () => {
  const { headerContainer, grow, linkStyle, linkContainer } = headerStyles();

  return h(
    'div',
    { className: headerContainer },
    h('div', { className: grow }),
    h(
      'div',
      { className: linkContainer },
      h(
        Link,
        {
          to: '/',
          className: linkStyle,
        },
        h('h4', {}, 'writers'),
      ),
      h(
        Link,
        {
          to: '/',
          className: linkStyle,
        },
        h('h4', {}, 'work'),
      ),
      h(
        Link,
        {
          to: '/',
          className: linkStyle,
        },
        h('h4', {}, 'contact'),
      ),
    ),
  );
};

export default Header;

import { createElement as h } from 'react';
import { Link } from 'gatsby';

import { scale } from '../utils/typography';
import { headerStyles } from './styles';

const Header = () => {
  const { headerContainer, grow, linkStyle } = headerStyles();

  return h(
    'div',
    { className: headerContainer },
    h('div', { className: grow }),
    h(
      Link,
      {
        to: '/',
        className: linkStyle,
      },
      'about',
    ),
  );
};

export default Header;

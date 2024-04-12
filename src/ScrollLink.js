import React from 'react';
import { Link } from 'react-scroll';

const ScrollLink = ({ to, children }) => (
  <Link to={to} smooth={true} duration={500}>
    {children}
  </Link>
);

export default ScrollLink;

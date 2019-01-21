import React from "react";

const NavLinkItem = ({ href, children }) => (
  <li className="navigation__item">
    <a className="navigation__link" href={href}>
      {children}
    </a>
  </li>
);

export default NavLinkItem;

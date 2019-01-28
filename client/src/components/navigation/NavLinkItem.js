import React from "react";
import { Link } from "react-router-dom";

const NavLinkItem = ({ href, children }) => (
  <li className="navigation__item">
    <Link className="navigation__link" to={href}>
      {children}
    </Link>
  </li>
);

export default NavLinkItem;

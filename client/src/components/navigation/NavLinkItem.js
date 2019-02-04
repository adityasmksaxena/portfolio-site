import React from "react";
import { Link } from "react-router-dom";

const NavLinkItem = ({ href, handleLinkClick, children }) => (
  <li className="navigation__item">
    <Link to={href} className="navigation__link" onClick={handleLinkClick}>
      {children}
    </Link>
  </li>
);

export default NavLinkItem;

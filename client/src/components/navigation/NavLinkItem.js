import React from "react";

const NavLinkItem = ({ href, id, children }) => (
  <li className="navigation__item">
    <a className="navigation__link" href={href}>
      <span>{String(id).padStart(2, "0")}</span>
      {children}
    </a>
  </li>
);

export default NavLinkItem;

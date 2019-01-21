import React from "react";
import NavLinkItem from "./navigation/NavLinkItem";

const Navigation = () => (
  <div className="navigation">
    <input id="toggle-nav" type="checkbox" className="navigation__checkbox" />
    <label htmlFor="toggle-nav" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>
    <div className="navigation__background">&nbsp;</div>
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <NavLinkItem href="/" id={1}>
          home
        </NavLinkItem>
        <NavLinkItem href="/" id={2}>
          about
        </NavLinkItem>
        <NavLinkItem href="/" id={3}>
          work
        </NavLinkItem>
        <NavLinkItem href="/" id={4}>
          contact
        </NavLinkItem>
        <NavLinkItem href="/" id={5}>
          resume
        </NavLinkItem>
      </ul>
    </nav>
  </div>
);

export default Navigation;

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
        <NavLinkItem href="/">home</NavLinkItem>
        <NavLinkItem href="/about">about</NavLinkItem>
        <NavLinkItem href="/work">work</NavLinkItem>
        <NavLinkItem href="/contact">contact</NavLinkItem>
        <NavLinkItem href="/resume">resume</NavLinkItem>
      </ul>
    </nav>
  </div>
);

export default Navigation;

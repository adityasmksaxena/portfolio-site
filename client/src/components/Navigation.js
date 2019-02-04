import React, { Component } from "react";
import NavLinkItem from "./navigation/NavLinkItem";
import { NAV_MENUS } from "../utils/constants";

class Navigation extends Component {
  state = {
    isOpen: false
  };

  handleLinkClick = () => {
    this.setState(() => ({ isOpen: false }));
  };
  handleNavigationClick = () => {
    this.setState(previousState => ({ isOpen: !previousState.isOpen }));
  };
  render() {
    const { isOpen } = this.state;
    return (
      <div className="navigation">
        <input
          id="toggle-nav"
          type="checkbox"
          className="navigation__checkbox"
          checked={isOpen}
        />
        <label
          htmlFor="toggle-nav"
          className="navigation__button"
          onClick={this.handleNavigationClick}
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            {NAV_MENUS.map(item => (
              <NavLinkItem
                key={item.text}
                href={item.href}
                handleLinkClick={this.handleLinkClick}
              >
                {item.text}
              </NavLinkItem>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;

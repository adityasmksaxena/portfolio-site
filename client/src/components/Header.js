import React from "react";

const Header = () => (
  <header className="header">
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">aditya saxena</span>
        <span className="heading-primary--sub">web developer</span>
      </h1>
      <a href="./game" className="btn btn--white btn--animated">
        Play Game
      </a>
    </div>
  </header>
);

export default Header;

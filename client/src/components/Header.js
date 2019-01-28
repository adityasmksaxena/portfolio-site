import React from "react";
import { Link } from "react-router-dom";
import Typing, { Reset } from "react-typing-animation";

const delayMs = 3000;
const Header = () => (
  <header className="header">
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main animated pulse">
          aditya saxena
        </span>
        <ul style={{ listStyle: "none", height: 40 }}>
          <li>
            <Typing loop speed={150}>
              <Reset count={0} />
              <span className="header__checkmark">&#10004;</span>
              <span className="heading-primary--sub">student</span>
              <Reset count={1} delay={delayMs} />
              <span className="heading-primary--sub">software engineer</span>
              <Reset count={1} delay={delayMs} />
              <span className="heading-primary--sub">web developer</span>
              <Reset delay={delayMs} />
            </Typing>
          </li>
        </ul>
      </h1>
      <Link to="/" className="btn btn--white btn--animated">
        Play Game
      </Link>
    </div>
  </header>
);

export default Header;

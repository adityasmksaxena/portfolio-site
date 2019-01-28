import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typing, { Reset } from "react-typing-animation";

const delayMs = 3000;
class Header extends Component {
  handleHeadingPrimaryMainMouseEnter = event => {
    this.headingPrimaryMainNode.classList.add("animated");
    this.headingPrimaryMainNode.classList.add("rubberBand");
    this.headingPrimaryMainAnimation = setTimeout(() => {
      this.headingPrimaryMainNode.classList.remove("animated");
      this.headingPrimaryMainNode.classList.remove("rubberBand");
    }, 1000);
  };
  handleHeadingPrimaryMainMouseLeave = event => {
    clearInterval(this.headingPrimaryMainAnimation);
  };
  componentWillUpdate() {
    clearInterval(this.headingPrimaryMainAnimation);
  }
  render() {
    return (
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span
              className="heading-primary--main"
              onMouseEnter={this.handleHeadingPrimaryMainMouseEnter}
              ref={node => (this.headingPrimaryMainNode = node)}
            >
              <span>aditya</span>&nbsp;
              <span>saxena</span>
            </span>
            <ul style={{ listStyle: "none", height: 40 }}>
              <li>
                <Typing loop speed={150}>
                  <Reset count={0} />
                  <span className="header__checkmark">&#10004;</span>
                  <span className="heading-primary--sub">student</span>
                  <Reset count={1} delay={delayMs} />
                  <span className="heading-primary--sub">
                    software engineer
                  </span>
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
          {/* <div className="social">
            <span>
              <Link to="/">github</Link>
            </span>
            <span>
              <Link to="/">linkedin</Link>
            </span>
          </div> */}
        </div>
      </header>
    );
  }
}

export default Header;

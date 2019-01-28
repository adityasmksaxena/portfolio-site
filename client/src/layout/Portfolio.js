import React, { Fragment } from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

import { BrowserRouter } from "react-router-dom";

const Portfolio = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navigation />
        <Header />
      </Fragment>
    </BrowserRouter>
  );
};

export default Portfolio;

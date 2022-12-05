import React, { Fragment } from "react";
import Header from "../modules/Header";
import { Outlet } from "react-router-dom";
import Footer from "../modules/Footer";
import ScrollTop from "../components/scrollTop/ScrollTop";
const LayoutPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollTop></ScrollTop>
    </Fragment>
  );
};

export default LayoutPage;

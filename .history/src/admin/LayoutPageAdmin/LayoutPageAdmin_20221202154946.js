import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../Modules/FooterAdmin";
import HeaderAdmin from "../Modules/HeaderAdmin";

const LayoutPageAdmin = () => {
  return (
    <Fragment>
      <HeaderAdmin />
      <Outlet />
    </Fragment>
  );
};

export default LayoutPageAdmin;

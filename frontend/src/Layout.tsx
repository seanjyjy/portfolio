import React from "react";
import { Outlet } from "react-router-dom";

import NavMenu from "@components/NavMenu";
import Footer from "@components/Footer";

const Layout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

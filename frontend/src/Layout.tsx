import React from "react";
import { Outlet } from "react-router-dom";

import NavMenu from "@components/NavMenu";
// import Footer from "@components/Footer";
import LazyLoad from "@commons/LazyLoad";

const LazyFooter = React.lazy(() => import("@components/Footer"));

const Layout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
      <LazyLoad Children={LazyFooter} />
    </>
  );
};

export default Layout;

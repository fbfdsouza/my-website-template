import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../Header";

const Layout = () => {
    return (
      <>
        <PageHeader />
        <Outlet />
      </>
    )
  }

  export default Layout;
import { Header } from "..";
import { NextPage } from "next";
import React from "react";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

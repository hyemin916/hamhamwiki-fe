import React, { ReactNode } from "react";
import NavBar from "../../components/NavBar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

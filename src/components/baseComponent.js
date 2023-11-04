import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./common/header";
import Footer from "./common/footer";
const BaseComponent = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseComponent;

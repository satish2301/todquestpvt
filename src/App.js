import React from "react";
import Home from "./components/home";
import ScrollToTop from "./components/common/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import BaseComponent from "./components/baseComponent";
import { WebRoutes } from "./routes";
import Deal from "./components/deal/deal";
import Coupon from "./components/coupon/coupon";
import Store from "./components/store/store";
import Contact from "./components/contact/contact";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<BaseComponent />}>
          <Route index element={<Home />} />
          <Route path={WebRoutes.DEAL} element={<Deal />} />
          <Route path={WebRoutes.COUPON} element={<Coupon />} />
          <Route path={WebRoutes.STORE} element={<Store />} />
          <Route path={WebRoutes.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
}

export default App;

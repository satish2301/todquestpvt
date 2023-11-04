import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import NavbarMobile from "./navbarMobile";
const Header = () => {
  return (
    <>
      <div className="container-fluid header">
        <div className="container py-3">
          <div className="row gy-3 align-items-center d-flex ">
            <div className="col-md-3 ">
              <img src={require("../../static/img/logo.png")} alt="" />
            </div>
            <div className="col-md-6 ">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <AiOutlineSearch />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search For brand, category, coupon"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="col-md-3 text-end">
              <button className="btn login-btn">LOGIN / SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid menu-section">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/deal">Deal</NavLink>
            </li>
            <li>
              <NavLink to="/coupon">Coupon</NavLink>
            </li>
            <li>
              <NavLink to="/store">Stores</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <NavbarMobile />
    </>
  );
};

export default Header;

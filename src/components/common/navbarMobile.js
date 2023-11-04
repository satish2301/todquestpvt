import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);
  const menubarOpen = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="mobile-section">
        <div className="container-fluid mobile-nav">
          <div className="container">
            <div className="menu-bar">
              <div>
                <img src={require("../../static/img/logo.png")} alt="" />
              </div>
              <div className="hambur">
                <FiMenu
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={menubarOpen}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid mobile-menu"
          style={{ top: isActive ? "60px" : null }}
        >
          <div className="container">
            <ul>
              <li>Home</li>
              <li>Deal</li>
              <li>Coupons</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;

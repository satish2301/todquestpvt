import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid  footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-4">
              <div className="">
                <img src={require("../../static/img/logo (1).png")} alt="" />
              </div>
              <div className="text-white py-2">
                Lorem Ipsum is simply dummy of the printing and type setting.
              </div>
              <div className="">
                <button className="apple my-2">
                  <img src={require("../../static/img/image 64.png")} alt="" />
                  <div className="content">
                    <div className="text1">Download From</div>
                    <div className="text2">APP STORE</div>
                  </div>
                </button>
                <button className="apple">
                  <img
                    src={require("../../static/img/image 64 (1).png")}
                    alt=""
                  />
                  <div className="content">
                    <div className="text1">Download From</div>
                    <div className="text2">APP STORE</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-heading">COMPANY</div>
              <ul>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-heading">COMPANY</div>
              <ul>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-heading">COMPANY</div>
              <ul>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-heading">COMPANY</div>
              <ul>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

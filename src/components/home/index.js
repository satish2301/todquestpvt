import React, { useState } from "react";

import { AiTwotoneTrophy, AiFillFire } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
const Home = () => {
  const [selectedMode, setSelectedMode] = useState("Coupons");
  const [selectedCategory, setSelectedCategory] = useState("0");

  const handleMode = (value) => {
    setSelectedMode(value);
  };
  const handleCategory = (value) => {
    setSelectedCategory(value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="py-4 banner">
            <img
              src={require("../../static/img/image (2).png")}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* <!-- ======= Popular-Product Tab Section ======= --> */}

      <div className="container-fluid popular-product gy-3">
        <div className="container">
          <div className="row">
            <div className=" col-6 text-center mx-auto">
              <div className="d-md-flex gap-5 ">
                <div
                  className={`popular_tab ${
                    selectedMode === "Coupons" ? "active" : ""
                  }`}
                  onClick={() => handleMode("Coupons")}
                >
                  <span>
                    <AiTwotoneTrophy />
                  </span>
                  Popular Coupons
                </div>
                <div
                  className={` popular_tab ${
                    selectedMode === "Soon" ? "active" : ""
                  }`}
                  onClick={() => handleMode("Soon")}
                >
                  <span>
                    <MdTimer />
                  </span>
                  Ending Soon
                </div>
                <div
                  className={` popular_tab ${
                    selectedMode === "Latest" ? "active" : ""
                  }`}
                  onClick={() => handleMode("Latest")}
                >
                  <span>
                    <AiFillFire />
                  </span>
                  Latest Coupons
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======= Popular-Product Card Section ======= --> */}
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row gy-4">
            {Array.from({ length: 8 }).map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="popular-card">
                  <p className="head">Upto 60% off on Appliances</p>
                  <img src={require("../../static/img/image 12.png")} alt="" />
                  <p className="bottom">Upto 60% off on summer Appliances</p>
                  <button className="btn">GRAB NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- ======= Deal of the day Section ======= --> */}

      <div className="container-fluid py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="head-bottom-line">Deal Of The Day</h4>
            </div>
          </div>
          <div className="row gy-4 py-4">
            {Array.from({ length: 4 }).map((item, index) => (
              <div className="col-md-3" key={index}>
                <div className="deal-card">
                  <img src={require("../../static/img/image 12.png")} alt="" />
                  <p className="head">Amazon</p>
                  <p className="bottom">Flat 30% Off</p>
                  <button className="btn">GRAB NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- ======= Coupon by Categories  Section ======= --> */}
      <div className="container-fluid py-4 coupon-category-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="head-bottom-line">Coupon By Categories</h4>
            </div>
          </div>
          <div className="row py-4 gy-2">
            {Array.from({ length: 12 }).map((item, index) => (
              <div className="col-3 col-lg-1 col-md-2" key={index}>
                <div
                  className={`coupon-category ${
                    selectedCategory === `${index}` ? "active" : ""
                  }`}
                  onClick={() => handleCategory(index)}
                >
                  <img src={require("../../static/img/fashion.png")} alt="" />
                  <small>Fashion</small>
                </div>
              </div>
            ))}
          </div>
          <div className="row gy-4 py-4 coupon-main">
            {Array.from({ length: 4 }).map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="coupon-card">
                  <img src={require("../../static/img/image 12.png")} alt="" />
                  <p className="head">Amazon</p>
                  <p className="bottom">Flat 30% Off</p>
                  <button className="btn">GRAB NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- ======= bottom banner  Section ======= --> */}
      <div className="container-fluid py-4">
        <div className="container">
          <img
            src={require("../../static/img/image 10.png")}
            alt=""
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* <!-- ======= Popular Membership Section ======= --> */}

      <div className="container-fluid py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="head-bottom-line">Popular Membership</h4>
            </div>
          </div>
          <div className="row py-4 gy-4 justify-content-between">
            <div className="col-md-6">
              <img
                src={require("../../static/img/image 15.png")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-md-6 Popular-member ">
              <img
                src={require("../../static/img/Rectangle 7.png")}
                alt=""
                className="w-100"
              />
              <div className="row  gy-2 popular-inner-card">
                {Array.from({ length: 4 }).map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="member-card">
                      <img
                        src={require("../../static/img/image 12.png")}
                        alt=""
                      />
                      <p className="head">Amazon</p>
                      <p className="bottom">Flat 30% Off</p>
                      <button className="btn">GRAB NOW</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={require("../../static/img/image 14.png")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-md-6">
              <img
                src={require("../../static/img/offer1.png")}
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ======= Newsletter Section ======= --> */}

      <div className="container-fluid newsletter-section py-4">
        <div className="container neswsletter-inn">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div>
                <img src={require("../../static/img/form-img.png")} alt="" />
              </div>
            </div>
            <div className="col-md-5 newsletter-right">
              <div>
                <h3>Subscribe to our Newsletter!</h3>
                <p>Be the first to get exclusive offers ands the latest news</p>
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <button className="subs">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ======= How it work  Section ======= --> */}
      <div className="container-fluid py-4 coupon-category-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="head-bottom-line">How It Works?</h4>
            </div>
          </div>
          <div className="row py-4 gy-3">
            <div className="col-md-4 work">
              <img
                src={require("../../static/img/Vector 1.png")}
                alt=""
                className="vector"
              />
              <div className="work-main-card">
                <div className="img-card">
                  <img src={require("../../static/img/Login.png")} alt="" />
                </div>

                <div className="content">
                  <div className="text">Signup</div>
                  <div className="para">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 work">
              <img
                src={require("../../static/img/Vector 2.png")}
                alt=""
                className="vector1"
              />
              <div className="work-main-card">
                <div className="img-card">
                  <img src={require("../../static/img/Login.png")} alt="" />
                </div>

                <div className="content">
                  <div className="text">Signup</div>
                  <div className="para">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 work">
              <div className="work-main-card">
                <div className="img-card">
                  <img src={require("../../static/img/Login.png")} alt="" />
                </div>

                <div className="content">
                  <div className="text">Signup</div>
                  <div className="para">
                    If you are going to use a passage of Lorem Ipsum, you need
                    to be sure there
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ======= add apple and play  Section ======= --> */}
      <div className="container-fluid  py-4">
        <div className="container main-apple-play">
          <div className="row align-items-center">
            <div className="col-md-5 offset-1">
              <div className="label1">Want to be a part of our team</div>
              <div className="label2">
                Be a part of best site of discount coupons
              </div>
              <div className="d-flex gap-4">
                <button className="apple">
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
            <div className="col-md-6  main-apple-play-right">
              <div className="img-wrapper">
                <div className="phone1">
                  <img src={require("../../static/img/Phone.png")} alt="" />
                </div>
                <div className="phone2">
                  <img src={require("../../static/img/Phone.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ======= summer sale  Section ======= --> */}
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row summer-sale ">
            <div className="col-md-4 summer-sale-left px-0">
              <img
                src={require("../../static/img/image (3).png")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-md-8  summer-sale-right px-1">
              <div className="heading">
                <h2>Popular Categories</h2>
              </div>
              <table class="table table-bordered mt-2">
                <tbody>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                  <tr>
                    <td>Flight</td>
                    <td>Bus</td>
                    <td>Entertainment</td>
                    <td>Jewellery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

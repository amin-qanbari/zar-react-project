import React, { useState } from "react";
import "./Header.css";
import logo from "../../pic/logo.png";

const Header = () => {
  //when scroll header at top
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  //toggle menu
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#about">درباره زراویل</a>
              </li>
              <li>
                <a href="#products">محصولات</a>
              </li>
              <li>
                <a href="#recipes">دستور پخت با زراویل</a>
              </li>
              <li>
                <a href="#news">اخبار و مقالات</a>
              </li>
              <li>
                <a href="#contact">تماس با ما</a>
              </li>
              {/* <li>
              <button className="home-btn">خرید</button>
            </li> */}
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times close home-btn"></i>
              ) : (
                <i className="fa fa-bars open"></i>
              )}
            </button>
          </div>
          <div className="logo">
            <a href="#home">
              {" "}
              <img src={logo} alt="logo" />{" "}
            </a>
          </div>
        </div>
      </header>

      <section className="demo"></section>
    </>
  );
};

export default Header;

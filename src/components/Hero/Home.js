import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import oil from "../../pic/M3.png";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h1>
              زر اویل پیشگام <span>سلامتی</span>
            </h1>
            <h2>به
              <span>
                <Typewriter
                  // onInit={(typewriter) => {
                  //   typewriter
                  //     .typeString("heloo youtube")
                  //     .pauseFor(2000)
                  //     .deleteAll()
                  //     .typeString("amin qanbari")
                  //     .deleteAll()
                  //     .start();
                  // }}
                  options={{
                    strings: ["جوانی ذرت","زبردستی زر"],
                    autoStart: true,
                    loop: true,
                    delay:75
                  }}
                />
              </span>
            </h2>

            <p>
              گروه صنعتی و پژوهشی زر با تکیه بر توان و تخصص نیروهای انسانی جوان،
              در راستای اجرای برنامه‌های توسعه ای، برای دستیابی ایران به جایگاهی
              شایسته تر در صنعت و تجارت غذای جهان، در سال ۱۳۹۴ اقدام به تاسیس
              اولین پالایشگاه دانش بنیان غلات در کشور با نام پالایشگاه غلات زر
              نموده است. این پالایشگاه با نحوه تولید متفاوت در جداسازی جوانه ذرت
              و تامین بهترین مواد اولیه و در نتیجه ارائه روغن جوانه ذرت به عنوان
              یک محصول فراسودمند و چند منظوره، توانسته است جایگاه والایی در بین
              مصرف کنندگان داشته باشد.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>صفحات اجتماعی :</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fa fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fa fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fa fa-linkedin"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img ">
              <img src={oil} alt="oil" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

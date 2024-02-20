/* eslint-disable no-undef */
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./App.css";
import headerImg from "./assets/header.png";
import logoImg from "./assets/logo.png";
import dotImg from "./assets/dot-bg.png";
import aboutImg from "./assets/about.png";
import class1Img from "./assets/class-1.jpg";
import class2Img from "./assets/class-2.jpg";
import class3Img from "./assets/class-3.jpg";
import class4Img from "./assets/class-4.jpg";
import trainer1Img from "./assets/trainer-1.jpg";
import trainer2Img from "./assets/trainer-2.jpg";
import trainer3Img from "./assets/trainer-3.jpg";

import about1 from "./assets/about-1.jpg";
import about2 from "./assets/about-2.jpg";
import about3 from "./assets/about-3.jpg";

import client1Img from "./assets/client-1.jpg";
import client2Img from "./assets/client-2.jpg";
import client3Img from "./assets/client-3.jpg";
import client4Img from "./assets/client-4.jpg";
import { useEffect, useState } from "react";
import { GiStrongMan } from "react-icons/gi";
import { MdFitnessCenter } from "react-icons/md";
import { GiStrong } from "react-icons/gi";
function App() {
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = document.getElementById("menu-btn-icon");

  const [isNavOpen, setIsNavOpen] = useState(false);
  console.log("hello", isNavOpen);

  // const onMenuBtnClick = () => {
  //   navLinks.classList.toggle("open");

  //   const isOpen = navLinks.classList.contains("open");
  //   menuBtnIcon.setAttribute(
  //     "class",
  //     isOpen ? "ri-close-line" : "ri-menu-line"
  //   );
  // };

  // const onNavLinksClick = (e) => {
  //   navLinks.classList.remove("open");
  //   menuBtnIcon.setAttribute("class", "ri-menu-line");
  // };
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    // header container
    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
    });

    ScrollReveal().reveal(
      ".header__content h4, .header__content .section__header",
      {
        ...scrollRevealOption,
        delay: 500,
      }
    );

    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1000,
    });

    ScrollReveal().reveal(".header__btn", {
      ...scrollRevealOption,
      delay: 1500,
    });

    // about container
    ScrollReveal().reveal(".about__image img", {
      ...scrollRevealOption,
      origin: "left",
    });

    ScrollReveal().reveal(".about__content .section__header", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".bottom__border", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".about__content .section__description", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".about__card", {
      ...scrollRevealOption,
      delay: 500,
      // interval: 500,
    });

    // price container
    ScrollReveal().reveal(".price__card", {
      ...scrollRevealOption,
      interval: 500,
    });
  }, []);

  // const swiper = new Swiper(".swiper", {
  //   loop: true,
  //   slidesPerView: "auto",
  //   spaceBetween: 20,
  // });

  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__header">
            <div className="nav__logo">
              <a href="#">
                <img src={logoImg} alt="logo" />
              </a>
            </div>
            <div
              // onClick={onMenuBtnClick}
              className="nav__menu__btn"
              id="menu-btn"
            >
              <span onClick={() => setIsNavOpen((prev) => !prev)}>
                <i
                  id="menu-btn-icon"
                  className={` ${isNavOpen ? "ri-close-line" : "ri-menu-line"}`}
                ></i>
              </span>
            </div>
          </div>
          <ul
            className={`nav__links ${isNavOpen ? "open" : ""}`}
            id="nav-links"
          >
            <li className="link">
              <a href="#home">باشگاه</a>
            </li>
            <li className="link">
              <a href="#features">ویژگی ما</a>
            </li>
            <li className="link">
              <a href="#about">درباره ما</a>
            </li>
            <li className="link">
              <a href="#class">کلاس ها</a>
            </li>
            <li className="link">
              <a href="#trainer">مربی ها</a>
            </li>
            <li className="link">
              <a href="#price">تعرفه</a>
            </li>
            <li className="link">
              <button className="btn">تماس با ما</button>
            </li>
          </ul>
        </nav>
        <div className="section__container header__container" id="home">
          <div className="header__image">
            <img src={headerImg} alt="header" />
          </div>

          <div className="header__content">
            <h4>کشف کن </h4>
            <h1 className="section__header">بهترین نسخه خودت رو !</h1>
            <div className="bottom__border " />
            <p>
              ورزش و تناسب اندام تنها در مورد تغییر ظاهر نیست، بلکه در مورد
              تغییر دیدگاه زندگیست. هر حرکت و هر قدم، تو رو به سمت قدرتی بیشتر و
              اراده‌ای استوارتر هدایت می‌کنه.
              <br /> هر روز با چالش‌های جسمانی روبرو می‌شی تا مرزهای خودت رو
              بشناسی و اون‌ها رو گسترش بدی !
            </p>
            <div className="header__btn">
              <button className="btn">استارت شو بزن</button>
            </div>
          </div>
        </div>
      </header>

      <section className="section__container about__container" id="features">
        <div className="about__image">
          <img className="about__bg" src={dotImg} alt="bg" />
          <img src={aboutImg} alt="about" />
        </div>
        {/* <div className="about__image__container">
          <div className="about__image__subcontainer">
            <div className="image__item">
              <img src={trainer1Img} alt="about" />
            </div>
          </div>
          <div className="about__image__subcontainer">
            <div className="image__item">
              <img src={trainer1Img} alt="about" />
            </div>
            <div className="image__item">
              <img src={trainer1Img} alt="about" />
            </div>
          </div>
        </div> */}
        <div className="about__content">
          <h2 className="section__header">
            ویژگی های
            <div style={{ display: "inline", marginRight: "10px" }}>
              <span className="red__color">B2</span>
              <span className="text__light">FITNESS</span>
            </div>
          </h2>
          <div className="bottom__border" />
          {/* <p className="section__description">
            Led by our team of expert and motivational instructors, "The Class
            You Will Get Here" is a high-energy, results-driven session that
            combines a perfect blend of cardio, strength training, and
            functional exercises.
          </p> */}
          <div className="about__grid">
            <div className="about__card">
              <span>
                <i className="ri-open-arm-line"></i>
              </span>
              <div>
                <h4>فضای اختصاصی تمرین</h4>
                <p>
                  B2FITNESS دارای فضاهای تمرینی اختصاصی است که به شما امکان
                  می‌دهد تمرینات خود را بدون حواس‌پرتی و با تمرکز کامل انجام
                  دهید.
                </p>
              </div>
            </div>
            <div className="about__card">
              <span>
                <i className="ri-shield-cross-line"></i>
              </span>
              <div>
                <h4>تجهیزات پیشرفته</h4>
                <p>
                  با استفاده از آخرین فناوری‌های روز دنیا، ما تجهیزات و
                  ماشین‌آلات تناسب اندام را فراهم کرده‌ایم که برای ارتقاء سطح
                  تمرینات ورزشی شما طراحی شده‌اند.
                </p>
              </div>
            </div>
            <div className="about__card">
              <span>
                <i className="ri-p2p-line"></i>
              </span>
              <div>
                <h4>برنامه‌ تغذیه‌ سفارشی</h4>
                <p>
                  علاوه بر تمرینات ورزشی، ما برنامه‌های تغذیه‌ای سفارشی را نیز
                  ارائه می‌دهیم که به شما کمک می‌کنند تا سریع‌تر به اهداف تناسب
                  اندام خود برسید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container about__container" id="about">
        {/* <div className="about__image">
          <img className="about__bg" src={dotImg} alt="bg" />
          <img src={aboutImg} alt="about" />
        </div> */}
        <div className="about__image__container">
          <div className="about__image__subcontainer">
            <div className="image__item">
              <img src={about1} alt="about" />
            </div>
          </div>
          <div className="about__image__subcontainer">
            <div className="image__item">
              <img src={about2} alt="about" />
            </div>
            <div className="image__item">
              <img src={about3} alt="about" />
            </div>
          </div>
        </div>
        <div className="about__content">
          <h2 className="section__header">
            درباره
            <div style={{ display: "inline", marginRight: "10px" }}>
              <span className="red__color">B2</span>
              <span className="text__light">FITNESS</span>
            </div>
          </h2>
          <div className="bottom__border" />
          <div className="about__card">
            <p>
              باشگاه B2FITNESS، مکانی است که قهرمانان بزرگ بدنسازی و چهره‌های
              سرشناس را در خود جای داده است. ما به افتخار میزبانی از برخی از
              بهترین ورزشکاران و سلبریتی‌هایی که در رشته‌های خود درخشیده‌اند،
              می‌بالیم. تعهد ما به ارائه تجهیزات پیشرفته، محیطی حرفه‌ای و
              برنامه‌های تمرینی متنوع، باشگاه ما را به مرکزی برای تعالی و پیشرفت
              تبدیل کرده است.
              {/* </p> */}
              <br />
              <br />
              باشگاه ما نه تنها یک مکان برای تمرین است، بلکه یک جامعه ورزشی است
              که در آن اعضا می‌توانند از تجربیات یکدیگر یاد بگیرند، یکدیگر را
              تشویق کنند و در نهایت، در کنار هم رشد کنند. ما به این میراث افتخار
              می‌کنیم و دعوت می‌کنیم تا شما نیز بخشی از این سفر شگفت‌انگیز
              باشید.
            </p>
          </div>
          {/* <p className="section__description">
            Led by our team of expert and motivational instructors, "The Class
            You Will Get Here" is a high-energy, results-driven session that
            combines a perfect blend of cardio, strength training, and
            functional exercises.
          </p> */}
          {/* <div className="about__grid">
            <div className="about__card">
              <span>
                <i className="ri-open-arm-line"></i>
              </span>
              <div>
                <h4>فضای اختصاصی تمرین</h4>
                <p>
                  B2FITNESS دارای فضاهای تمرینی اختصاصی است که به شما امکان
                  می‌دهد تمرینات خود را بدون حواس‌پرتی و با تمرکز کامل انجام
                  دهید.
                </p>
              </div>
            </div>
            <div className="about__card">
              <span>
                <i className="ri-shield-cross-line"></i>
              </span>
              <div>
                <h4>تجهیزات پیشرفته</h4>
                <p>
                  با استفاده از آخرین فناوری‌های روز دنیا، ما تجهیزات و
                  ماشین‌آلات تناسب اندام را فراهم کرده‌ایم که برای ارتقاء سطح
                  تمرینات ورزشی شما طراحی شده‌اند.
                </p>
              </div>
            </div>
            <div className="about__card">
              <span>
                <i className="ri-p2p-line"></i>
              </span>
              <div>
                <h4>برنامه‌ تغذیه‌ سفارشی</h4>
                <p>
                  علاوه بر تمرینات ورزشی، ما برنامه‌های تغذیه‌ای سفارشی را نیز
                  ارائه می‌دهیم که به شما کمک می‌کنند تا سریع‌تر به اهداف تناسب
                  اندام خود برسید.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="section__container class__container" id="class">
        <h2 className="section__header">
          کلاس های{" "}
          <div style={{ display: "inline", marginRight: "10px" }}>
            <span className="red__color">B2</span>
            <span className="text__light">FITNESS</span>
          </div>
        </h2>
        <div className="bottom__border" />
        <p className="section__description">
          B2FITNESS با ارائه کلاس‌های متنوع ورزشی، تجربه‌ای جامع از تناسب اندام
          و آمادگی جسمانی را به شما ارائه می‌دهد.
          <br />
          هر کلاس با دقت طراحی شده تا به شما کمک کند تا به نتایج مطلوب خود دست
          یابید، در حالی که از فرآیند تمرین لذت می‌برید.
        </p>
        <div className="class__grid">
          <div className="class__card">
            <img src={dotImg} alt="bg" className="class__bg" />

            <img src={class1Img} alt="class" />
            <div className="class__content">
              <h4>Strength Training</h4>
              <p>Body Building</p>
            </div>
          </div>
          <div className="class__card">
            <img src={dotImg} alt="bg" className="class__bg" />
            <img src={class3Img} alt="class" />
            <div className="class__content">
              <h4>power & strategy</h4>
              <p>Kick boxing</p>
            </div>
          </div>
          <div className="class__card">
            <img src={dotImg} alt="bg" className="class__bg" />
            <img src={class4Img} alt="class" />
            <div className="class__content">
              <h4>Group Fitness</h4>
              <p>TRX or HIIT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container trainer__container" id="trainer">
        <h2 className="section__header">
          مربی های
          <div style={{ display: "inline", marginRight: "10px" }}>
            <span className="red__color">B2</span>
            <span className="text__light">FITNESS</span>
          </div>
        </h2>
        <div className="bottom__border" />
        <p className="section__description">
          در B2FITNESS مربیانی حرفه‌ای و متخصص در زمینه‌های خود فعالیت می‌کنند.
          آن‌ها با تجربه و دانش عمیق خود، شما را در مسیر رسیدن به اهداف تناسب
          اندامتان هدایت می‌کنند. هر یک از مربیان ما با اشتیاق و تعهد به کار
          خود، محیطی انگیزشی و پشتیبانی کننده را برای ورزشکاران فراهم می‌آورند.
        </p>
        <div className="trainer__grid">
          <div className="trainer__card">
            <img src={trainer1Img} alt="trainer" />
          </div>
          <div className="trainer__card">
            <div className="trainer__content">
              <h4>رضا سودانی</h4>
              <h5>Kick Boxing</h5>
              <hr />
              <p>
                استادی در هنرهای رزمی و دارای سال‌ها تجربه در آموزش و مبارزه
                است. او با تمرکز بر تکنیک‌های پیشرفته و استراتژی‌های مبارزه، به
                شما کمک می‌کند تا قدرت، سرعت و دقت خود را به حداکثر برسانید.
              </p>
              <div className="trainer__socials">
                <a href="#">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-google-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="trainer__card">
            <img src={trainer2Img} alt="trainer" />
          </div>
          <div className="trainer__card">
            <div className="trainer__content">
              <h4>مهران محمدی</h4>
              <h5>HIIT and Functional</h5>
              <hr />
              <p>
                مربی TRX و HIIT ما، متخصص در تمرینات مقاومتی و تمرینات با شدت
                بالا است. او با استفاده از روش‌های نوین و خلاقانه، برنامه‌های
                تمرینی چالش‌برانگیزی را طراحی می‌کند که به شما کمک می‌کند تا
                چربی بسوزانید و عضلات خود را تقویت کنید.
              </p>
              <div className="trainer__socials">
                <a href="#">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-google-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="trainer__card">
            <img src={trainer3Img} alt="trainer" />
          </div>
          <div className="trainer__card">
            <div className="trainer__content">
              <h4>علی زارع</h4>
              <h5>Body Building</h5>
              <hr />
              <p>
                مربی بدنسازی ما، با داشتن دانش عمیق در زمینه علم تمرین و تغذیه،
                به شما در ساختن بدنی قدرتمند و متناسب کمک می‌کند. او با
                برنامه‌ریزی دقیق و توجه به جزئیات، راهنمایی‌هایی ارائه می‌دهد که
                مطابق با اهداف فردی شما باشد.
              </p>
              <div className="trainer__socials">
                <a href="#">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-google-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="ri-twitter-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section__container price__container" id="price">
        <h2 className="section__header">
          قیمت های{" "}
          <div style={{ display: "inline", marginRight: "10px" }}>
            <span className="red__color">B2</span>
            <span className="text__light">FITNESS</span>
          </div>
        </h2>
        <div className="bottom__border" />
        <p className="section__description">
          طرح‌های قیمت‌گذاری ما با سطوح عضویت مختلفی همراه هستند که هر کدام برای
          پاسخگویی به سلایق و آرزوهای تناسب اندام متفاوت، به طور خاص طراحی
          شده‌اند.
        </p>
        <div className="price__grid">
          <div className="price__card">
            <div className="price__content">
              <h4>طرح پایه</h4>
              <MdFitnessCenter
                style={{ fontSize: "70px", opacity: ".8" }}
                className="text__dark"
              />
              {/* <p>
                Our Basic Plan is the perfect starting point for individuals
                looking to kickstart their fitness journey or maintain an active
                lifestyle.
              </p> */}
              <hr />
              <h4>ویژگی های اصلی</h4>
              <p>دسترسی به تجهیزات بدنسازی</p>
              <p>کلاس‌های گروهی بدنسازی</p>
              <p>یک جلسه مشاوره تغذیه</p>
              <p>برنامه‌ریزی تمرینی</p>
              <h4>ماهانه 500,000 تومان</h4>
            </div>
            <button className="btn">شروع کن</button>
          </div>
          <div className="price__card">
            <div className="price__content">
              <h4>طرح استاندارد</h4>
              <GiStrong
                style={{ fontSize: "70px", opacity: ".8" }}
                className="text__dark"
              />
              {/* <p>
                Our weekly plan is designed to provide structure and variety to
                your workouts, ensuring you stay motivated and on track.
              </p> */}
              <hr />
              <h4>ویژگی های اصلی</h4>
              <p>دسترسی کامل به تمام تجهیزات</p>
              <p>کلاس‌های گروهی نامحدود </p>
              <p> دو جلسه مشاوره تغذیه</p>
              <p>دسترسی به سونا و جکوزی</p>
              <h4>قیمت: ماهانه 850,000 تومان</h4>
            </div>
            <button className="btn">شروع کن</button>
          </div>
          <div className="price__card">
            <div className="price__content">
              <h4>طرح ویژه</h4>
              <GiStrongMan
                style={{ fontSize: "70px", opacity: ".8" }}
                className="text__dark"
              />
              {/* <img src={price3Img} alt="price" /> */}
              {/* <p>
                With this flexible membership, you'll have access to our
                state-of-the-art gym facilities, expert trainers, and a vibrant
                fitness community
              </p> */}
              <hr />
              <h4>ویژگی های اصلی</h4>
              <p>دسترسی اختصاصی به تمام امکانات</p>
              <p>مشاوره تغذیه هفتگی </p>
              <p>برنامه‌ تمرینی با مربیان برتر</p>
              <p>دسترسی نامحدود به سونا, جکوزی, اسپا</p>
              <h4 className="price__card__price">
                قیمت: ماهانه 1,500,000 تومان
              </h4>
            </div>
            <button className="btn">شروع کن</button>
          </div>
        </div>
      </section>

      <section className="section__container client__container" id="client">
        <h2 className="section__header">
          نظر ورزشکاران
          <div style={{ display: "inline", marginRight: "10px" }}>
            <span className="red__color">B2</span>
            <span className="text__light">FITNESS</span>
          </div>
        </h2>
        <div className="bottom__border" />
        <p className="section__description">
          در B2FITNESS، ما به دنبال ایجاد تجربه‌ای فراموش‌نشدنی برای اعضایمان
          هستیم. نظرات شما برای ما بسیار ارزشمند است و ما را در ارائه خدمات بهتر
          یاری می‌رساند. در این بخش، شما می‌توانید نظرات و تجربیات اعضای باشگاه
          را بخوانید.
        </p>
        <Swiper
          spaceBetween={10}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 10, // or your desired space between slides
          //   },
          // }}
          breakpointsBase="1"
          brea
          slidesPerView={"auto"}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            {/* <div className="swiper-slide"> */}
            <div className="client__card">
              <img src={client1Img} alt="client" />
              <div className="client__ratings">
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-line"></i>
                </span>
              </div>
              <p>
                طرح‌های متنوع و انعطاف‌پذیر باشگاه به من کمک کرده تا برنامه‌ریزی
                تمرینی‌ام را با زندگی شلوغم هماهنگ کنم. واقعاً راضی‌ام!
              </p>
              <h4>علی رحیمی</h4>
              <h5>فروشنده خودرو</h5>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <img src={client2Img} alt="client" />
              <div className="client__ratings">
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-half-fill"></i>
                </span>
              </div>
              <p>
                باشگاهی استثنایی با تجهیزات عالی و مربیان حرفه‌ای. هر جلسه
                تمرین، انگیزه‌ای جدید برای رسیدن به اهدافم می‌دهد.
              </p>
              <h4>مهرداد حسینی</h4>
              <h5>مدیر بازاریابی</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <img src={client3Img} alt="client" />
              <div className="client__ratings">
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-half-fill"></i>
                </span>
                <span>
                  <i className="ri-star-line"></i>
                </span>
              </div>
              <p>
                کلاس‌های گروهی پرانرژی و مربیانی که واقعاً به پیشرفت شما اهمیت
                می‌دهند. تجربه‌ای فوق‌العاده در هر بار مراجعه.
              </p>
              <h4>ماهان اسمایی</h4>
              <h5>برنامه نویس</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <img src={client4Img} alt="client" />
              <div className="client__ratings">
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
                <span>
                  <i className="ri-star-fill"></i>
                </span>
              </div>
              <p>
                محیطی تمیز، تجهیزات به‌روز، و برنامه‌های تمرینی که واقعاً به شما
                کمک می‌کنند تا به اهدافتان برسید. اینجا بیشتر از یک باشگاه است،
                یک خانه دوم است.
              </p>
              <h4>رضا رستاخیز</h4>
              <h5>دانشجو</h5>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
        {/* Slider main container */}
        {/* <div className="swiper"> */}
        {/* Additional required wrapper  */}
        {/* <div className="swiper-wrapper"> */}
        {/* Slides */}
        {/* 
            <div className="swiper-slide">
              <div className="client__card">
                <img src={client2Img} alt="client" />
                <div className="client__ratings">
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-half-fill"></i>
                  </span>
                </div>
                <p>
                  باشگاهی استثنایی با تجهیزات عالی و مربیان حرفه‌ای. هر جلسه
                  تمرین، انگیزه‌ای جدید برای رسیدن به اهدافم می‌دهد.
                </p>
                <h4>مهرداد حسینی</h4>
                <h5>مدیر بازاریابی</h5>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <img src={client3Img} alt="client" />
                <div className="client__ratings">
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-half-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-line"></i>
                  </span>
                </div>
                <p>
                  کلاس‌های گروهی پرانرژی و مربیانی که واقعاً به پیشرفت شما اهمیت
                  می‌دهند. تجربه‌ای فوق‌العاده در هر بار مراجعه.
                </p>
                <h4>ماهان اسمایی</h4>
                <h5>برنامه نویس</h5>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <img src={client4Img} alt="client" />
                <div className="client__ratings">
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                  <span>
                    <i className="ri-star-fill"></i>
                  </span>
                </div>
                <p>
                  محیطی تمیز، تجهیزات به‌روز، و برنامه‌های تمرینی که واقعاً به
                  شما کمک می‌کنند تا به اهدافتان برسید. اینجا بیشتر از یک باشگاه
                  است، یک خانه دوم است.
                </p>
                <h4>رضا رستاخیز</h4>
                <h5>دانشجو</h5>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="footer__logo">
              <a href="#">
                <img src={logoImg} alt="logo" />
              </a>
            </div>
            <p>
              با انتخاب طرح‌های مقرون‌به‌صرفه ما، در مسیر تناسب اندام و تقویت
              بدنی قدم بردارید. ما در کنار شما هستیم تا با تلاش و پشتکار، به
              اهداف ورزشی خود برسید و به موفقیت‌های بزرگ دست یابید.
            </p>
            <div className="contact__info">
              <p className="address">
                تهران, خیابان فرشته, خیابان تختی, کوچه هفتم, پلاک 19
              </p>
              <div className="phone__number">
                <span>+98 21 2621 0959</span>
                <span>+98 21 2621 9014</span>
              </div>
            </div>
            <div className="footer__socials">
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </div>
          <div
            style={{
              // background: "red",
              display: "flex",
              justifyContent: "space-around",
              gap: "2rem",
            }}
          >
            <div className="footer__col">
              <h4>درباره ما</h4>
              <div className="footer__links">
                <a href="#">بلاگ</a>
                <a href="#">امنیت</a>
                <a href="#">شغل ها</a>
              </div>
            </div>
            <div className="footer__col">
              <h4>ارتباط</h4>
              <div className="footer__links">
                <a href="#">تماس با ما</a>
                <a href="#">قانون و مقررات</a>
                <a href="#">BMI محاسبه</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bar">است B2FITNESS تمامی حقوق متعلق به @</div>
      </footer>
    </>
  );
}

export default App;

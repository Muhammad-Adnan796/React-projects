import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { IoMenu } from "react-icons/io5";
import "../styleComponents/sass/Nav.scss";

const Nav = () => {
  let [scrol, setScrol] = useState(false);
  let [menuBtn, setMenuBtn] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('services');
    if (aboutSection) {
      const navbarHeight = document.querySelector('.nav').clientHeight;
      const yOffset = aboutSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
     window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  const handleButtonClick = () => {
    setMenuBtn(!menuBtn);
  };

  useEffect(() => {
    const handle = () => {
      setMenuBtn(false);
    };
    document.addEventListener("mousedown", handle);

    return ()=>{
      document.removeEventListener("mousedown", handle);
    }
  });

  const changedNavBar = () => {
    if (window.scrollY >= 60) {
      setScrol(true);
    } else {
      setScrol(false);
    }
  };

  window.addEventListener("scroll", changedNavBar);

  return (
    <>
      <div className={scrol ? "nav" : "nav active"}>
        <div id="logo">
          <h2>Dorsin</h2>
        </div>
        <div id="menus">
          <ul>
            <Link
              // to={scrollToAbout}
              onClick={scrollToAbout}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Home
            </Link>
           
            <Link
              to="#services"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Services
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Features
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Pricing
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Team
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Blog
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div id="menubar" onClick={handleButtonClick}>
          <i>
            <IoMenu />
          </i>
        </div>
        <button id="free-btn" onClick={scrollToAbout} >Try it Free</button>
      </div>
      {menuBtn && (
        <div className={menuBtn ? "menus2 menus-hide" : "menus2"}>
          <div>
            <ul>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Home
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Services
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Features
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Pricing
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Team
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Blog
            </Link>
            <Link
              to="section1"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-link"
            >
              Contact
            </Link>
            </ul>
          </div>
          <button id="free-btn">Try it Free</button>
        </div>
      )}
    </>
  );
};

export default Nav;

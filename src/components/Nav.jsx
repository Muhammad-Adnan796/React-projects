import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import "../styleComponents/sass/Nav.scss";

const Nav = () => {
  let [scrol, setScrol] = useState(false);
  let [menuBtn, setMenuBtn] = useState(false);


  const menuRef = useRef()

  const scrollToAbout = (clas='.container') => {
    console.log(clas);
    const aboutSection = document.querySelector(clas);
    if (aboutSection) {
      const navbarHeight = document.querySelector('.nav').clientHeight;
      const yOffset = aboutSection.getBoundingClientRect().top + window.scrollY - (navbarHeight - parseInt("20px"));
     window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  };

  const handleButtonClick = () => {
    setMenuBtn((prev) => !prev);
  };


  useEffect(() => {
    const handle = (e) => {
      if(!menuRef.current.contains(e.target)){

        setMenuBtn(false);
        console.log(menuRef.current);
      }
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
           <a href="#home" className="nav-link" >Home</a>
           <a href="#services" className="nav-link" >Services</a>
           <a href="#features" className="nav-link" >Features</a>
           <a href="#pricing" className="nav-link" >Pricing</a>
           <a href="#team" className="nav-link" >Team</a>
           <a href="#blog" className="nav-link" >Blog</a>
           <a href="#contact" className="nav-link" >Contact</a>
           
          </ul>
        </div>
        <div id="menubar" ref={menuRef} onClick={handleButtonClick}>
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
            <a href="#home" className="nav-link" >Home</a>
           <a href="#services" className="nav-link" >Services</a>
           <a href="#features" className="nav-link" >Features</a>
           <a href="#pricing" className="nav-link" >Pricing</a>
           <a href="#team" className="nav-link" >Team</a>
           <a href="#blog" className="nav-link" >Blog</a>
           <a href="#contact" className="nav-link" >Contact</a>
            </ul>
          </div>
          <button id="free-btn">Try it Free</button>
        </div>
      )}
    </>
  );
};

export default Nav;

import React from "react";
import { BsSend } from "react-icons/bs";
import Payment from "../assets/payments.png";
import "../styleComponents/sass/_Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="card dorsin">
          <ul>
            <li>
              <h1>DORSIN</h1>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="card info">
          <ul>
            <li>
              <h1>Information</h1>
            </li>
            <li>
              <a href="">Terms & Condition</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Bookmarks</a>
            </li>
          </ul>
        </div>
        <div className="card support">
          <ul>
            <li>
              <h1>Support</h1>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Disscusion</a>
            </li>
          </ul>
        </div>
        <div className="card subscribe">
          <ul>
            <li>
              <h1>Subscribe</h1>
            </li>
            <li>
              <p>
                In an ideal world this text wouldn’t exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </p>
            </li>
            <li>
              <span>
                <input type="text" placeholder="Email" />
                  <BsSend className="sendI" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-end">
        <div className="year">
          <h3>2019 - 2023 © Dorsin - Themesbrand</h3>
        </div>
        <div className="payment">
            <img src={Payment} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;

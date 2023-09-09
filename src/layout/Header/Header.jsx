import React from "react";
import { BiShoppingBag, BiMenuAltRight } from "react-icons/bi";
import logo from "../../assets/logo.png";
import HeaderCSS from "./Header.module.scss";

const Header = () => {
  // let [menuOpne, setMenuOpne] = useState(false);

  return (
    <nav className={HeaderCSS.header}>
      <img src={logo} alt="LogoImage" />

      <div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>

        <BiShoppingBag className={HeaderCSS.bagi} />
      </div>
      <span>
        <BiMenuAltRight className={HeaderCSS.menu} />
      </span>
    </nav>
  );
};

export default Header;

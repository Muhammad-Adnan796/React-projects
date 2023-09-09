import axios from "axios";
import productCSS from "./Products.module.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { BiSolidStar } from "react-icons/bi";
import { InputNumber } from "antd";
import Buttons from "../../components/Buttons/Buttons";

const Product = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const onChange = (value) => {
    console.log("changed", value);
  };

 

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct({ ...response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

 

  const stars = [];
  // Check if product.rating exists before accessing rate property
  if (product.rating && product.rating.rate !== undefined && product.rating.rate !== null) {
    for (let i = 1; i <= 5; i++) {
      // Determine the color of the star based on the rating number
      const starColor = i <= product.rating.rate ? "yellow" : "rgb(177, 175, 175)";

      // Create a star icon with the appropriate color
      const star = (
        <BiSolidStar
          key={i}
          className={productCSS.starI}
          style={{ color: starColor }}
        />
      );

      stars.push(star);
    }
  }
  return (
    <div className={productCSS.singleProduuct}>
      <nav>
        <img src={logo} alt="LogoImage" />
        <div>
          <FiSearch />
          <FiShoppingCart />
          <BsPerson />
        </div>
      </nav>

      <div className={productCSS.productDetail}>
        <div className={productCSS.productImg}>
          <img src={product.image} alt="" />
        </div>
        <div className={productCSS.configes}>
          <span>{stars}</span>
          <h3>{product.title}</h3>
          <h4>{`$${product.price}`}</h4>
          <p className={productCSS.colors}>
            Colors
            <span>
              <span className={productCSS.orange}>
                
                <span></span>
              </span>
              <span className={productCSS.blue}>
                
                <span></span>
              </span>
              <span className={productCSS.grey}>
                
                <span></span>
              </span>
            </span>
          </p>
          <p className={productCSS.quantity}>
            Quantity
            <span className="text-area">
              <InputNumber
                min={1}
                max={10}
                defaultValue={0}
                onChange={onChange}
                style={{ margin: "0px 10px" }}
              />
            </span>
          </p>
          <span className={productCSS.fav}>
            <FiHeart className={productCSS.favI} /> <p>Add to favorites</p>
          </span>
          <Buttons label="Add to Card" Clr="white" bgClr="orangered" />
        </div>
      </div>
    </div>
  );
};

export default Product;

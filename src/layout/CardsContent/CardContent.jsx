import React, { useEffect, useState } from "react";
import cardContentCSS from "./CardContent.module.scss";
import Card from "../../components/Card/Card";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const CardContent = () => {
  const [cardData, setCardData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setCardData([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleItemClick = (id)=>{
    navigate(`/product/${id}`)
  }

  return (
    <div className={cardContentCSS.cardContent}>
      <div className={cardContentCSS.title}>
        <h1>Best Selling</h1>
        <p>
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
      <div className={cardContentCSS.cards}>
        {cardData.map((item) => {
          return (
            <>
           
              <Card click={()=> handleItemClick(item.id)} id={item.id}
                title={item.title}
                bgpic={item.image}
                price={item.price}
                rate={item.rating.rate}
              />
             
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CardContent;

import React, { useEffect, useState } from "react";
import cardContentCSS from "./CardContent.module.scss";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import { Get } from "../../components/Helper/AxiosMethods";

const CardContent = () => {
  const [cardData, setCardData] = useState([]);

  const navigate = useNavigate();

  const getData = () => {
    Get(`products`)
      .then((response) => {
        console.log(response.data);
        setCardData([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    getData();
  }, []);

  const handleItemClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={cardContentCSS.cardContent}>
      <div className={cardContentCSS.title}>
        <Buttons label="Form page" clicked={() => navigate(`/form`)} />
        <h1>Best Selling</h1>
        <p>
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
      <div className={cardContentCSS.cards}>
        {cardData.map((item) => {
          return (
            <>
              <Card
                click={() => handleItemClick(item.id)}
                id={item.id}
                cardid={item.id}
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

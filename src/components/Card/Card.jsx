import React from "react";
import { BsStarFill } from "react-icons/bs";
import cardCSS from "./Card.module.scss";

const Card = ({click,title,bgpic,price,rate}) => {
  return (
   
    <div onClick={click} className={cardCSS.card}>
      <div className={cardCSS.imge}>
        <img src={bgpic} alt="" />
      </div>
      <div className={cardCSS.rating}>
        <h3>{title.slice(0,37)}</h3>
        <span>
          <p>{`$${price}`}</p>
          <hr />
          <p>
            {rate} <BsStarFill className={cardCSS.ratI} />
          </p>
        </span>
      </div>
    </div>
  
  );
};

export default Card;

import React from "react";
import { BsStarFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import cardCSS from "./Card.module.scss";
import { useNavigate } from "react-router-dom";
import { Delete } from "../Helper/AxiosMethods";

const Card = ({ click,cardid, title, bgpic, price, rate }) => {

  const navigate = useNavigate();

  const deleteData = (e) => {
    e.stopPropagation();
    Delete(`products`,cardid)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`form/${cardid}`);
  };

  return (
    <div onClick={click} className={cardCSS.card}>
      <div className={cardCSS.imge}>
        <div className={cardCSS.DUicons}>
          <span onClick={deleteData} >
            <MdDelete className={cardCSS.icons} />
          </span>
          <span onClick={handleEdit}>
            <FaEdit className={cardCSS.icons} />
          </span>
        </div>
        <img src={bgpic} alt="" />
      </div>
      <div className={cardCSS.rating}>
        <h3>{title.slice(0, 37)}</h3>
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

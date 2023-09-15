import React, { useEffect, useState } from "react";
// import Buttons from "../Buttons/Buttons";
import formCSS from "./Form.module.scss";
import { useParams } from "react-router-dom";
import { Get, Post, Put,jsonData} from "../Helper/AxiosMethods";


const Form = () => {
  const [dataModal, setDataModal] = useState(jsonData);
  const { id } = useParams();

  const postData = () => {
    Post(`products`, dataModal)
      .then((response) => {
        console.log({...response.data})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = () => {
    Get(`products`,id)
      .then((response) => {
        setDataModal({ ...response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateData = () => {
    Put(`products`,id, dataModal)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (id) {
      getData();
    }else{
      setDataModal(jsonData)
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id){
      updateData()
      console.log("Put Request")
    }else{
      postData();
      console.log("Post Request")
    }
  };

  return (
    <div className={formCSS.form}>
      <form onSubmit={handleSubmit}>
        <h1>Data Form</h1>
        <input
          type="text"
          value={dataModal.image}
          onChange={(e) =>
            setDataModal({ ...dataModal, image: e.target.value })
          }
          placeholder="ImageURL"
        />{" "}
        <br />
        <input
          type="text"
          value={dataModal.title}
          onChange={(e) =>
            setDataModal({ ...dataModal, title: e.target.value })
          }
          placeholder="Title"
        />{" "}
        <br />
        <input
          type="text"
          value={dataModal.description}
          onChange={(e) =>
            setDataModal({ ...dataModal, description: e.target.value })
          }
          placeholder="Description"
        />{" "}
        <br />
        <input
          type="text"
          value={dataModal.price}
          onChange={(e) =>
            setDataModal({ ...dataModal, price: e.target.value })
          }
          placeholder="Price"
        />{" "}
        <br />
        <input
          type="text"
          value={dataModal.category}
          onChange={(e) =>
            setDataModal({ ...dataModal, category: e.target.value })
          }
          placeholder="Category"
        />{" "}
        <br />
        <input
          type="text"
          value={dataModal?.rating?.rate || ""}
          onChange={(e) =>
            setDataModal({
              ...dataModal,
              rating: { ...dataModal.rating, rate: e.target.value },
            })
          }
          placeholder="Rating"
        />{" "}
        <br />
        <input
          type="text"
          value={dataModal?.rating?.count || ""}
          onChange={(e) =>
            setDataModal({
              ...dataModal,
              rating: { ...dataModal.rating, count: e.target.value },
            })
          }
          placeholder="Count"
        />{" "}
        <br /> <br />
        {/* <Buttons
          label={id ? "Update" : "Submit"}
          Clr="white"
          bgClr="orangered"
          clicked={id ? updateData : postData}
        /> */}
        <button type="submit" >{id ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default Form;

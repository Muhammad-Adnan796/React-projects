import Axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Axios_get() {
  const [my_data, setData] = useState([]);

  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div>
        {/* <h1>{my_data.id}</h1>
        <h2>{my_data.title}</h2>
        <p>{my_data.body}</p> */}

        {my_data.map((items) => {
          const { id, title, body } = items;
          return (
            <>
              <h1>{id}</h1>
              <h2>{title.slice(0,10).toUpperCase()}</h2>
              <p>{body.slice(0,50).toLowerCase()}</p>
            </>
          );
        })}
      </div>
    </>
  );
}

export { Axios_get };

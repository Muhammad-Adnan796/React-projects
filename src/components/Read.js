import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://647f3435c246f166da90546a.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => console.log(`Error : ${error}`));
  }

  function deleteData(id) {
    if (window.confirm("Are you sure to delete data?")) {
      axios
        .delete(`https://647f3435c246f166da90546a.mockapi.io/crud/${id}`)
        .then(() => {
          getData();
        });
    }
  }

  function setEditData(id, name, age, email) {
    localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("age", age);
      localStorage.setItem("email", email);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="data-div">
        <div className="new-data-btn">
          <Link to="/create">
            <button className="buttn">Create New Data</button>
          </Link>
          {apidata.length > 0 ? (
            <table className="table">
              <thead>
                <tr className="row-head">
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>EMAIL</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {apidata.map((items) => {
                  return (
                    <>
                      <tr className="row-data">
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.age}</td>
                        <td>{items.email}</td>
                        <td className="btn-Edit">
                          <Link to="/edit">
                            <button
                              onClick={() =>
                                setEditData(
                                  items.id,
                                  items.name,
                                  items.age,
                                  items.email
                                )
                              }
                            >
                              Edit
                            </button>
                          </Link>
                        </td>
                        <td className="btn-Delet">
                          <button onClick={() => deleteData(items.id)}>
                            Delet
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h2>No Data Found</h2>
          )}
        </div>
      </div>
    </>
  );
}

export { Read };

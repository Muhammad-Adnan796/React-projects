import React from "react";
import TodoList from "../compsStyle/TodoList.module.css";
import { MdDelete, MdEditSquare } from "react-icons/md";

const Todos = ({titleList,handleDelete,handleEdite }) => {
  return (
    <>
      <ul className={TodoList.todosList} >
        {titleList !== "" ? titleList.map((items) => {
          return (
            <li key={items.id} >
              <p>{items.title}</p>
              <span>
                <button className={TodoList.edt} >
                  <MdEditSquare onClick={()=>handleEdite(items.id)} />
                </button>
                <button className={TodoList.dlt} onClick={()=>handleDelete(items.id)} >
                  <MdDelete />
                </button>
              </span>
            </li>
          );
        }) : ""}
      </ul>
    </>
  );
};

export default Todos;

import React, { useState } from "react";
import TodoStyle from "../compsStyle/TodoStyle.module.css";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const TodoApp = () => {
  let [title, setTitle] = useState("");
  let [titleList, setTitleList] = useState([]);
  let [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = titleList.find((item) => item.id === editId);
      const updatedTodo = titleList.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, title })
          : { id: t.id, title: t.title }
      );
      setTitleList(updatedTodo);
      setTitle("");
      setEditId(0);
      return;
    }

    if (title !== "") {
      setTitleList([{ id: `${title}-${Date.now()}`, title }, ...titleList]);
      setTitle("");
    }
  };

  const handleDelete = (id) => {
    let deletTodo = titleList.filter((item) => item.id !== id);
    setTitleList([...deletTodo]);
  };

  const handleEdite = (id) => {
    let editTodo = titleList.find((item) => item.id === id);
    setTitle(editTodo.title);
    setEditId(id);
  };

  return (
    <>
      <div className={TodoStyle.todoApp}>
        <h1 id={TodoStyle.title}>Todo App</h1>
        <TodoForm
          editId={editId}
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          setTitleList={() => setTitleList("")}
        />
        <Todos
          titleList={titleList}
          handleDelete={handleDelete}
          handleEdite={handleEdite}
        />
      </div>
    </>
  );
};

export default TodoApp;

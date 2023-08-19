import React from "react";
import { CgPlayListAdd } from "react-icons/cg";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import FormStyle from "../compsStyle/Form.module.css";

const TodoForm = ({ editId, handleSubmit, title, setTitle, setTitleList }) => {
  return (
    <div className={FormStyle.formdiv}>
      <form onSubmit={handleSubmit} className={FormStyle.form}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className={FormStyle.btns} >
          {editId ? (
            <button id={FormStyle.editBtn}>
              <FaEdit />
            </button>
          ) : (
            <div>
              <button
                type="submit"
                className={`${FormStyle.addAlldeltBtn} ${FormStyle.add}`}
              >
                <CgPlayListAdd />
              </button>
              <button
                onClick={setTitleList}
                className={`${FormStyle.addAlldeltBtn} ${FormStyle.delet}`}
              >
                <MdOutlineDeleteSweep />
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

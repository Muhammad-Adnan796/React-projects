import React, { useState } from "react";

function OtherInp_things() {
  const [textArea, setTextArea] = useState();
  const [selectMenu, setselectMenu] = useState("USA");
  const [checked, setcheckedBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Comments : ${e.target[0].value}`);
    console.log(`Country : ${e.target[1].value}`);
    console.log(`CheckeBox : ${e.target[2].checked}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label style={{ verticalAlign: "top" }} htmlFor="">
          Comments :
        </label>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          cols="20"
          rows="10"
        ></textarea>
        <br />
        <br />

        <label htmlFor="">Select Country : </label>

        <select
          value={selectMenu}
          onChange={(e) => setselectMenu(e.target.value)}
        >
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <br />
        <label htmlFor=""> Yes I Agree The Terms </label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setcheckedBox(e.target.checked)}
        />
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export { OtherInp_things };

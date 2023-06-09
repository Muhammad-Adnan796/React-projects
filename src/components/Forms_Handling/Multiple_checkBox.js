import React, { useState } from "react";

function Multiple_checkBox() {
  const [fruitsArray, setFruitsArray] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setFruitsArray([...fruitsArray, value]);
    } else {
      setFruitsArray(fruitsArray.filter((e) => e !== value));
    }
  };

  const handleSubmit = (a) => {
    a.preventDefault();
    console.log(fruitsArray);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Select Fruits: &nbsp;&nbsp; </label>
        <input
          type="checkbox"
          name="fruits"
          value="Apple"
          onChange={handleChange}
        />
        <label htmlFor="">Apple</label>&nbsp;
        <input
          type="checkbox"
          name="fruits"
          value="Mango"
          onChange={handleChange}
        />
        <label htmlFor="">Mango</label>&nbsp;
        <input
          type="checkbox"
          name="fruits"
          value="Banana"
          onChange={handleChange}
        />
        <label htmlFor="">Banana</label>&nbsp;
        <input
          type="checkbox"
          name="fruits"
          value="Grapes"
          onChange={handleChange}
        />
        <label htmlFor="">Grapes</label>&nbsp;
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { Multiple_checkBox };

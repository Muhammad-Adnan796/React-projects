import React from "react";

const QAInputField = ({required, val, onChange, label }) => {
  return (
    <input
      type="text"
      required={required}
      value={val}
      onChange={onChange}
      placeholder={label}
    />
  );
};

export default QAInputField;

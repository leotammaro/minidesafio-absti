import React from "react";
import "./InputForm.scss";

function InputForm({
  placeholder,
  value = "",
  onChange,
  error,
  type,
  min,
  autoFocus,
}) {
  return (
    <div className="input-container">
      <input
        autoFocus={autoFocus}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-form"
        type={type}
        min={min}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
}

export default InputForm;

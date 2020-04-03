import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const TextInput = ({
  label,
  required,
  htmlId,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  children,
  ...props
}) => {
  return (
    <div>
      <Label label={label} htmFor={htmlId} required={required} />
      <input
        id={htmlId}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={error.length > 0 ? { border: "1px solid red" } : {}}
        {...props}
      />
      {children}
      {error.length > 0 && <div className="error">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  htmlId: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInput.defaultProps = {
  required: false,
  type: "text",
  value: "",
  placeholder: "",
  error: ""
};

export default TextInput;

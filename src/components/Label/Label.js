import React from "react";
import PropTypes from "prop-types";

function Label({ label, required, htmlFor }) {
  return (
    <label style={{ display: "block" }} htmlFor={htmlFor}>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </label>
  );
}

Label.propTypes = {
  /** Label text */
  label: PropTypes.string,

  /** Displays asterisk after label if true */
  required: PropTypes.bool,

  /** HTML id for associated input */
  htmlFor: PropTypes.string
};

Label.defaultProps = {
  label: "label",
  required: false,
  htmlFor: ""
};

export default Label;

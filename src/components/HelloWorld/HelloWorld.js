import React from "react";
import PropTypes from "prop-types";

/**
 * This component can be used to do awesome stuff.
 */
function HelloWorld({ message }) {
  return <div>Hello, {message}</div>;
}

HelloWorld.propTypes = {
  /** Message to display. */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: "world"
};

export default HelloWorld;

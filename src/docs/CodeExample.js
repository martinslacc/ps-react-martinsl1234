import React from "react";
import PropTypes from "prop-types";
import PrismCode from "react-prism";
import "prismjs";
import "prismjs/themes/prism.css";

const CodeExample = ({ code }) => (
  <pre>
    <PrismCode className="language-javascript">{code}</PrismCode>
  </pre>
);

CodeExample.propTypes = {
  code: PropTypes.string.isRequired
};

export default CodeExample;

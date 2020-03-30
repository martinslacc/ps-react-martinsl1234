module.exports = [{"name":"Eyeicon","description":"SVG Eye Icon","code":"import React from 'react';\n\n/** SVG Eye Icon */\nfunction EyeIcon() {\n  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg\n  return (\n    <svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n      <g transform=\"matrix(.02146 0 0 .02146 1 1)\" fill=\"#4d4d4d\">\n        <path d=\"m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1\" />\n        <circle cx=\"466.08\" cy=\"466.02\" r=\"134.5\" />\n      </g>\n    </svg>\n  )\n}\n\nexport default EyeIcon;\n","examples":[{"name":"ExampleEyeicon","description":"","code":"import React from \"react\";\nimport Eyeicon from \"ps-react/Eyeicon\";\n\nexport default function ExampleEyeicon() {\n  return <Eyeicon />;\n}\n"}]},{"name":"HelloWorld","description":"This component can be used to do awesome stuff.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display.","defaultValue":{"value":"\"world\"","computed":false}}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\n/**\n * This component can be used to do awesome stuff.\n */\nfunction HelloWorld({ message }) {\n  return <div>Hello, {message}</div>;\n}\n\nHelloWorld.propTypes = {\n  /** Message to display. */\n  message: PropTypes.string.isRequired\n};\n\nHelloWorld.defaultProps = {\n  message: \"world\"\n};\n\nexport default HelloWorld;\n","examples":[{"name":"Test","description":"","code":"import React from \"react\";\nimport HelloWorld from \"ps-react/HelloWorld\";\n\nexport default () => <HelloWorld message=\"Be safe, stay safe. 2\" />;\n"}]},{"name":"Label","description":"","props":{"label":{"type":{"name":"string"},"required":false,"description":"Label text","defaultValue":{"value":"\"label\"","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"Displays asterisk after label if true","defaultValue":{"value":"false","computed":false}},"htmlFor":{"type":{"name":"string"},"required":false,"description":"HTML id for associated input","defaultValue":{"value":"\"\"","computed":false}}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\nfunction Label({ label, required, htmlFor }) {\n  return (\n    <label style={{ display: \"block\" }} htmlFor={htmlFor}>\n      {label} {required && <span style={{ color: \"red\" }}>*</span>}\n    </label>\n  );\n}\n\nLabel.propTypes = {\n  /** Label text */\n  label: PropTypes.string,\n\n  /** Displays asterisk after label if true */\n  required: PropTypes.bool,\n\n  /** HTML id for associated input */\n  htmlFor: PropTypes.string\n};\n\nLabel.defaultProps = {\n  label: \"label\",\n  required: false,\n  htmlFor: \"\"\n};\n\nexport default Label;\n","examples":[{"name":"ExampleOptional","description":"Optional label","code":"import React from \"react\";\nimport Label from \"ps-react/Label\";\n\n/** Optional label */\nexport default function ExampleOptional() {\n  return <Label label={\"test\"} />;\n}\n"},{"name":"ExampleRequired","description":"Required label","code":"import React from \"react\";\nimport Label from \"ps-react/Label\";\n\n/** Required label */\nexport default function ExampleRequired() {\n  return <Label label={\"test\"} required={true} />;\n}\n"}]},{"name":"ProgressBar","description":"","props":{"percent":{"type":{"name":"number"},"required":false,"description":"Percent of progress completed","defaultValue":{"value":"0","computed":false}},"width":{"type":{"name":"number"},"required":false,"description":"Bar width","defaultValue":{"value":"150","computed":false}},"height":{"type":{"name":"number"},"required":false,"description":"Bar height","defaultValue":{"value":"5","computed":false}}},"code":"import React from \"react\";\nimport PropTypes from \"prop-types\";\n\nclass ProgressBar extends React.Component {\n  getColor = percent => {\n    if (percent === 100) return \"green\";\n    return percent > 50 ? \"lightgreen\" : \"red\";\n  };\n\n  getWidthAsPercentOfTotalWidth = (width, percent) => {\n    return parseInt(width * (percent / 100), 10);\n  };\n\n  render() {\n    const { percent, width, height } = this.props;\n\n    return (\n      <div style={{ border: \"1px solid lightgray\", width }}>\n        <div\n          style={{\n            width: this.getWidthAsPercentOfTotalWidth(width, percent),\n            height,\n            backgroundColor: this.getColor(percent)\n          }}\n        ></div>\n      </div>\n    );\n  }\n}\n\nProgressBar.propTypes = {\n  /** Percent of progress completed */\n  percent: PropTypes.number,\n  /** Bar width */\n  width: PropTypes.number,\n  /** Bar height */\n  height: PropTypes.number\n};\n\nProgressBar.defaultProps = {\n  percent: 0,\n  width: 150,\n  height: 5\n};\n\nexport default ProgressBar;\n","examples":[{"name":"Example100Percent","description":"","code":"import React from \"react\";\nimport ProgressBar from \"ps-react/ProgressBar\";\n\nexport default function Example100Percent() {\n  return <ProgressBar percent={100} />;\n}\n"},{"name":"Example10Percent","description":"","code":"import React from \"react\";\nimport ProgressBar from \"ps-react/ProgressBar\";\n\nexport default function Example10Percent() {\n  return <ProgressBar percent={10} />;\n}\n"},{"name":"Example60Percent","description":"","code":"import React from \"react\";\nimport ProgressBar from \"ps-react/ProgressBar\";\n\nexport default function Example60Percent() {\n  return <ProgressBar percent={60} />;\n}\n"}]}]
import React from "react";
import PropTypes from "prop-types";

class Example extends React.Component {
  state = { showCode: false };

  toggleCode = () => {
    this.setState(prevState => {
      return { showCode: !prevState.showCode };
    });
  };

  render() {
    const { showCode } = this.state;
    const { code, description, name } = this.props.example;
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`)
      .default;

    return (
      <div className="example">
        {description && <h4>{description}</h4>}

        <ExampleComponent />

        <p onClick={this.toggleCode}>{showCode ? "Hide" : "Show"} code</p>

        {showCode && <pre>{code}</pre>}
      </div>
    );
  }
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
};

export default Example;

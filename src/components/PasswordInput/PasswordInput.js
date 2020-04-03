import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../ProgressBar";
import EyeIcon from "../Eyeicon";
import TextInput from "../TextInput";

/** Input for displaying password */
class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    };
  }

  toggleShowPassword = (event) => {
    if (event) {
      event.preventDefault();
    }
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  }

  render() {
    const {
      htmlId,
      name,
      value,
      label,
      onChange,
      maxLength,
      placeHolder,
      showVisibilityToggle,
      error,
      quality,
      ...props
    } = this.props;
    const { showPassword } = this.state;

    return (
      <div>
        <TextInput
          htmlId={htmlId}
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          label={label}
          onChange={onChange}
          maxLength={maxLength}
          placeholder={placeHolder}
          error={error}
          {...props}
        >
          {showVisibilityToggle && (
            <button onClick={this.toggleShowPassword} style={{ marginLeft: 5 }}>
              <EyeIcon />
            </button>
          )}
          {value.length > 0 && quality && (
            <ProgressBar percent={quality} width={130} />
          )}
        </TextInput>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  /** Id for automated testing */
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  placeHolder: PropTypes.string,
  error: PropTypes.string,
  showVisibilityToggle: PropTypes.bool,
  quality: PropTypes.number
};

PasswordInput.defaultProps = {
  value: "",
  label: "Password",
  placeHolder: "",
  maxLength: 50,
  error: "",
  showVisibilityToggle: false,
  quality: 0
};

export default PasswordInput;

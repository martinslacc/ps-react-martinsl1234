import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "ps-react/TextInput";
import PasswordInput from "ps-react/PasswordInput";

/** Registration form, nice. */
const RegistrationForm = ({
  minPasswordLength,
  onSubmit,
  confirmationMessage
}) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = event => {
    const formUser = { ...user };
    formUser[event.target.name] = event.target.value;
    setUser(formUser);
  };

  const passwordQuality = password => {
    if (!password) return null;
    if (password.length > minPasswordLength) return 100;
    const percentOfMinLength = parseInt(
      (password.length / minPasswordLength) * 100,
      10
    );
    return percentOfMinLength;
  };

  const validate = ({ email, password }) => {
    const formErrors = {};

    if (!email) formErrors.email = "Email is required";
    if (password.length < minPasswordLength)
      formErrors.password = `Password must be at least ${minPasswordLength} characters.`;

    setErrors(formErrors);
    const formIsValid = Object.keys(formErrors).length === 0;

    return formIsValid;
  };

  const formOnSubmit = e => {
    e.preventDefault();
    const formIsValid = validate(user);

    if (formIsValid) {
      onSubmit(user);
      setSubmitted(true);
    }
  };

  return submitted ? (
    <h2>{confirmationMessage}</h2>
  ) : (
    <form type="post" onSubmit={formOnSubmit}>
      <TextInput
        htmlId="email"
        name="email"
        value={user.email}
        onChange={onChange}
        label="Email"
        error={errors.email}
        required={true}
      />
      <PasswordInput
        htmlId="password"
        name="password"
        value={user.password}
        onChange={onChange}
        error={errors.password}
        required={true}
        quality={passwordQuality(user.password)}
        maxLength={50}
        showVisibilityToggle={true}
      />
      <input type="submit" value="Register" />
    </form>
  );
};

RegistrationForm.propTypes = {
  minPasswordLength: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  confirmationMessage: PropTypes.string
};

RegistrationForm.defaultProps = {
  confirmationMessage: "Thanks for registering !",
  minPasswordLength: 8
};

export default RegistrationForm;

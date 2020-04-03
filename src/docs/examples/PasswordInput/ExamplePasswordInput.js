import React, { useState } from "react";
import PasswordInput from "ps-react/PasswordInput";

/** Password input example */
export default () => {
  const [password, setPassword] = useState("");

  const onchange = e => {
    setPassword(e.target.value);
  };

  const getQuality = () => {
    const length = password.length;
    return length > 10 ? 100 : password.length * 10;
  }

  return (
    <PasswordInput
      htmlId="password"
      name="password"
      placeholder="Enter pass here"
      onChange={onchange}
      value={password}
      showVisibilityToggle={true}
      quality={getQuality()}
    />
  );
};

import React from "react";
import RegistrationForm from "ps-react/RegistrationForm";

const ExampleRegistrationForm = () => {
  return (
    <RegistrationForm
      onSubmit={user => {
        console.dir(user);
      }}
    />
  );
};

export default ExampleRegistrationForm;

import React from "react";
import TextInput from "ps-react/TextInput";

/** Required textbox */
export default function ExampleRequired() {
  return (
    <TextInput
      htmlId="example-required"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      required={true}
    />
  );
}

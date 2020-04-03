import React from "react";
import TextInput from "ps-react/TextInput";

/** Optional textbox */
export default function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
    />
  );
}

// @flow
import React, { useState } from "react";

type InputEvent = SyntheticInputEvent<HTMLInputElement>;

const useInputField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (event: InputEvent) => {
    setValue(event.target.value);
  };

  return [value, handleValueChange];
};

export default useInputField;

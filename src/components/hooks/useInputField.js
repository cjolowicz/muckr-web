// @flow
import { useState } from "react";

type InputEvent = SyntheticInputEvent<HTMLInputElement>;

const useInputField = (initialValue: string = "") => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (event: InputEvent) => {
    setValue(event.target.value);
  };

  return [value, handleValueChange];
};

export default useInputField;

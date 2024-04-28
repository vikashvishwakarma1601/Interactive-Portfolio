import React from "react";
import { BasicInput } from "./style";

interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: (() => void) | null;
  onBlur?: (() => void) | null;
}

const Input = ({
  type = "text",
  placeholder = "",
  onChange = null,
  onBlur = null,
}: InputProps) => {
  return (
    <BasicInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;

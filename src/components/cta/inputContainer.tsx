import React, { useEffect, useRef, useState } from "react";
import { InputContainerStyles } from "./cta.styles";

const InputContainer = ({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type?: string;
}) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  function handleFocus() {
    setIsActive(true);
  }
  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (!e.target.value) setIsActive(false);
  }

  return (
    <InputContainerStyles className={isActive ? "active" : undefined}>
      <label htmlFor={name}>{label}</label>
      {label !== "message" && (
        <input
          name={name}
          id={name}
          type={type}
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />
      )}
      {label === "message" && (
        <textarea
          name={name}
          id={name}
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={textareaRef}
        />
      )}
    </InputContainerStyles>
  );
};

export default InputContainer;

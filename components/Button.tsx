import React from "react";
import { Index, JSXIndex, buttonProps } from "./types";
import { Typography } from "./Typography";
import { BsCart, BsCartDash, BsCartPlus } from "react-icons/bs";

export const TypeOfButtons: Index[] = [
  { text: "Subscribe", isDisabled: true, isActive: false, button: "pri" },
  { text: "Subscribe", isDisabled: false, isActive: true, button: "pri" },
  { text: "Subscribe", isDisabled: false, isActive: false, button: "pri" },
  {
    isDisabled: false,
    isActive: false,
    button: "pri",
  },
  {
    isDisabled: false,
    isActive: true,
    button: "pri",
  },
  {
    isDisabled: true,
    isActive: true,
    button: "pri",
  },
];

export const Button = ({
  children,
  button,
  text,
  isDisabled,
  isActive,
}: Partial<buttonProps>) => {
  const primaryClass = `${text ? "btn-size-full" : "btn-size-fit"} ${
    isDisabled
      ? "btn-primary-disabled"
      : isActive
      ? "btn-primary-active"
      : "btn-primary active:btn-primary-active"
  }`;

  const buttonElement: JSXIndex = {
    pri: (
      <button className={primaryClass}>
        {text ? (
          <Typography text={text} type={"p1"} />
        ) : isDisabled ? (
          <BsCart />
        ) : isActive ? (
          <BsCartDash />
        ) : (
          <BsCartPlus />
        )}
      </button>
    ),
    sec: <button className={primaryClass}>{children}</button>,
  };

  return buttonElement[button as string];
};

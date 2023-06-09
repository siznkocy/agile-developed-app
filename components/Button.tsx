import React from "react";
import { Index, JSXIndex, buttonProps } from "./types";
import { Typography } from "./Typography";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsCart,
  BsCartDash,
  BsCartPlus,
  BsDashLg,
  BsPlus,
  BsPlusLg,
  BsTrash3,
} from "react-icons/bs";
import { IconType } from "react-icons/lib";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

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
  {
    text: "S",
    isDisabled: false,
    isActive: false,
    button: "sec1",
  },
  {
    text: "M",
    isDisabled: false,
    isActive: true,
    button: "sec1",
  },
  {
    text: "L",
    isDisabled: true,
    isActive: true,
    button: "sec1",
  },
  {
    text: "Grab it now",
    icon: <BsArrowRightShort />,
    isDisabled: false,
    isActive: false,
    button: "sec2",
  },
  {
    text: "Grab it now",
    icon: <BsArrowRightShort />,
    isDisabled: false,
    isActive: true,
    button: "sec2",
  },
  {
    text: "Grab it now",
    icon: <BsArrowRightShort />,
    isDisabled: true,
    isActive: true,
    button: "sec2",
  },
  {
    text: "Remove",
    icon: <BsTrash3 />,
    isDisabled: false,
    isActive: true,
    button: "plain",
  },
  {
    icon: <BsPlusLg />,
    isDisabled: false,
    isActive: true,
    button: "plain",
  },
  {
    icon: <BsDashLg />,
    isDisabled: true,
    isActive: true,
    button: "plain",
  },
];

/**
 *  @type { type of button:  }
 *  @param text - string: button label
 *  @param isDisabled - boolean: disabling the button
 *  @param isActive - boolean: ??
 *  @param button - {pri, sec1, sec2, plain}
 *  @param icon - {children}
 *  @returns button
 */

export const Button = ({
  children,
  icon,
  button,
  text,
  isDisabled = false,
  isActive,
  onClick,
}: Partial<buttonProps>) => {
  const primaryClass = `${text ? "btn-size-full" : "btn-size-fit"} ${
    isDisabled
      ? "btn-primary-disabled"
      : isActive
      ? "btn-primary-active"
      : "btn-primary hover:btn-primary-active"
  }`;

  const secondaryClass1 = `
    ${
      isDisabled
        ? "btn-secondary-disabled"
        : isActive
        ? "btn-secondary-active-1"
        : "btn-secondary hover:btn-secondary-active-1"
    }`;

  const secondaryClass2 = `btn-size-full
    ${
      isDisabled
        ? "btn-secondary-disabled"
        : isActive
        ? "btn-secondary-active-2"
        : "btn-secondary hover:btn-secondary-active-2"
    }`;

  const plain = `${isDisabled ? "" : ""}`;

  const buttonElement: JSXIndex = {
    pri: (
      <button onClick={onClick} disabled={isDisabled} className={primaryClass}>
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
    sec1: (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={secondaryClass1}
      >
        <Typography text={text} type={"p2"} />
      </button>
    ),
    sec2: (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={secondaryClass2}
      >
        <Typography text={text} type={"p1"} />
        <span className={`text-xl`}>{children}</span>
      </button>
    ),
    plain: (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`p-1 flex gap-1 items-center`}
      >
        <span className={`${text ? "text-xs" : ""}`}>{children}</span>
        {text ? <Typography text={text} type={"p3"} /> : null}
      </button>
    ),
  };

  return buttonElement[button as string];
};

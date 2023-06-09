import React from "react";
import { JSXIndex, stringIndex } from "./types";
import { arimo } from "@/app/fonts";

export const TypeofTypography: stringIndex[] = [
  {
    text: "H.1 72pt",
    type: "h1",
  },
  {
    text: "H.2 32pt",
    type: "h2",
  },
  {
    text: "H.3 22pt",
    type: "h3",
  },
  {
    text: "H.4 14pt",
    type: "h4",
  },
  {
    text: "p.1 14pt",
    type: "p1",
  },
  {
    text: "p.2 14pt",
    type: "p2",
  },
  {
    text: "p.3 12pt",
    type: "p3",
  },
  {
    text: "p.4 12pt",
    type: "p4",
  },
];

export const Typography = ({ text, type = "p1" }: Partial<stringIndex>) => {
  const TypographyElement: JSXIndex = {
    h1: <h1 className={`${arimo} text-7xl font-bold`}>{text}</h1>,
    h2: <h2 className={`${arimo} text-3xl font-semibold`}>{text}</h2>,
    h3: <h3 className={`${arimo} text-xl font-medium`}>{text}</h3>,
    h4: <h4 className={`${arimo} text-sm font-semibold`}>{text}</h4>,
    p1: <p className={`${arimo} text-sm font-medium`}>{text}</p>,
    p2: (
      <p className={`${arimo} text-sm font-normal text-secondary-500`}>
        {text}
      </p>
    ),
    p3: <p className={`${arimo} text-xs font-semibold`}>{text}</p>,
    p4: (
      <p className={`${arimo} text-xs font-semibold text-secondary-500`}>
        {text}
      </p>
    ),
  };

  return TypographyElement[type as string];
};

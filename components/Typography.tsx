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
    text: "H.4 16pt",
    type: "h4",
  },
  {
    text: "p.1 12pt",
    type: "p1",
  },
  {
    text: "p.2 12pt",
    type: "p2",
  },
];

export const Typography = ({ text, type = "p1" }: Partial<stringIndex>) => {
  const TypographyElement: JSXIndex = {
    h1: <h1 className={`${arimo} text-7xl font-bold`}>{text}</h1>,
    h2: <h2 className={`${arimo} text-3xl font-semibold`}>{text}</h2>,
    h3: <h3 className={`${arimo} text-xl font-medium`}>{text}</h3>,
    h4: <h4 className={`${arimo} text-lg font-medium`}>{text}</h4>,
    p1: <p className={`${arimo} text-sm font-medium`}>{text}</p>,
    p2: <p className={`${arimo} text-sm`}>{text}</p>,
  };

  return TypographyElement[type as string];
};

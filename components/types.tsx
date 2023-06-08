import { IconType } from "react-icons/lib";

export interface JSXIndex {
  [type: string]: JSX.Element;
}

export interface stringIndex {
  [type: string]: string | number;
}

export interface Index {
  [type: string]: string | boolean | JSX.Element;
}

// button type

export interface buttonProps {
  children: React.ReactNode;
  button: string;
  icon: boolean;
  isDisabled: boolean;
  isActive: boolean;
  text: string;
  icons: IconType;
}

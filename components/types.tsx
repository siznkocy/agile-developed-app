import { IconBaseProps, IconType } from "react-icons/lib";

export interface JSXIndex {
  [type: string]: JSX.Element;
}

export interface stringIndex {
  [type: string]: string | number;
}

export interface Index {
  [type: string]: string | boolean | number | JSX.Element | IconType;
}

// button type

export interface buttonProps {
  children: React.ReactNode;
  button: string;
  isDisabled: boolean;
  isActive: boolean;
  text: string | number;
  icon: IconType;
  onClick: () => void;
}

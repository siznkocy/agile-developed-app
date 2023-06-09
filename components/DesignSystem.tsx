"use client";

import React from "react";
import { Button, TypeOfButtons } from "./Button";
import { TypeofTypography, Typography } from "./Typography";
import { raleway } from "@/app/fonts";

const Click = () => {
  return console.log("clicked");
};

export const DesignSystem = () => {
  return (
    <div className="space-y-2">
      <h1 className={`${raleway} font-bold pb-5`}>Typography</h1>
      {TypeofTypography.map((data, i) => (
        <Typography key={i} text={data.text} type={data.type} />
      ))}
      <h1 className={`${raleway} font-bold`}>Primary button</h1>
      {TypeOfButtons.map((data, i) => (
        <Button
          key={i}
          text={data.text as string}
          button={data.button as string}
          isDisabled={data.isDisabled as boolean}
          isActive={data.isActive as boolean}
          onClick={Click}
        >
          {data.icon as React.ReactNode}
        </Button>
      ))}
    </div>
  );
};

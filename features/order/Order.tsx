import React from "react";
import { LineSectionTemplate } from "../Templates/LineSectionTemplate";

// share component with transition

export const Order = () => {
  return (
    <LineSectionTemplate>
      <div>
        <img src="pic" alt="pic" />
        <div>product name</div>
        <div>product color</div>
        <div>qty</div>
      </div>
    </LineSectionTemplate>
  );
};

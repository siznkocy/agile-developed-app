import { Typography } from "@/components/Typography";
import React from "react";
import { LineSectionTemplate } from "../Templates/LineSectionTemplate";

// ! temporally data

export const Transaction = () => {
  const data: { title: string; type: string }[] = [
    {
      title: "Transaction",
      type: "primary_l",
    },
    {
      title: "Transaction",
      type: "primary_l",
    },
    {
      title: "Transaction",
      type: "primary_l",
    },
  ];

  return (
    <section className="w-full">
      <article className="border-2 rounded-md border-slate-100 m-2 p-5 divide-y-2 divide-slate-100 w-full max-w-lg mx-auto my-auto">
        <p className="text-lg ">transaction</p>

        <LineSectionTemplate>
          <Typography text={"Transaction"} type={"primary_m"} />
        </LineSectionTemplate>
      </article>
    </section>
  );
};

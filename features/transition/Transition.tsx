import { Typography } from "@/components/Typography";
import React from "react";
import { OrderStatus } from "./OrderStatus";

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

  const successful = true;

  return (
    <article className="rounded-md p-5 border max-w-3xl mx-auto">
      <OrderStatus />
    </article>
  );
};

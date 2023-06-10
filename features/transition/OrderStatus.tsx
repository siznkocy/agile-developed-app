import { Typography } from "@/components/Typography";
import React from "react";
import { RxCheckCircled, RxCrossCircled } from "react-icons/rx";

interface StatusProps {
  orderMail: string;
  orderIsMade: boolean;
}

export const OrderStatus = ({
  orderMail = "siznkocie@gmail.com",
  orderIsMade = true,
}: Partial<StatusProps>) => {
  return (
    <article>
      {orderIsMade ? (
        <div className=" mx-auto">
          <RxCheckCircled className="text-tertiary-100 text-5xl" />
          npm
          <Typography text={`Thank you for your `} />
          <Typography
            text={`The order confirmation has been sent to ${orderMail}`}
          />
          <p>Order details</p>
        </div>
      ) : (
        <div>
          <RxCrossCircled className="text-accent-200" />
        </div>
      )}
    </article>
  );
};

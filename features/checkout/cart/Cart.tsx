import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import Image from "next/image";
import React from "react";
import { BsDash, BsDashLg, BsPlus, BsTrash3 } from "react-icons/bs";

interface CartProps {}

interface product {
  name: string;
  desc: string;
  category: string[];
  size: string[] | number[];
  productImg: string[];
}

interface CartTableProps {
  product: string | product;
  quantity: string | number;
  price: string | number;
}

const ObjectCart = {};

function QuantityButton({}) {
  return (
    <div className="flex gap-2 flex-col items-center">
      <div className="flex border-1 rounded-md justify-between items-center w-full min-w-[4rem] max-w-[6rem]">
        <Button button="plain">
          <BsDash />
        </Button>
        <Typography text={JSON.stringify(1)} type={"p3"} />
        <Button button="plain">
          <BsPlus className="text-lg" />
        </Button>
      </div>
      <Button text="Remove" button="plain">
        <BsTrash3 />
      </Button>
    </div>
  );
}

function CartTable({ product, quantity, price }: CartTableProps) {
  /**
   * todo: product have a check input
   */

  return (
    <article className="w-full flex py-4 justify-between">
      <input type="checkbox" />
      <div className="w-6/12 overflow-clip">
        {typeof product === "string" ? (
          <Typography text={product} type={"p4"} />
        ) : (
          <div className="flex flex-col sm:flex-row gap-2 w-full h-[5rem]">
            <img
              alt={product.productImg[0]}
              src={product.productImg[0]}
              className="h-full object-cover aspect-square rounded-md overflow-clip"
            />
            <div className="relative flex flex-col space-y-1 h-full w-full">
              <span className="whitespace-nowrap text-primary-100">
                <Typography text={product.name} type={"h4"} />
              </span>
              <div className="flex gap-2 ">
                <p className="whitespace-nowrap text-secondary-500">
                  {product.size[0]}
                  <span className="text-secondary-400">{" | "}</span>
                  {product.desc}
                </p>
              </div>
              <div className=" h-full absolute top-0 w-10 right-0 bg-gradient-to-r from-transparent to-white"></div>
            </div>
          </div>
        )}
      </div>
      <div className="w-3/12 text-center ">
        {typeof quantity === "string" ? (
          <Typography text={quantity} type={"p4"} />
        ) : (
          <QuantityButton />
        )}
      </div>
      <div className="w-2/12 text-right">
        {typeof price === "string" ? (
          <Typography text={price} type={"p4"} />
        ) : (
          <Typography text={`$${price}`} type={"h4"} />
        )}
      </div>
    </article>
  );
}

export const Cart = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-5 ">
      <article className="lg:w-4/6 w-full">
        <div className="flex w-full justify-between">
          <Typography text={"Cart"} type="h2" />
          <Button text="Remove" button="plain">
            <BsTrash3 />
          </Button>
        </div>
        <div className="divide-y-1">
          {[
            { product: "PRODUCT", quantity: "QUANTITY", price: "PRICE" },
            {
              product: {
                name: "Relaxed fit printed hoodie",
                desc: "cream/orchids",
                category: ["men", "tops", "Hoodies & Sweet"],
                size: ["S", "M", "L"],
                productImg: [
                  "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3227334/original.jpg",
                  "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3227336/original.jpg",
                ],
              },
              quantity: 1,
              price: 200.0,
            },
            {
              product: {
                name: "Relaxed fit printed hoodie",
                desc: "cream/orchids",
                category: ["men", "tops", "Hoodies & Sweet"],
                size: ["S", "M", "L"],
                productImg: [
                  "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3227334/original.jpg",
                  "https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/3227336/original.jpg",
                ],
              },
              quantity: 1,
              price: 20000.0,
            },
          ].map((data, i) => (
            <>
              <CartTable
                key={i}
                product={data.product}
                quantity={data.quantity}
                price={data.price}
              />
            </>
          ))}
        </div>
      </article>
      <article className="border-1 border-secondary-400 p-5 lg:w-5/12 w-full rounded-md h-fit">
        <Button text={"checkout now"} button="pri" />
      </article>
    </section>
  );
};

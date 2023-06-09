import React from "react";
import { Typography } from "../Typography";
import Link from "next/link";
import { RiVisaLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { Logo } from "../Logo";
import Image from "next/image";
import { company, payment, shop, support } from "./data";

// Link && non-Link

const Menu = (props: {
  label: string;
  href: string;
  children?: Array<any>;
}) => {
  const menu = (
    <ul className="mx-auto w-fit">
      <li
        className={`${
          props.href === "1" ? "pb-4" : "pt-2"
        } whitespace-nowrap  min-w-[30rem] md:min-w-full`}
      >
        {props.href === "1" ? (
          <Typography text={props.label} type={"p1"} />
        ) : (
          <Link href={props.href}>
            <Typography text={props.label} type={"p2"} />
          </Link>
        )}

        {props.children?.map((child) => (
          <Menu key={child.label} label={child.label} href={child.href} />
        ))}
      </li>
    </ul>
  );

  return menu;
};

export const Footer = () => {
  return (
    <footer className="bg-secondary-400 min-h-10 py-12 w-full">
      <section className="mx-auto space-y-8 lg:space-y-0 w-full max-w-5xl lg:text-left text-center justify-between flex lg:flex-row flex-col">
        <article className="w-fit mx-auto lg:ml-0 lg:mr-auto max-w-[20rem]">
          <Logo />
          <Typography
            text={
              "Specializes in providing hight-quality, stylish products for your wardrobe"
            }
            type={"p2"}
          />
        </article>
        <article className="flex gap-12 flex-col md:flex-row ">
          <Menu label={shop.label} href={shop.href}>
            {shop.children}
          </Menu>
          <Menu label={company.label} href={company.href}>
            {company.children}
          </Menu>
          <Menu label={support.label} href={support.href}>
            {support.children}
          </Menu>
        </article>
        <div className="lg:ml-auto lg:mr-0 mx-auto">
          <span className="whitespace-nowrap">
            <Typography text={"PAYMENT METHODS"} type={"p1"} />
          </span>
          <div className="flex gap-4 w-fit mx-auto">
            {payment.children.map((data, i) => (
              <Image key={i} alt={data.label} src={data.href} />
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

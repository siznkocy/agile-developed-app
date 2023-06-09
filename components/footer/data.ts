import mastercard from "@/public/mastercard.svg";
import visa from "@/public/visa.svg";
import paypal from "@/public/paypal.svg";

export const shop = {
  label: "SHOP",
  href: "1",
  children: [
    {
      label: "All Collections",
      href: "#",
    },
    {
      label: "Winter Edition",
      href: "#",
    },
    {
      label: "Discount",
      href: "#",
    },
  ],
};

export const company = {
  label: "COMPANY",
  href: "1",
  children: [
    {
      label: "About Us",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
    {
      label: "Affiliates",
      href: "#",
    },
  ],
};

export const support = {
  label: "SUPPORT",
  href: "1",
  children: [
    {
      label: "FAQs",
      href: "#",
    },
    {
      label: "Cookies Policy",
      href: "#",
    },
    {
      label: "Terms of Use",
      href: "#",
    },
  ],
};

export const payment = {
  children: [
    {
      href: mastercard,
      label: "mastercard",
    },
    {
      href: visa,
      label: "visa",
    },
    {
      href: paypal,
      label: "paypal",
    },
  ],
};

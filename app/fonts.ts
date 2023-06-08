import { Arimo, Raleway } from "next/font/google";

export const raleway = Raleway({
  weight: ["700"],
  style: ["normal"],
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const arimo = Arimo({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

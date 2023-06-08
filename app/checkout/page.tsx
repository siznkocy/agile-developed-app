import { Transaction } from "@/features/transition/Transition";
import React from "react";

// checkout components
/**
 * todo: 1
 *
 */

export default function page() {
  return (
    <div className="text-black">
      <section>cart page</section>
      <section>checkout page</section>
      <section>payment page</section>
      <section>transaction page</section>
      <Transaction />
    </div>
  );
}

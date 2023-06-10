import { DesignSystem } from "@/components/DesignSystem";
import { Cart } from "@/features/checkout/cart/Cart";
import { Transaction } from "@/features/transition/Transition";

export default function Home() {
  return (
    <main className="w-[80%] max-w-5xl justify-center mx-auto mb-auto">
      <Cart />
      {/* <Transaction /> */}

      {/* <DesignSystem /> */}
    </main>
  );
}

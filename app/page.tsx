import { BsCheckCircle } from "react-icons/bs";
import { JsxElement } from "typescript";

interface ChildrenProps {
  children: React.ReactNode;
  center?: boolean;
}

interface JSXIndex {
  [type: string]: JSX.Element;
}

const TransactionDetails = ({ children, center }: ChildrenProps) => {
  return (
    <div className={`py-2 space-y-2 ${center ? "text-center" : ""}`}>
      {children}
    </div>
  );
};

// typography
// todo:
const Typography = ({ text, type }: { text: string; type: string }) => {
  const TypographyElement: JSXIndex = {
    primary_xl: (
      <h1 className="text-[#2f363a] text-lg font-semibold capitalize">
        {text}
      </h1>
    ),
    primary_l: (
      <h1 className="text-[#2f363a] font-semibold text-l capitalize">{text}</h1>
    ),
    primary_m: (
      <h1 className="text-[#2f363a] capitalize font-medium text-sm">{text}</h1>
    ),
    gray_sm: <h1 className="text-gray-400 text-xs">{text}</h1>,
  };

  return TypographyElement[type as string];
};

export default function Home() {
  return (
    <main className="h-screen w-full grid place-content-center">
      <article className="border-2 rounded-md border-slate-100 p-5 divide-y-2 divide-slate-100 ">
        <TransactionDetails center={true}>
          <BsCheckCircle className="text-[#3db7a7] text-5xl mx-auto" />
          <Typography text={"Thanks for your order!"} type={"primary_xl"} />
          <Typography
            text={"The order confirmation has been sent to siznkocie@gmail.com"}
            type={"gray_sm"}
          />
        </TransactionDetails>
        <TransactionDetails>
          <Typography text={"Transaction date"} type={"primary_l"} />
          <Typography
            text={"Thursday, November 17, 2022 (GMT+7)"}
            type={"gray_sm"}
          />
        </TransactionDetails>
        <TransactionDetails>
          <Typography text={"Payment Method"} type={"primary_l"} />
          <Typography text={"Mastercard ending with 2564"} type={"gray_sm"} />
        </TransactionDetails>
        <TransactionDetails>
          <Typography text={"Shipping Method"} type={"primary_l"} />
          <Typography
            text={"Express delivery(1-3 business days)"}
            type={"gray_sm"}
          />
        </TransactionDetails>
        <TransactionDetails>
          <Typography text={"Payment Method"} type={"primary_l"} />
          <Typography text={"Mastercard ending with 2564"} type={"gray_sm"} />
        </TransactionDetails>
        <TransactionDetails>
          <Typography text={"subtotal"} type={"primary_m"} />
          <Typography text={"Applied discount code"} type={"gray_sm"} />
          <Typography text={"Discount"} type={"gray_sm"} />
          <Typography text={"Shipment cost"} type={"gray_sm"} />
          <Typography text={"Mastercard ending with 2564"} type={"gray_sm"} />
        </TransactionDetails>
        <TransactionDetails>
          <Typography text={"grand total"} type={"primary_m"} />
        </TransactionDetails>
        <button className="bg-[#1d242d] text-white w-full py-1 px-2 rounded-md">
          <Typography text={``} type={""} />
        </button>
      </article>
    </main>
  );
}

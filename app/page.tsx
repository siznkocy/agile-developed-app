import { TypeofTypography, Typography } from "@/components/Typography";
import { TypeOfButtons, Button } from "@/components/Button";
import { raleway } from "./fonts";
import { BsCart } from "react-icons/bs";

// * typography schema: { text: }

const template = {
  title: "Transaction Data",
  text: "Transaction Data",
};

export default function Home() {
  return (
    <main className="h-screen w-[80%] justify-center mx-auto">
      <h1 className={`${raleway} font-bold pb-5`}>Typography</h1>
      {TypeofTypography.map((data, i) => (
        <Typography key={i} text={data.text} type={data.type} />
      ))}

      <div className="space-y-2">
        <h1 className={`${raleway} font-bold`}>Primary button</h1>
        {TypeOfButtons.map((data, i) => (
          <Button
            key={i}
            text={data.text as string}
            button={data.button as string}
            isDisabled={data.isDisabled as boolean}
            isActive={data.isActive as boolean}
          >
            {data.icon}
          </Button>
        ))}
      </div>
    </main>
  );
}

import { Button, type ButtonProps } from "@nextui-org/button";
import { colors } from "../constants/theme";

type Button = ButtonProps & {
  text: string;
  buttonType?: "primary" | "secondary";
};

export default function CustomButton({
  text,
  onClick,
  isDisabled = false,
  isLoading = false,
  size = "md",
  buttonType = "primary",
  ...rest
}: Button) {
  const type = {
    primary: "bg-teal-700 text-white shadow-md",
    secondary: "bg-slate-600 text-white",
  };
  return (
    <>
      <Button
        onClick={onClick}
        isDisabled={isDisabled}
        isLoading={isLoading}
        className={type[buttonType]}
        size={size}
        radius="sm"
        {...rest}
      >
        {text}
      </Button>
    </>
  );
}

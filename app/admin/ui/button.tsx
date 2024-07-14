import { Button, type ButtonProps } from "@nextui-org/button";
import { colors } from "../constants/theme";

type Button = ButtonProps & {
  text: string;
};

export default function CustomButton({
  text,
  onClick,
  isDisabled = false,
  isLoading = false,
  size = "md",
  ...rest
}: Button) {
  return (
    <>
      <Button
        onClick={onClick}
        isDisabled={isDisabled}
        isLoading={isLoading}
        className={`bg-green-600 text-white`}
        size={size}
        radius="sm"
        {...rest}
      >
        {text}
      </Button>
    </>
  );
}

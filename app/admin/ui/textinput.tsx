import { Input, type InputProps } from "@nextui-org/input";

type Props = InputProps & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readonly?: boolean;
  errorMessage?: string;
  isInvalid?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function CustomInput({
  type,
  value,
  onChange,
  placeholder,
  readonly,
  errorMessage,
  isInvalid,
  size = "md",
  ...rest
}: Props) {
  const sizeStyles = {
    sm: "w-[60%]",
    md: "w-[80%]",
    lg: "w-[100%]",
  };
  return (
    <div className={`${sizeStyles[size]} h-[64px] mx-[8px] my-[4px] relative`}>
      <Input
        aria-label="input"
        variant="bordered"
        type={type}
        value={value}
        onChange={onChange}
        label={placeholder}
        color="primary"
        radius="sm"
        classNames={{
          input: "bg-[#fff] text-[#222]",
          inputWrapper: "border-[0.5px] border-[#ddd] bg-[#fff]",
          errorMessage: "text-[#f00] absolute bottom-[-10px]",
          label: "text-[#555]",
        }}
        required={true}
        readOnly={readonly}
        isInvalid={isInvalid}
        {...rest}
      />
      {isInvalid && errorMessage && (
        <small className="text-[10px] text-[#f00] absolute -bottom-[10px] left-2">
          {errorMessage}
        </small>
      )}
    </div>
  );
}

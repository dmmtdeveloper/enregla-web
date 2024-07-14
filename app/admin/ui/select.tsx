import { Select, SelectItem } from "@nextui-org/select";

type Props = {
  options: { key: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | string[];
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
};

export default function CustomSelect({
  onChange,
  options,
  value,
  placeholder,
  disabled = false,
  multiple = false,
  size = "md",
}: Props) {
  const sizeStyles = {
    xs: "w-[40%]",
    sm: "w-[60%]",
    md: "w-[80%]",
    lg: "w-[100%]",
  };
  return (
    <Select
      aria-label="select"
      variant="bordered"
      onChange={onChange}
      multiple={multiple}
      selectedKeys={value}
      label={placeholder}
      className={`${sizeStyles[size]} mx-[8px]`}
      isDisabled={disabled}
      radius="sm"
      color="primary"
      classNames={{ label: "text-[#555]", base: "mb-2" }}
    >
      {options.map((option) => (
        <SelectItem key={option.key} textValue={option.label}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}

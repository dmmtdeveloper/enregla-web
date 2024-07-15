import { DatePicker } from "@nextui-org/date-picker";
import { DateValue } from "@react-types/datepicker";

type DateRangeProps = {
  label: string;
  date: DateValue;
  onChange: (date: DateValue) => void;
};

export default function CustomDatePicker({
  label,
  date,
  onChange,
}: DateRangeProps) {
  return (
    <DatePicker
      aria-label="date"
      label={label}
      className="my-[4px] mx-[8px]"
      value={date}
      size="md"
      onChange={onChange}
      variant="bordered"
      visibleMonths={1}
      pageBehavior="single"
      radius="sm"
      color="success"
      classNames={{
        selectorButton: "text-green-600",
        calendar: "text-[#222]",
      }}
    />
  );
}

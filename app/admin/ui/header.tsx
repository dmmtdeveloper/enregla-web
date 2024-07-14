import CustomDatePicker from "./datepicker";
import { DateValue, parseDate } from "@internationalized/date";
import CustomInput from "./textinput";

type Header = {
  title: string;
};

export default function Header({ title }: Header) {
  return (
    <>
      <section className="w-full h-[80px] flex items-center justify-between">
        <h2 className="text-2xl w-[20%]">{title}</h2>
        <div className="w-[60%] h-full flex items-center justify-evenly">
          <CustomDatePicker
            label="Inicio"
            date={parseDate(new Date().toISOString().slice(0, 10))}
            onChange={() => {}}
          />
          <CustomDatePicker
            label="Fin"
            date={parseDate(new Date().toISOString().slice(0, 10))}
            onChange={() => {}}
          />
          <CustomInput value={""} onChange={() => {}} placeholder="Buscar..." />
        </div>
      </section>
    </>
  );
}

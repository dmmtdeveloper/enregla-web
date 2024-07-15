import CustomDatePicker from "./datepicker";
import { parseDate } from "@internationalized/date";
import CustomInput from "./textinput";

type Header = {
  title: string;
  searchedText: string;
  searchText: (text: string) => void;
  fromDate: string;
  toDate: string;
};

export default function Header({
  title,
  searchedText,
  searchText,
  fromDate,
  toDate,
}: Header) {
  return (
    <>
      <section className="w-full h-[80px] flex items-center justify-between">
        <h2 className="text-2xl w-[20%]">{title}</h2>
        <div className="w-[60%] h-full flex items-center justify-evenly">
          <CustomDatePicker
            label="Inicio"
            date={parseDate(fromDate)}
            onChange={() => {}}
          />
          <CustomDatePicker
            label="Fin"
            date={parseDate(toDate)}
            onChange={() => {}}
          />
          <CustomInput
            value={searchedText}
            onChange={(e) => searchText(e.target.value)}
            placeholder="Buscar..."
          />
        </div>
      </section>
    </>
  );
}

import CustomDatePicker from "./datepicker";
import { parseDate } from "@internationalized/date";
import CustomTextInput from "./textinput";
import useSessionStore from "../store/session";
import { UserIcon } from "@/assets/icons/user";

type Header = {
  title: string;
  searchedText: string;
  searchText: (text: string) => void;
  fromDate: string;
  toDate: string;
};

export default function Header({ title, searchedText, searchText, fromDate, toDate }: Header) {
  const { user } = useSessionStore();
  return (
    <>
      <section className="w-full h-[80px] flex items-center justify-between mb-[2%]">
        <h2 className="text-2xl w-[20%]">{title}</h2>
        <div className="w-[60%] h-full flex items-center justify-evenly">
          <CustomDatePicker label="Inicio" date={parseDate(fromDate)} onChange={() => {}} />
          <CustomDatePicker label="Fin" date={parseDate(toDate)} onChange={() => {}} />
          <CustomTextInput
            value={searchedText}
            type="text"
            onChange={(e) => searchText(e.target.value)}
            placeholder="Buscar..."
            size="lg"
          />
        </div>
        <div className="w-[14%] h-[74%] px-[8px] rounded-[8px] flex items-center justify-between bg-gradient-to-b from-slate-900 to-slate-700">
          <div>
            <h3 className="text-[18px]">{user.name}</h3>
            <p className="text-[12px]">{user.email}</p>
          </div>
          <div>
            <UserIcon color="#fff" w="32" h="32" />
          </div>
        </div>
      </section>
    </>
  );
}

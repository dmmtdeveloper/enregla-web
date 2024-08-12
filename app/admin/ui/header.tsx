import CustomDatePicker from "./datepicker";
import { parseDate } from "@internationalized/date";
import CustomTextInput from "./textinput";
import useSessionStore from "../store/session";
import { UserIcon } from "@/assets/icons/user";

type Header = {
  title: string;
  searchedText: string;
  searchText: (text: string) => void;
};

export default function Header({ title, searchedText, searchText }: Header) {
  const { user } = useSessionStore();
  return (
    <>
      <section className="w-full h-[10%] flex items-center justify-between mb-[1%]">
        <h2 className="text-2xl w-[20%]">{title}</h2>
        <div className="w-[70%] h-full flex items-center justify-end gap-[2rem]">
          <div className="w-[40%] h-full flex items-center justify-evenly">
            <CustomTextInput
              value={searchedText}
              type="text"
              onChange={(e) => searchText(e.target.value)}
              placeholder="Buscar..."
              size="lg"
            />
          </div>
          <div className="min-w-[30%] max-w-[50%] h-full px-[8px] rounded-[8px] flex items-center justify-between bg-gradient-to-b from-slate-900/50 to-slate-700/50 backdrop-blur-lg">
            <div>
              <h3 className="text-[18px]">{user.name}</h3>
              <p className="text-[12px]">{user.email}</p>
            </div>
            <div>
              <UserIcon color="#fff" w="32" h="32" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

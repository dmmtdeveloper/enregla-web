import UseDarkMode from "@/hooks/UseDarkMode";
import clsx from "clsx";

import { IoSunny } from "react-icons/io5";
import { FaMoon,  } from "react-icons/fa6";

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = UseDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <IoSunny
          size="24"
          className={clsx(
            "top-navigation-icon",

            /*----hover----*/
            "hover:text-gray-950",
            "hover:scale-[1.2]",

            /*----transition----*/
            "transition",
            "duration-300"

            /*----dark-mode----*/

          )}
        />
      ) : (
        <FaMoon
          size="24"
          className={clsx(
            "top-navigation-icon",

            /*----hover----*/
            "hover:text-gray-950",
            "hover:scale-[1.2]",

            /*----transition----*/
            "transition",
            "duration-300",

            /*----dark-mode----*/
            
          )}
        />
      )}
    </span>
  );
};

export default ThemeIcon;

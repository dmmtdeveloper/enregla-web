
import UseDarkMode from "@/hooks/UseDarkMode";

import {
    FaMoon,
    FaSun,
  } from 'react-icons/fa';


const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = UseDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };
  
  export default ThemeIcon;
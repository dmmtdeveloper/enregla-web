import { useState } from "react";

export const useHandleNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return { handleNav, menuOpen, setMenuOpen };
};

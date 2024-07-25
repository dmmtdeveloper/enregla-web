import clsx from 'clsx';
import React from 'react'
import { useHandleNav } from "@/hooks/useHandleNav";


interface divContainerProps {
    children:React.ReactNode;
}
export const MenuOpenDiv:React.FC<divContainerProps> = ({children}) => {
  const { handleNav, menuOpen } = useHandleNav();

  return (
    <div className={clsx("fixed z-[9999] top-0 w-[100%] h-screen dark:bg-opacity-95 p-8 ease-in-out duration-500", {
        "left-0 bg-[#ecf0f3] dark:bg-[#43435C]": menuOpen,
        "left-[-100%]": !menuOpen,
      })}>
{children}
    </div>
  )
}

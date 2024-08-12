import React from "react";

type ButtonProps = {
  styles: string;
 
};

const Button: React.FC<ButtonProps> = ({ styles}) => {
  return (
    <button
      type="button"
      className={` dark:text-black py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary outline-none ${styles} w-[200px] rounded-full`}
    >
      Contactanos
    </button>

    
  );
};

export default Button;

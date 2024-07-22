import * as React from "react";

type IconCardColorsProps={
  backgroundColor: string;
  strokeColor: string;
}

const IconCard: React.FC<IconCardColorsProps> = ({
  backgroundColor,
  strokeColor 
  
}) => {
  return (
    <svg
      width={49}
      height={49}
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <rect
        x={0.300293}
        y={0.0999756}
        width={48}
        height={48}
        rx={12}
        fill={backgroundColor}
      />
      <path
        d="M14.459 23.5l6.458 6.458 12.916-12.916"
        stroke={strokeColor}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconCard;

import * as React from "react";

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
  fillColor?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = ({
  fillColor = "#FF776F",
  ...props
}) => {
  return (
    <svg
      width={61}
      height={60}
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.5 5c13.807 0 25 11.192 25 25a25 25 0 01-49.987.81L5.5 30l.01-.7C5.88 15.818 16.925 5 30.5 5zm.025 32.5l-.317.017a2.5 2.5 0 000 4.965l.292.018.317-.017a2.5 2.5 0 000-4.965l-.292-.018zm-.025-20a2.5 2.5 0 00-2.483 2.207L28 20v10l.017.293a2.5 2.5 0 004.966 0L33 30V20l-.017-.293A2.5 2.5 0 0030.5 17.5z"
        fill={fillColor}
      />
    </svg>
  );
}

export default SvgComponent;

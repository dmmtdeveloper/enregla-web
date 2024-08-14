import React from "react";
import { ParagraphStyles } from "./ParagraphStyles";

type paragraphProps = {
  paragraph: string;
};

export const ParagraphSection: React.FC<paragraphProps> = ({ paragraph }) => {
  return <ParagraphStyles paragraph={paragraph} />;
};

import React from "react";
interface ArticleContainerProps {
  children: React.ReactNode;
}

export const ArticleContainer: React.FC<ArticleContainerProps> = ({ children }) => {
  return (
    <article className="flex flex-col gap-2 w-[300px]">
      {children}
    </article>
  );
};

export default ArticleContainer;

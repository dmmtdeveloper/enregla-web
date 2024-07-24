import React from "react";
interface ArticleContainerProps {
  children: React.ReactNode;
}

export const ArticleContainer: React.FC<ArticleContainerProps> = ({ children }) => {
  return (
    <article className="flex flex-col gap-2 p-8">
      {children}
    </article>
  );
};

export default ArticleContainer;

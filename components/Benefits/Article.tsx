import React from "react";
interface ArticleContainerProps {
  children: React.ReactNode;
}

export const ArticleContainer: React.FC<ArticleContainerProps> = ({ children }) => {
  return (
    <article className="flex flex-col gap-2 lg:justify-center lg:items-center lg:text-center md:items-center md:justify-center">
      {children}
    </article>
  );
};

export default ArticleContainer;

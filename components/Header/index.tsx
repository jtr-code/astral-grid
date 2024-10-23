import React from "react";

type HeaderProps = {
  title: string;
  isSmallText?: boolean;
};

const Header = ({ title, isSmallText = false }: HeaderProps) => {
  return (
    <article className="py-4">
      <h1
        className={`${isSmallText ? "text-4xl font-normal  tracking-tight" : "text-clamp tracking-tighter"} text-pretty leading-none`}
      >
        {title}
      </h1>
    </article>
  );
};

export default Header;

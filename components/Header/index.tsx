import React from "react";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <article className="px-4">
      <h1 className="text-clamp text-pretty text-center leading-none">
        {title}
      </h1>
    </article>
  );
};

export default Header;
8;

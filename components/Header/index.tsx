import React from "react";

type HeaderProps = {
  title?: string;
};

const Header = ({ title = "Astral Grid" }: HeaderProps) => {
  return (
    <article>
      <h1 className="text-clamp text-pretty text-center leading-none">
        {title}
      </h1>
    </article>
  );
};

export default Header;
8;

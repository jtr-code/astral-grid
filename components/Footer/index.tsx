import React from "react";
import Header from "../Header";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="flex min-h-[15rem] flex-col justify-between gap-4 border-b border-t border-[#4C4C4C] pt-4 md:min-h-[27.5rem] md:pt-8">
        <section className="flex items-center">
          <p className="max-w-[30ch] text-pretty font-modernistRegular text-2xl md:text-3xl xl:text-4xl">
            Keeping you tuned in to the latest trends
          </p>
        </section>

        <section className="mb-4 flex justify-center md:mb-8 md:justify-end">
          <Header title="Astral-Grid" />
        </section>
      </footer>

      <section className="flex flex-col items-center justify-between gap-4 border-b border-[#4C4C4C] py-8 md:flex-row md:items-start">
        <p className="font-modernistRegular">
          &copy; {new Date().getFullYear()} Astralgrid. All rights reserved.
        </p>
        <ul className="mt-4 flex items-center gap-4 font-modernistRegular">
          <li>
            <p>connect with us</p>
          </li>
          <li className="cursor-pointer">
            <Instagram />
          </li>
          <li className="cursor-pointer">
            <Linkedin />
          </li>
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Footer;

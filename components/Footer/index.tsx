import React from "react";
import Header from "../Header"
import { Instagram, Linkedin } from "lucide-react";


const Footer = () => {
    return (
        <React.Fragment>
            <footer className="py-8 flex flex-col gap-4 border-t border-b border-[#4C4C4C] ">
                <section>
                    <p className="font-modernistRegular text-2xl md:text-3xl xl:text-4xl text-balance">
                        Keeping you tuned in to the latest trends
                    </p>
                </section>

                <section className="flex sm:justify-end">
                    <Header title="Astral Grid" />
                </section>
            </footer>

            <section className="flex justify-between items-center flex-wrap gap-4 py-8 border-b border-[#4C4C4C]">
                <p className="font-modernistRegular">&copy; {new Date().getFullYear()} Astralgrid. All rights reserved.</p>
                <ul className="font-modernistRegular flex gap-4 items-center ">
                    <li><p>connect with us</p></li>
                    <li className="cursor-pointer "><Instagram /></li>
                    <li className="cursor-pointer "><Linkedin /></li>
                </ul>
            </section>
        </React.Fragment>
    )
}

export default Footer
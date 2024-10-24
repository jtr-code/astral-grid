import React from "react";
import Header from "../Header"
import { Instagram, Linkedin } from "lucide-react";


const Footer = () => {
    return (
        <React.Fragment>
            <footer className="flex flex-col justify-between gap-4 border-t border-b border-[#4C4C4C] sm:min-h-64 lg:min-h-96 pt-4">
                <section>
                    <p className="font-modernistRegular text-2xl md:text-3xl xl:text-4xl text-balance">
                        Keeping you tuned in to the latest trends
                    </p>
                </section>

                <section className="flex sm:justify-end">
                    <Header title="Astral-Grid" />
                </section>
            </footer>

            <section className="md:flex md:justify-between md:items-center gap-4 py-8 border-b border-[#4C4C4C]">
                <p className="font-modernistRegular">&copy; {new Date().getFullYear()} Astralgrid. All rights reserved.</p>
                <ul className="font-modernistRegular flex gap-4 items-center mt-4">
                    <li><p>connect with us</p></li>
                    <li className="cursor-pointer "><Instagram /></li>
                    <li className="cursor-pointer "><Linkedin /></li>
                </ul>
            </section>
        </React.Fragment>
    )
}

export default Footer
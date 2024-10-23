"use client"

import React, { useState } from 'react';
import Header from '@/components/Header';

interface buttonType {
    id: number;
    buttonName: string;
}
const filterButtons: buttonType[] = [
    {
        id: 1,
        buttonName: "Portfolio",
    },
    {
        id: 2,
        buttonName: "Brand",
    },
    {
        id: 3,
        buttonName: "Agency",
    },
];

const SiteLayout = () => {
    const [activeButton, setActiveButton] = useState<number>(1);
    const [siteHeader, setSiteHeader] = useState<string>("Portfolio")

    const handleOnClick = (button: buttonType) => {
        setActiveButton(button.id);
        setSiteHeader(button.buttonName);
    }

    return (
        <main className="pt-24 flex items-end justify-between flex-wrap">
            <section >
                <Header title={siteHeader} />
            </section>
            <section className="relative mb-4 rounded-full bg-[#272727]">
                <div className="flex relative z-10 ">
                    {filterButtons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => handleOnClick(button)}
                            className={`
                                relative px-4 py-2 md:px-6 md:py-2 rounded-full text-lg
                                font-modernistRegular transition-colors duration-200
                                ${activeButton === button.id ? 'text-black' : 'text-white hover:text-neutral-300'}
                            `}
                        >
                            {button.buttonName}
                        </button>
                    ))}
                </div>

                <div
                    className="absolute top-1 left-1 h-[calc(100%-8px)] rounded-full bg-green-bg transition-all duration-300 ease-out"
                    style={{
                        width: `${100 / filterButtons.length - 1}%`,
                        transform: `translateX(${(activeButton - 1) * 100}%)`,
                    }}
                />
            </section>
        </main>
    );
};

export default SiteLayout;
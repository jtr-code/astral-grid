"use client"

import React, { useState } from 'react';
import Header from "@/components/Header";

const filterButtons = [
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
    const [activeButton, setActiveButton] = useState(1);

    return (
        <main className="pt-24 flex items-center justify-between">
            <section>
                <Header title="PORTFOLIO" />
            </section>
            <section className="relative p-1 rounded-full bg-neutral-900">
                <div className="flex relative z-10">
                    {filterButtons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => setActiveButton(button.id)}
                            className={`
                                relative px-6 py-2 rounded-full text-lg
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
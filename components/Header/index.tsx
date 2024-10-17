import React from 'react';

type HeaderProps = {
    title?: string;
};

const Header = ({ title = "Astral Grid" }: HeaderProps) => {
    return (
        <article >
            <p className='text-8xl'>{title}</p>
        </article>
    );
};

export default Header;
8
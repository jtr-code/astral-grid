import React from 'react'

type TypographyProps = {
    description: string;
    isSmallText?: false;
}

const TypoGraphy = ({ description, isSmallText }: TypographyProps) => {
    return (
        <article className="font-modernistRegular py-4">
            <p className='text-gray font-normal text-base text-pretty'>{description}</p>
        </article>
    )
}

export default TypoGraphy
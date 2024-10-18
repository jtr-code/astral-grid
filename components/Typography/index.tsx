import React from 'react'

type TypographyProps = {
    description: string;
    isLargeText?: boolean;
}

const TypoGraphy = ({ description, isLargeText = false }: TypographyProps) => {
    return (
        <article className="font-modernistRegular py-4">
            <p className={`${isLargeText ? "text-2xl" : "text-base"} text-gray font-normal text-pretty`}>{description}</p>
        </article>
    )
}

export default TypoGraphy
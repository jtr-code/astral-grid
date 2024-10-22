import React from "react";

type TypographyProps = {
  description: string;
  isLargeText?: boolean;
};

const TypoGraphy = ({ description, isLargeText = false }: TypographyProps) => {
  return (
    <article className="py-4 font-modernistRegular">
      <p
        className={`${isLargeText ? "text-2xl" : "text-base"} text-pretty font-normal text-gray`}
      >
        {description}
      </p>
    </article>
  );
};

export default TypoGraphy;

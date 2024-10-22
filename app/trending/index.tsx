import Header from "@/components/Header";
import TypoGraphy from "@/components/Typography";
import Image from "next/image";

const TrendingPage = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Header title="TRENDING" isSmallText />
        <div className="relative aspect-[16/9] w-full">
          <Image
            src="/image1.jpg"
            fill
            objectFit="cover"
            sizes="100vw"
            alt="Picture of a boy"
            quality={100}
          />
        </div>
        <TypoGraphy
          description="Together, AstralGrid suggests a design or space"
          isLargeText
        />
      </div>
    </div>
  );
};

export default TrendingPage;

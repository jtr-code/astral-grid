import Header from "@/components/Header";
import TypoGraphy from "@/components/Typography";
import Image from "next/image";
import { MoveRight } from "lucide-react";

interface RecentSiteProps {
  id: number;
  image: string;
  title: string;
  description: string;
}
const RecentSites = () => {
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

  const recentSitesData: RecentSiteProps[] = [
    {
      id: 1,
      image: "/image1.jpg",
      title: "Space",
      description: "Together, AstralGrid suggests a design or space",
    },
    {
      id: 2,
      image: "/image2.jpg",
      title: "Ocean",
      description: "A deep dive into the beauty of marine life",
    },
    {
      id: 3,
      image: "/image3.jpg",
      title: "Forest",
      description: "Explore the tranquility of nature's green canopy",
    },
    {
      id: 4,
      image: "/image2.jpg",
      title: "Desert",
      description: "Experience the vastness and solitude of the sands",
    },
    {
      id: 5,
      image: "/image1.jpg",
      title: "Mountains",
      description: "Feel the majesty of towering peaks and valleys",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-end">
        <section className="flex min-w-[100%] justify-between rounded-full border-none bg-green-bg px-6 py-4 md:min-w-[35%]">
          {filterButtons?.map((button) => (
            <button
              key={button.id}
              className="font-modernistRegular text-lg hover:underline"
            >
              {button.buttonName}
            </button>
          ))}
        </section>
      </div>
      <Header title="Explore Our Sites" isSmallText />
      <RecentCards data={recentSitesData} />
    </>
  );
};

export default RecentSites;

interface RecentCardsProps {
  data: RecentSiteProps[];
}

const RecentCards: React.FC<RecentCardsProps> = ({ data }) => {
  return (
    <main className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {data.map(({ id, title, image, description }) => (
        <div key={id}>
          <div className="relative mb-4 aspect-[16/9] w-full">
            <Image
              src={image}
              fill
              objectFit="cover"
              sizes="100vw"
              alt="Picture of a boy"
              quality={100}
            />
          </div>
          <h4 className="font-modernistRegular text-base">{title}</h4>
          <section className="items-center justify-between sm:mr-6 sm:flex">
            <TypoGraphy description={description} />
            <MoveRight size={30} className="cursor-pointer" />
          </section>
        </div>
      ))}
    </main>
  );
};

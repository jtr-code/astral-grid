import Image from "next/image";
import backArrow from "../../public/backArrow.svg"

interface RecentSiteProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

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
  {
    id: 6,
    image: "/image3.jpg",
    title: "Forest",
    description: "Explore the tranquility of nature's green canopy",
  },
  {
    id: 7,
    image: "/image2.jpg",
    title: "Desert",
    description: "Experience the vastness and solitude of the sands",
  },
  {
    id: 8,
    image: "/image1.jpg",
    title: "Mountains",
    description: "Feel the majesty of towering peaks and valleys",
  },
  {
    id: 9,
    image: "/image2.jpg",
    title: "Mountains",
    description: "Feel the majesty of towering peaks and valleys",
  },
];

const RecentSites = () => {
  return (
    <>
      <div className="flex items-center justify-end"></div>
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
    <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-4">
      {data.map(({ id, title, image }) => (
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
          <div className="flex items-center gap-2">
            <h4 className="font-modernistRegular text-xl">{title}</h4>
            <span className="cursor-pointer">
              <Image
                src={backArrow}
                alt="back arrow"
                quality={100}
              />
            </span>
          </div>
        </div>
      ))}
    </main>
  );
};

import Header from "@/components/Header"
import TypoGraphy from "@/components/Typography";
import Image from "next/image";
import { MoveRight } from 'lucide-react';

interface RecentSiteProps {
    id: number;
    image: string;
    title: string;
    description: string;

}
const RecentSites = () => {

    const recentSitesData: RecentSiteProps[] = [
        {
            "id": 1,
            "image": "/image1.jpg",
            "title": "Space",
            "description": "Together, AstralGrid suggests a design or space"
        },
        {
            "id": 2,
            "image": "/image2.jpg",
            "title": "Ocean",
            "description": "A deep dive into the beauty of marine life"
        },
        {
            "id": 3,
            "image": "/image3.jpg",
            "title": "Forest",
            "description": "Explore the tranquility of nature's green canopy"
        },
        {
            "id": 4,
            "image": "/image2.jpg",
            "title": "Desert",
            "description": "Experience the vastness and solitude of the sands"
        },
        {
            "id": 5,
            "image": "/image1.jpg",
            "title": "Mountains",
            "description": "Feel the majesty of towering peaks and valleys"
        }
    ];

    return (
        <>
            <Header title="Recent Sites" isSmallText />
            <RecentCards data={recentSitesData} />
        </>
    )
}

export default RecentSites

interface RecentCardsProps {
    data: RecentSiteProps[];
}

const RecentCards: React.FC<RecentCardsProps> = ({ data }) => {

    return (
        <main className="grid gap-4 md:gap-6 grid:cols-1 md:grid-cols-2">
            {
                data.map(({ id, title, image, description }) => (
                    <div key={id}>
                        <div className='relative w-full aspect-[16/9] mb-4'>
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
                        <section className="flex items-center justify-between ">
                            <TypoGraphy description={description} />
                            <MoveRight size={30} />
                        </section>
                    </div>
                ))
            }
        </main>
    )
}
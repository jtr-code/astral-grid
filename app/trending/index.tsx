import Header from '@/components/Header'
import TypoGraphy from '@/components/Typography'
import Image from 'next/image'

const TrendingPage = () => {
    const filterButtons = [{
        id: 1,
        buttonName: "Portfolio"
    }, {
        id: 2,
        buttonName: "Brand"
    },
    {
        id: 3,
        buttonName: "Agency"
    }]

    return (
        <div className='flex flex-col'>
            <div className='flex justify-end items-center'>
                <section className='border-none bg-green-bg px-6 py-4 rounded-full flex justify-between min-w-[100%] md:min-w-[35%]'>
                    {filterButtons?.map((button) => (
                        <button key={button.id} className='font-modernistRegular text-lg hover:underline'>{button.buttonName}</button>
                    ))}
                </section>
            </div>
            <div>
                <Header title="TRENDING" isSmallText />
                <div className='relative w-full aspect-[16/9]'>
                    <Image
                        src="/image1.jpg"
                        fill
                        objectFit="cover"
                        sizes="100vw"
                        alt="Picture of a boy"
                        quality={100}
                    />
                </div>
                <TypoGraphy description='Together, AstralGrid suggests a design or space' isLargeText />
            </div>
        </div>
    )
}

export default TrendingPage
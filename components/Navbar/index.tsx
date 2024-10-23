import Header from '@/components/Header';

const Navbar = () => {
    return (
        <div className='flex items-center '>
            <section className='w-full'>
                <Header title="Astral Grid" isSmallText />
            </section>
            <section className='flex items-center gap-2 sm:gap-4 w-full justify-end'>
                {/* user signin section will add later */}
                <p className='font-modernistRegular'>sign in</p>
                <div className='rounded-full bg-pink-600 w-8 h-8 flex items-center justify-center text-white'>
                    r
                </div>
            </section>
        </div>
    )
}

export default Navbar
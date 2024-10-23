import Header from "@/components/Header";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <section className="w-full">
        <Header title="Astral Grid" isSmallText />
      </section>
      <section className="flex w-full items-center justify-end gap-2 sm:gap-4">
        {/* user signin section will add later */}
        <p className="font-modernistRegular">sign in</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-600 text-white">
          r
        </div>
      </section>
    </div>
  );
};

export default Navbar;

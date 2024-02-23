import { dancingScript } from "@/lib/utils/fonts";
import Image from "next/image";

const VendorsHero = () => {
  return (
    <header className="min-h-[30rem] relative overflow-hidden">
      <Image
        src={"/images/home/hero-2.jpg"}
        alt="hero"
        width={1240}
        height={800}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-black/70 text-white">
        <div className="w-full h-full flex items-center text-center container mt-6">
          <div className="max-w-2xl space-y-3 mx-auto">
            <h1 className={`${dancingScript.className} font-extrabold text-7xl`}>
              Find <span className="text-deepRed">Vendors</span>
            </h1>
            <p className="text-zinc-200/80 font-light">
              Find your favorite vendors with ease ipsum dolor sit amet consectetur adipisicing elit. Labore facere
              ipsam
            </p>
            <div>
              <input
                type="text"
                className="outline-none p-3 w-full text-center border duration-300 focus:border-white text-zinc-300 border-white/40 rounded-lg bg-black/40"
                placeholder="Search for a vendor"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default VendorsHero;

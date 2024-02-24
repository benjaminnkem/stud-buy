import { dancingScript } from "@/lib/utils/fonts";
import Image from "next/image";

const VendorsDetailsHero = () => {
  return (
    <>
      <header className="min-h-[18rem] relative z-0 rounded-b-xl">
        <div className="absolute top-0 left-0 w-full h-full rounded-b-xl">
          <Image
            src={"/images/vendors/kitchen.jpg"}
            alt="hero"
            width={1240}
            height={600}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute rounded-b-xl top-0 left-0 w-full h-full bg-gradient-to-t from-black to-black/70 text-white">
          <p
            className={`lg:text-8xl md:text-7xl duration-300 sm:text-6xl text-5xl text-white/30 font-extrabold absolute bottom-0 right-0 ${dancingScript.className}`}
          >
            Boripe Foods
          </p>

          <div className="container h-full relative">
            <div className="size-32 rounded-full ring z-10 bg-white ring-white absolute -bottom-16 left-[44.5%] overflow-hidden">
              <Image
                src={"/images/vendors/boripe.jpg"}
                alt="hero"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default VendorsDetailsHero;

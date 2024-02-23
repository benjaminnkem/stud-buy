import { dancingScript } from "@/lib/utils/fonts";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";

const HomeHero = () => {
  return (
    <header className="min-h-[38rem] relative overflow-hidden">
      <Image
        src={"/images/home/hero.jpg"}
        alt="hero"
        width={1240}
        height={800}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-black/70 text-white">
        <div className="w-full h-full flex items-center container mt-6">
          <div className="max-w-2xl space-y-4">
            <h1 className={`${dancingScript.className} font-extrabold text-7xl`}>Find Better Food Faster</h1>
            <p className="text-zinc-200/80 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere ipsam magni soluta rem maxime,
              alias nisi magnam fugiat, accusamus eveniet ipsa error. Accusamus, tenetur ab possimus ea recusandae
              aliquam
            </p>

            <button className="bg-deepRed px-6 py-2 rounded-full flex items-center gap-1">
              <span>Order Now</span>
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;

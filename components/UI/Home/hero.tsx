"use client";

import { dancingScript } from "@/lib/utils/fonts";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const HomeHero = () => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      timeline.from("#hero-img", { scale: 1.3 });
    },
    { scope: ref }
  );

  return (
    <header className="min-h-[38rem] relative overflow-hidden" ref={ref}>
      <Image
        src={"/images/home/hero.jpg"}
        alt="hero"
        width={1240}
        height={800}
        id="hero-img"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-black/70 text-white">
        <div className="w-full h-full flex items-center container mt-6">
          <div className="max-w-2xl space-y-4">
            <h1 className={`${dancingScript.className} font-extrabold md:text-7xl sm:text-6xl text-5xl`}>
              Find <span className="text-deepRed">Better</span> Food <span className="text-deepRed">Faster</span>
            </h1>
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

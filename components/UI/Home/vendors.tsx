"use client";

import useSlider from "@/lib/hooks/useSlider";
import { dancingScript } from "@/lib/utils/fonts";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const Vendors = () => {
  const { sliderRef, slideLeft, slideRight } = useSlider();

  return (
    <section className="container mt-[8rem] space-y-6">
      <h3 className={`text-deepRed ${dancingScript.className} font-extrabold text-center uppercase text-3xl`}>
        Popular Vendors
      </h3>
      <div
        className="flex items-center gap-10 scroll-smooth hide-scroll overflow-x-auto relative select-none"
        ref={sliderRef}
      >
        {Array.from({ length: 10 }).map((_, id) => (
          <div key={id} className="h-[25rem] border rounded-lg min-w-[20rem] relative overflow-hidden">
            <Image
              src={"/images/home/restaurant.jpg"}
              alt={""}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t text-white from-black flex items-end p-4">
              <div className="space-y-4">
                <p className="font-bold text-xl">Boripe Foods</p>
                <div className="space-y-2">
                  <p className="text-white/80 text-sm">
                    Boripe foods Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, id) => (
                      <Star key={id} size={16} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 font-bold text-deepRed">
                  <p>View Page</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-deepRed gap-6">
        <ChevronLeft className="cursor-pointer" size={30} onClick={slideLeft} />
        <ChevronRight className="cursor-pointer" size={30} onClick={slideRight} />
      </div>
    </section>
  );
};

export default Vendors;

"use client";
import { foods } from "@/lib/data/home";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { playfair } from "@/lib/utils/fonts";
import useSlider from "@/lib/hooks/useSlider";
import FullFoodCard from "@/components/Common/Cards/full-food";

const PopularMenu = () => {
  const { slideLeft, slideRight, sliderRef } = useSlider();

  return (
    <section className="container">
      <div className="flex items-center justify-between">
        <h3 className={`text-deepRed font-extrabold md:text-3xl text-2xl ${playfair.className}`}>Popular Dishes</h3>

        <div className="hidden items-center gap-4 sm:flex">
          <ArrowLeft size={28} className="cursor-pointer duration-200 hover:text-deepRed" onClick={slideLeft} />
          <ArrowRight size={28} className="cursor-pointer duration-200 hover:text-deepRed" onClick={slideRight} />
        </div>
      </div>
      <div className="mt-8 flex overflow-x-auto md:gap-9 gap-4 pb-16 px-10 -ml-6 scroll-smooth" ref={sliderRef}>
        {[...foods, ...foods].map((food, id) => (
          <FullFoodCard key={id} {...food} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;

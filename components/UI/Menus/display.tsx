import { dancingScript } from "@/lib/utils/fonts";
import Image from "next/image";
import { foods } from "@/lib/data/home";
import { ChevronRight, ShoppingCart } from "lucide-react";

const MenuDisplay = () => {
  return (
    <section className="container py-12">
      <h3
        className={`text-deepRed ${dancingScript.className} font-extrabold text-center uppercase md:text-3xl text-2xl`}
      >
        Popular on the Menu
      </h3>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 lg:gap-24 md:gap-12 sm:gap-12 gap-10 md:px-10">
        {[...foods, ...foods].map((food, id) => (
          <div key={id} className="rounded-lg hover:shadow-2xl shadow relative overflow-hidden duration-300">
            <div className="max-h-[15rem] overflow-hidden">
              <Image src={food.image} alt={food.name} width={500} height={500} className="w-full h-full object-cover" />
            </div>

            <div className="px-5 py-3 space-y-3">
              <p className="font-bold text-2xl">{food.name}</p>
              <p className="text-zinc-500 text-sm">{food.description}</p>

              <div className="flex items-center justify-between">
                <p className="text-xl">N8,999</p>

                <div
                  className="w-10 h-10 grid place-content-center bg-deepRed rounded-full text-white cursor-pointer"
                  title="Add to cart"
                >
                  <ShoppingCart size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <button className="flex items-center gap-1 border border-deepRed px-5 py-2 rounded-xl text-deepRed font-bold">
          <span>See More</span>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default MenuDisplay;

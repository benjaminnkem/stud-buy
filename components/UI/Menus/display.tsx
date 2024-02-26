import { dancingScript } from "@/lib/utils/fonts";
import Image from "next/image";
import { foods } from "@/lib/data/home";
import { ChevronRight, ShoppingCart } from "lucide-react";
import MiniMenu from "@/components/Common/Cards/mini-menu";

const MenuDisplay = () => {
  return (
    <section className="container py-12">
      <h3
        className={`text-deepRed ${dancingScript.className} font-extrabold text-center uppercase md:text-3xl text-2xl`}
      >
        Popular on the Menu
      </h3>
      <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 md:gap-8 gap-6">
        {[...foods, ...foods, ...foods].map((food, id) => (
          <MiniMenu {...food} key={id} />
        ))}
      </div>
    </section>
  );
};

export default MenuDisplay;

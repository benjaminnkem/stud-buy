"use client";
import { Food } from "@/lib/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

const FullFoodCard: React.FC<Food> = (food) => {
  const addToCart = () => toast.success(`${food.name} added to cart.`, { id: `${food.name}-cart` });

  return (
    <div className="rounded-2xl flex-shrink-0 select-none shadow-md border overflow-hidden max-w-[20rem] relative duration-300">
      <div className="max-h-[15rem] overflow-hidden">
        <Image src={food.image} alt={food.name} width={500} height={500} className="w-full h-full object-cover" />
      </div>

      <div className="px-5 py-3 space-y-3">
        <p className="font-medium text-2xl">{food.name}</p>
        <p className="text-zinc-600 text-sm">{food.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">N8,999</p>

          <div
            className="flex items-center gap-1 border border-deepRed rounded-full text-deepRed hover:text-white hover:bg-deepRed duration-300 px-3 py-2 text-sm cursor-pointer"
            onClick={addToCart}
          >
            <span>Add to cart</span>
            <ShoppingCart size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullFoodCard;

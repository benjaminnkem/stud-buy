import { Food } from "@/lib/types";
import { Star } from "lucide-react";
import Image from "next/image";

const MiniMenu: React.FC<Food> = (data) => {
  const { description, image, name, price, seller } = data;

  return (
    <div className="relative duration-300 flex hover:shadow-xl cursor-pointer">
      <div className="lg:w-2/5 w-[30%] overflow-hidden rounded-xl max-h-[10rem] flex-shrink-0">
        <Image src={image} alt={name} width={500} height={500} className="w-full h-full object-cover" />
      </div>

      <div className="px-5 py-3 space-y-1">
        <p className="font-bold text-xl">{name}</p>

        <p className="text-zinc-600 text-sm line-clamp-1">{description}</p>

        <div className="flex items-center text-xs gap-1">
          <p>4.5</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, id) => (
              <Star key={id} size={10} />
            ))}
          </div>
          <p>(4.8k reviews)</p>
        </div>

        <p className="text-lg font-bold pt-1">N8,999</p>
      </div>
    </div>
  );
};

export default MiniMenu;

import { Food } from "@/lib/types";
import { Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { fadeToTopVariant, opacityVariant } from "@/lib/utils/variants";
import { useState } from "react";
import { counterButton } from "@/lib/data/class-styles";
import { formatDefault, formatPrice } from "@/lib/helpers/numbers";
import { minus, plus } from "@/lib/helpers/math";
import toast from "react-hot-toast";

type Props = Food & { type?: "display" | "action" };

const MiniMenu: React.FC<Props> = (data) => {
  const { type } = data;

  return <>{type === "display" || !type ? <DisplayAction {...data} /> : <BuyAction {...data} />}</>;
};

const BuyAction: React.FC<Props> = (data) => {
  const { name, image, price, isAvailable } = data;

  const [count, setCount] = useState(0);

  const addToTray = () => {
    toast.success(`${count} ${count === 1 ? "quantity" : "quantities"} of ${name} added to tray`);
    setCount(0);
  };

  return (
    <>
      <motion.div
        variants={fadeToTopVariant}
        className="relative duration-300 select-none bg-white rounded-lg border border-zinc-100 flex justify-between hover:shadow-xl cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <div className="overflow-hidden max-w-[10rem] rounded-l-lg md:max-h-[9rem] max-h-[8rem] flex-shrink-0">
            <Image src={image} alt={name} width={500} height={500} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-2">
            <div>
              <p className="font-bold text-xl">{name}</p>
              <p className={`${isAvailable ? "text-green-500/80" : "text-red-500/80"} font-semibold text-sm`}>
                {isAvailable ? "Available" : "Unavailable"}
              </p>
            </div>

            <p className="text-lg font-medium pt-1">{formatPrice(price)}</p>
          </div>
        </div>

        <div className="flex items-center justify-center text-center">
          <div>
            <div className="flex items-center justify-center gap-1 px-8">
              <button
                className={`${counterButton} rounded-lg hover:bg-zinc-400`}
                disabled={!isAvailable}
                onClick={() => minus(setCount)}
              >
                <Minus size={16} />
              </button>
              <div className="w-8">
                <input
                  type="text"
                  className="bg-transparent w-full text-zinc-500 text-center p-1 rounded-lg outline-none duration-200 focus:ring"
                  defaultValue={0}
                  value={count}
                />
              </div>
              <button
                className={`${counterButton} rounded-lg  hover:bg-zinc-400`}
                disabled={!isAvailable}
                onClick={() => plus(setCount)}
              >
                <Plus size={16} />
              </button>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              {count !== 0 && (
                <motion.div {...opacityVariant} className="text-sm">
                  <p>
                    {count}x{price}={formatDefault(count * price)}
                  </p>
                  <button className="text-green-500 font-semibold" onClick={addToTray}>
                    Confirm
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const DisplayAction: React.FC<Props> = (data) => {
  const { description, image, name, type } = data;

  return (
    <>
      <motion.div
        variants={fadeToTopVariant}
        className="relative duration-300 bg-white rounded-lg border border-zinc-100 flex hover:shadow-xl cursor-pointer"
      >
        <div className="w-[30%] overflow-hidden rounded-l-lg md:max-h-[9rem] max-h-[8rem] flex-shrink-0">
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
      </motion.div>
    </>
  );
};

export default MiniMenu;

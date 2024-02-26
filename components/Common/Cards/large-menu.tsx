import { minus, plus } from "@/lib/helpers/math";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { fadeToTopVariant, opacityVariant } from "@/lib/utils/variants";

const cardClass = classNames([
  "sm:w-[18rem] w-[95%] mx-auto sm:mx-0 min-h-[20rem] duration-300 border",
  "rounded-lg p-2 hover:shadow-lg relative bg-white",
]);

const counterClass = classNames([
  "outline-none min-w-12 flex items-center border",
  "justify-center py-3 hover:shadow-lg duration-300",
]);

type Props = {
  updateGlobalCount: React.Dispatch<React.SetStateAction<number>>;
};

const MenuCard: React.FC<Props> = ({ updateGlobalCount }) => {
  const [count, setCount] = useState(0);

  return (
    <motion.div variants={fadeToTopVariant} className={cardClass}>
      {/* badge */}
      <AnimatePresence mode="wait" initial={false}>
        {count !== 0 && (
          <motion.p
            {...opacityVariant}
            className="absolute top-1 right-1 bg-deepRed rounded-lg text-xs text-white px-1"
          >
            selected
          </motion.p>
        )}
      </AnimatePresence>

      <div className="w-full overflow-hidden rounded-xl h-1/2">
        <Image
          src={"/images/home/egusi.jpg"}
          alt="hero"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center py-3 space-y-2">
        <p className="font-extrabold text-xl text-zinc-600">Egusi</p>
        <p className="text-zinc-500 text-sm">Get a portion of spaghetti for just ₦200</p>
        <p className="text-zinc-500 font-bold text-lg">₦200</p>

        <div className="flex items-center justify-center gap-1">
          <button
            className={`${counterClass} rounded-l-full hover:bg-deepRed/50`}
            onClick={() => (minus(setCount), minus(updateGlobalCount))}
          >
            <Minus size={16} />
          </button>
          <div className="w-8">
            <input
              type="text"
              className="bg-transparent w-full text-zinc-500 text-center p-1 rounded-lg outline-none duration-200 focus:ring"
              defaultValue={0}
              value={count ?? ""}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </div>
          <button
            className={`${counterClass} rounded-r-full hover:bg-freshGreen`}
            onClick={() => (plus(setCount), plus(updateGlobalCount))}
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;

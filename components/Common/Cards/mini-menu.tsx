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
import { useTray } from "@/lib/store/vendor.store";

type Props = Food & { type?: "display" | "action" };

const MiniMenu: React.FC<Props> = (data) => {
  const { type } = data;

  return <>{type === "display" || !type ? <DisplayAction {...data} /> : <BuyAction {...data} />}</>;
};

const BuyAction: React.FC<Props> = (data) => {
  const { name, image, price, isAvailable, id } = data;

  const [quantity, setQuantity] = useState(0);
  const { items, updateItems } = useTray();

  const addToTray = () => {
    const itemToAdd = {
      quantity,
      image,
      name,
      id,
      price,
    };

    const existCheck = () => (items?.find((el) => el.id === id) ? true : false);

    if (existCheck()) {
      const remainingItems = items?.filter((el) => el.id !== id);

      // remove duplicate and add the updated one
      updateItems(remainingItems ? [...remainingItems, itemToAdd] : [itemToAdd]);
      toast.success(`${quantity} ${quantity === 1 ? "quantity" : "quantities"} of ${name} updated in tray.`, {
        id: `${id}-update`,
      });

      setQuantity(0);
      return;
    }

    updateItems(items ? [...items, itemToAdd] : [itemToAdd]);

    toast.success(`${quantity} ${quantity === 1 ? "quantity" : "quantities"} of ${name} added to tray.`, {
      id: `${id}-added`,
    });
    setQuantity(0);
  };

  return (
    <>
      <motion.div
        variants={fadeToTopVariant}
        className="relative duration-300 select-none bg-white rounded-lg border border-zinc-100 xl:max-h-[8rem] flex justify-between hover:shadow-xl cursor-pointer overflow-hidden"
      >
        <div className="flex items-center md:gap-2 gap-8">
          <div className="overflow-hidden max-w-[10rem] h-full rounded-l-lg flex-shrink-0">
            <Image src={image} alt={name} width={500} height={500} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-2 py-4 md:py-0">
            <div>
              <p className="font-bold text-md">{name}</p>
              <p className={`${isAvailable ? "text-green-500/80" : "text-red-500/80"} font-semibold text-xs`}>
                {isAvailable ? "Available" : "Unavailable"}
              </p>
            </div>

            <p className="text-lg font-medium pt-1">{formatPrice(price)}</p>
            <CounterButtons
              addToTray={addToTray}
              isAvailable={isAvailable}
              price={price}
              quantity={quantity}
              setQuantity={setQuantity}
              screen="mobile"
            />
          </div>
        </div>

        <CounterButtons
          addToTray={addToTray}
          isAvailable={isAvailable}
          price={price}
          quantity={quantity}
          setQuantity={setQuantity}
          screen="desktop"
        />
      </motion.div>
    </>
  );
};

const CounterButtons: React.FC<{
  isAvailable: boolean;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
  addToTray: () => void;
  price: number;
  screen: "desktop" | "mobile";
}> = ({ isAvailable, addToTray, price, screen, quantity, setQuantity }) => {
  return (
    <div
      className={`${
        screen === "desktop" ? "xl:flex hidden justify-center" : "xl:hidden flex"
      } items-center text-center`}
    >
      <div>
        <div className={`flex items-center ${screen === "desktop" && "justify-center px-4"} gap-2`}>
          <button
            className={`${counterButton} hover:bg-zinc-400`}
            disabled={!isAvailable}
            onClick={() => minus(setQuantity)}
          >
            <Minus size={16} />
          </button>
          <p>{quantity}</p>
          <button
            className={`${counterButton}  hover:bg-zinc-400`}
            disabled={!isAvailable}
            onClick={() => plus(setQuantity)}
          >
            <Plus size={16} />
          </button>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {quantity !== 0 && (
            <motion.div {...opacityVariant} className="text-sm">
              <p>
                {quantity}x{price}={formatDefault(quantity * price)}
              </p>
              <button className="text-green-500 font-semibold" onClick={addToTray}>
                Confirm
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
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

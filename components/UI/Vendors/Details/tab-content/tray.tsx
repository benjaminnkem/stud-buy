import { formatDefault, formatPrice } from "@/lib/helpers/numbers";
import { useTray } from "@/lib/store/vendor.store";
import { fadeToTopVariant, opacityVariant } from "@/lib/utils/variants";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";
import Image from "next/image";

const Tray = () => {
  const { items, deleteItems } = useTray();

  return (
    <div className="w-full border p-2 rounded-lg max-h-[35rem] overflow-y-auto show_scroll">
      <p className="text-center font-bold text-xl">Tray 🍴</p>
      <AnimatePresence mode="wait" initial={false}>
        {items && items.length > 0 ? (
          <motion.div {...fadeToTopVariant} className="space-y-4 mt-6">
            {items.map((item) => (
              <motion.div {...opacityVariant} key={item.id} className="flex justify-between items-center group">
                <div className="flex gap-1 items-center">
                  <div className="size-16 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <div className="text-sm">
                      <p>Quantity: {item.quantity}</p>
                      <p>
                        Price: {item.quantity} x {formatDefault(item.price)} ={" "}
                        <span className="font-semibold">{formatPrice(item.quantity * item.price)}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div title={`Delete ${item.name}`}>
                  <Trash2
                    className="group-hover:opacity-100 cursor-pointer duration-200 opacity-0 text-red-500"
                    size={22}
                    onClick={() => deleteItems(item.id)}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p {...fadeToTopVariant} className="text-center py-4 text-zinc-500">
            No items added
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tray;

import { motion } from "framer-motion";
import { opacityVariant, parentVariant } from "@/lib/utils/variants";
import MiniMenu from "@/components/Common/Cards/mini-menu";
import { foods } from "@/lib/data/vendor";
import Tray from "./tray";

const Menu = () => {
  return (
    <motion.div {...opacityVariant} key={"menu"} className="flex gap-6">
      <motion.div
        animate="animate"
        initial="initial"
        variants={parentVariant}
        className="grid lg:grid-cols-2 gap-x-4 gap-y-4"
      >
        {/* {Array.from({ length: 16 }).map((_, id) => (
          <MenuCard key={id} updateGlobalCount={setGlobalCount} />
        ))} */}
        {foods.map((food, id) => (
          <MiniMenu {...food} key={id} type="action" />
        ))}
      </motion.div>

      <motion.div className="min-w-[21rem]">
        <Tray />
      </motion.div>
    </motion.div>
  );
};

export default Menu;

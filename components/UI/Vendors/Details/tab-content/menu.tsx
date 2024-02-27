import { motion } from "framer-motion";
import { opacityVariant, parentVariant } from "@/lib/utils/variants";
import { foods } from "@/lib/data/home";
import MiniMenu from "@/components/Common/Cards/mini-menu";

const Menu = () => {
  return (
    <motion.div {...opacityVariant} key={"menu"} className="flex gap-6">
      <motion.div
        animate="animate"
        initial="initial"
        variants={parentVariant}
        className="grid lg:grid-cols-2 gap-4 mx-auto"
      >
        {/* {Array.from({ length: 16 }).map((_, id) => (
          <MenuCard key={id} updateGlobalCount={setGlobalCount} />
        ))} */}
        {[...foods, ...foods, ...foods].map((food, id) => (
          <MiniMenu {...food} key={id} type="action" />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Menu;

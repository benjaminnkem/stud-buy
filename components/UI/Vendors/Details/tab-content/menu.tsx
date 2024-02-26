import MenuCard from "@/components/Common/Cards/large-menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { opacityVariant, parentVariant } from "@/lib/utils/variants";

const Menu = () => {
  const [globalCount, setGlobalCount] = useState(0);

  return (
    <motion.div {...opacityVariant} key={"menu"} className="flex gap-6">
      <motion.div
        animate="animate"
        initial="initial"
        variants={parentVariant}
        className="flex items-center gap-6 flex-wrap"
      >
        {Array.from({ length: 16 }).map((_, id) => (
          <MenuCard key={id} updateGlobalCount={setGlobalCount} />
        ))}
      </motion.div>

      {globalCount !== 0 && (
        <div className="flex-shrink-0 w-[10rem]">
          <p className="font-bold">Items</p>
        </div>
      )}
    </motion.div>
  );
};

export default Menu;

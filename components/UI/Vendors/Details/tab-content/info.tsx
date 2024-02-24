import { opacityVariant } from "@/lib/utils/variants";
import { motion } from "framer-motion";

const Info = () => {
  return <motion.div {...opacityVariant} key={"info"}></motion.div>;
};

export default Info;

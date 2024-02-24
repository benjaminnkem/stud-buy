import { opacityVariant } from "@/lib/utils/variants";
import { motion } from "framer-motion";

const Reviews = () => {
  return <motion.div {...opacityVariant} key={"reviews"}></motion.div>;
};

export default Reviews;

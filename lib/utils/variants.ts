import { Variants } from "framer-motion";

const parentVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  exit: { opacity: 0 },
};

const opacityVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

const fadeToTopVariant: Variants = {
  initial: { opacity: 0, y: "20%" },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: "20%" },
};

const fadeToBottomVariant: Variants = {
  initial: { opacity: 0, y: "-20%" },
  animate: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { opacity: 0, y: "-20%" },
};

export { opacityVariant, fadeToBottomVariant, fadeToTopVariant, parentVariant };

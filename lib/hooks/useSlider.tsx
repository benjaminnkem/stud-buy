import { useRef } from "react";

const useSlider = (slideAmount?: number) => {
  const ref = useRef<HTMLDivElement>(null);

  const slideLeft = () => ref.current && (ref.current.scrollLeft -= slideAmount ?? 500);

  const slideRight = () => ref.current && (ref.current.scrollLeft += slideAmount ?? 500);

  return { sliderRef: ref, slideLeft, slideRight };
};

export default useSlider;

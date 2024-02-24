import { dancingScript } from "@/lib/utils/fonts";

const Review = () => {
  return (
    <section className="container mt-[12rem]">
      <h3 className={`${dancingScript.className} font-extrabold text-center uppercase md:text-3xl text-2xl`}>
        What People <span className="text-deepRed">Say</span>
      </h3>
    </section>
  );
};

export default Review;

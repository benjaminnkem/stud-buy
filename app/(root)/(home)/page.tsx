import About from "@/components/UI/Home/about";
import HomeHero from "@/components/UI/Home/hero";
import PopularMenu from "@/components/UI/Home/popular-menu";
import Review from "@/components/UI/Home/review";
import Vendors from "@/components/UI/Home/vendors";

const Page = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(null), 5000));

  return (
    <>
      <HomeHero />

      <main className="py-20">
        <PopularMenu />
        <Vendors />
        <About />
        <Review />
      </main>
    </>
  );
};

export default Page;

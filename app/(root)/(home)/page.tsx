import HomeHero from "@/components/UI/Home/hero";
import { foods } from "@/lib/data/home";
import { dancingScript } from "@/lib/utils/fonts";
import { ChevronRight, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <HomeHero />

      <main className="py-20">
        <section className="container">
          <h3 className={`text-deepRed ${dancingScript.className} font-extrabold text-center uppercase text-3xl`}>
            Popular on the Menu
          </h3>
          <div className="mt-8 grid grid-cols-3 gap-24 px-10">
            {[...foods, ...foods].map((food, id) => (
              <div key={id} className="rounded-lg hover:shadow-2xl shadow relative overflow-hidden duration-300">
                <div className="max-h-[15rem] overflow-hidden">
                  <Image
                    src={food.image}
                    alt={food.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="px-5 py-3 space-y-3">
                  <p className="font-bold text-2xl">{food.name}</p>
                  <p className="text-zinc-500 text-sm">{food.description}</p>

                  <div className="flex items-center justify-between">
                    <p className="text-xl">N8,999</p>
                    {/* <button className="px-5 py-2 rounded-xl bg-deepRed text-white" title="Add to cart">
                      Add To Cart
                    </button> */}
                    <div
                      className="w-10 h-10 grid place-content-center bg-deepRed rounded-full text-white cursor-pointer"
                      title="Add to cart"
                    >
                      <ShoppingCart size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <button className="flex items-center gap-1 border border-deepRed px-5 py-2 rounded-xl text-deepRed font-bold">
              <span>See More</span>
              <ChevronRight />
            </button>
          </div>
        </section>

        <section className="container mt-[12rem]">
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className={`text-deepRed font-extrabold uppercase text-3xl ${dancingScript.className}`}>About Us</h3>
              <div className="space-y-4 text-zinc-500">
                <p>
                  StudBuds is here to revolutionize student food purchasing Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Ea laboriosam molestiae magnam ut, incidunt ipsa doloribus dolorum molestias.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum explicabo nemo maxime impedit
                  corporis quam aperiam sapiente! Blanditiis odit omnis reprehenderit molestias? Ducimus cum atque,
                  suscipit earum eos nisi vitae.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-[12rem]">
          <h3 className={`${dancingScript.className} font-extrabold text-center uppercase text-3xl`}>
            What People <span className="text-deepRed">Say</span>
          </h3>
        </section>
      </main>
    </>
  );
};

export default Page;

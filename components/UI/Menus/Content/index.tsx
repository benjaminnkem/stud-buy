"use client";

import { dancingScript } from "@/lib/utils/fonts";
import Image from "next/image";
import { foods } from "@/lib/data/home";
import MiniMenu from "@/components/Common/Cards/mini-menu";
import { useState } from "react";
import toast from "react-hot-toast";
import { menuCats } from "@/lib/data/vendor";

const MenuDisplay = () => {
  const [menuCategory, setMenuCategory] = useState("rice");
  const [categories, setCategories] = useState(menuCats);

  const [filterInput, setFilterInput] = useState("");

  const filterCategories = (value: string) => {
    setFilterInput(value);

    if (!value) {
      setCategories(menuCats);
      return;
    }

    const filtered = menuCats.filter((el) => el.toLocaleLowerCase().trim().startsWith(value));

    if (!filtered || filtered.length === 0) {
      console.log("couldn't be found");
      toast.error("category not found", { id: "not-found" });
      setCategories(menuCats);
      return;
    }

    toast.dismiss("not-found");
    setCategories(filtered);
  };

  return (
    <section className="container py-12">
      <h3
        className={`text-deepRed ${dancingScript.className} font-extrabold text-center uppercase md:text-3xl text-2xl`}
      >
        Popular on the Menu
      </h3>

      <div className="flex mt-8 gap-4">
        <div className="space-y-2 pr-2">
          <input
            type="text"
            placeholder="Type to filter..."
            className="w-full p-2 bg-transparent rounded-lg duration-200 ring-zinc-300 ring-[1px] focus:ring-[2px]"
            value={filterInput}
            onChange={(e) => filterCategories(e.target.value)}
          />

          <div className="overflow-y-auto space-y-1 show_scroll pr-1 md:min-w-[15rem]">
            {categories.map((item, id) => (
              <div
                key={id}
                className={`max-h-[5rem] overflow-hidden border-[3px] rounded-xl relative cursor-pointer duration-200 ${
                  item === menuCategory ? "border-deepRed/50" : "border-transparent"
                }`}
                onClick={() => setMenuCategory(item)}
              >
                <Image
                  src={"/images/home/jollof-rice-min.jpg"}
                  alt={""}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center font-bold text-white">
                  <p className="text-xl capitalize">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[...foods, ...foods, ...foods].map((food, id) => (
            <MiniMenu {...food} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuDisplay;

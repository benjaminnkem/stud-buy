"use client";
import { locations } from "@/lib/data";
import { Location } from "@/lib/types";
import { Check, ExternalLink, Star, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Filter = () => {
  const [location, setLocation] = useState<Location>("funaab");

  const changeLocation = (location: Location) => setLocation(location);

  return (
    <>
      <p className="font-bold text-2xl uppercase">Apply Filters</p>

      <div className="space-y-3">
        <p className="font-bold flex items-center gap-1 text-deepRed">
          <span>Location</span>
          <Map size={18} />
        </p>
        <div className="space-y-2">
          {locations.map((local, id) => (
            <div
              key={id}
              className={`w-full p-2 rounded-lg flex items-center cursor-pointer duration-300 font-semibold hover:bg-zinc-200 gap-3 ${
                local.location === location ? "bg-zinc-100" : "bg-zinc-50"
              }`}
              onClick={() => changeLocation(local.location)}
            >
              <Check className={`${local.location === location ? "opacity-100" : "opacity-0"} duration-300`} />
              <span className="duration-300">{local.abbr}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const VendorDisplay = () => {
  return (
    <section className="container py-20 gap-8 grid grid-cols-4">
      <div className="border rounded-lg border-zinc-100 p-4 space-y-3 self-start sticky top-4">
        <Filter />
      </div>
      <div className="col-span-3 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {Array.from({ length: 10 }).map((_, id) => (
          <div key={id} className="h-[20rem] border rounded-lg relative overflow-hidden">
            <Image
              src={"/images/home/restaurant.jpg"}
              alt={""}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t text-white from-black flex items-end p-4">
              <div className="space-y-3">
                <p className="font-bold text-xl">Boripe Foods</p>
                <div className="space-y-2">
                  <p className="text-white/80 text-sm line-clamp-2">
                    Boripe foods Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Sint, rem?
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, id) => (
                      <Star key={id} size={16} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-light opacity-80">(FUNAAB)</p>
                  <div>
                    <Link href={`/vendors/${id + 1}`} target="_blank">
                      <div className="flex items-center gap-2 font-bold text-sm text-deepRed">
                        <p>View Page</p>
                        <ExternalLink size={18} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VendorDisplay;

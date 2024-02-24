"use client";

import { dancingScript } from "@/lib/utils/fonts";
import Link from "next/link";
import { Group, Search, ShoppingCart, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/store/navbar";

const Navbar = () => {
  const [activeSolo, setActiveSolo] = useState(false);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    let prev = window.scrollY;

    const handleScroll = () => {
      let current = window.scrollY;
      if (current > 400) {
        setActiveSolo(true);
      } else {
        setActiveSolo(false);
      }

      if (!ref.current) return;

      if (current > prev) {
        ref.current.style.top = "-100%";
        ref.current.style.opacity = "0%";
      } else {
        ref.current.style.top = "0%";
        ref.current.style.opacity = "100%";
      }

      prev = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 duration-500 left-0 w-full z-[500] ${
          activeSolo ? "bg-white shadow-md text-black" : "text-white"
        }`}
        ref={ref}
      >
        <div className="container flex items-center justify-between py-4">
          <div>
            <Link href={"/"} className={`${dancingScript.className} text-lg`}>
              SweetBuds
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <ul className="flex items-center space-x-5">
              {navLinks.map((link, id) => (
                <li key={id}>
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Group size={20} />
              <ShoppingCart size={20} />
              <Search size={20} />
              <button className="px-5 py-[6px] rounded-full duration-300 bg-deepRed text-white flex items-center gap-1">
                <span>Account</span>
                <User size={18} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

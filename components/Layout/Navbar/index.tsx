"use client";

import { dancingScript } from "@/lib/utils/fonts";
import Link from "next/link";
import { Group, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/store/navbar.store";

const Navbar = () => {
  const [activeSolo, setActiveSolo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ref = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflowY = "auto";

      return;
    } else {
      document.body.style.overflowY = "hidden";
      setMenuOpen(true);
    }
  };

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

          <div className="md:flex hidden items-center gap-10">
            <ul className="flex items-center space-x-5">
              {navLinks.map((link, id) => (
                <li key={id}>
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              {/* <Group size={20} /> */}
              <ShoppingCart size={20} />
              <Search size={20} />
              <div>
                <Link href={"/account/login"}>
                  <button className="px-5 py-[6px] rounded-full duration-300 bg-deepRed text-white flex items-center gap-1">
                    <span>Account</span>
                    <User size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <ShoppingCart className="cursor-pointer" />
            <div>
              <Link href={"/account/login"}>
                <User className="cursor-pointer" />
              </Link>
            </div>
            <Menu className="cursor-pointer" onClick={toggleMenu} />
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 w-full md:hidden z-[5000] duration-300 ease-in-out bg-black/80 backdrop-blur-sm overflow-hidden ${
          menuOpen ? "h-full" : "h-0"
        }`}
      >
        <div className="w-full relative text-white h-full flex items-center justify-center ">
          <X className="top-4 right-4 absolute cursor-pointer" onClick={toggleMenu} />
          <ul className="space-y-4 text-center">
            {navLinks.map((link, id) => (
              <li key={id} onClick={toggleMenu}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

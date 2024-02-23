import { dancingScript } from "@/lib/utils/fonts";
import Link from "next/link";
import { Group, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[4000] text-white">
        <div className="container flex items-center justify-between py-4">
          <div>
            <Link href={"/"} className={`${dancingScript.className} text-lg`}>
              StudBuds
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <ul className="flex items-center space-x-4">
              <li>Home</li>
              <li>Menu</li>
              <li>About</li>
              <li>Trending</li>
            </ul>

            <div className="flex items-center gap-4">
              <Group size={20} />
              <ShoppingCart size={20} />
              <Search size={20} />
              <button className="px-6 py-2 rounded-full border-deepRed border">Order Now</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { dancingScript } from "@/lib/utils/fonts";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-deepRed text-gray-100 py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href={"/"} className={`${dancingScript.className} text-lg`}>
            StudBuds
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

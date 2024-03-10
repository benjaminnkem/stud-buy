import { useSidebar } from "@/lib/store/auth/sidebar.store";
import { SidebarChild } from "@/lib/types/auth/sidebar.types";
import { dancingScript } from "@/lib/utils/fonts";
import { ArrowLeft, ArrowRight, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { opacityVariant } from "@/lib/utils/variants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DashboardSidebar = () => {
  const { links: sidebarLinks, isOpen, controlOpen } = useSidebar();

  return (
    <div
      className={`h-screen bg-zinc-950 text-white p-5 overflow-y-auto duration-200 ${
        isOpen ? "md:w-[300px] w-[290px]" : "w-[85px]"
      }`}
    >
      <div className="flex items-center justify-between">
        {isOpen && (
          <Link href={"/"} className={`${dancingScript.className}`}>
            SweetBuy
          </Link>
        )}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div {...opacityVariant}>
              <ArrowLeft className="cursor-pointer" onClick={() => controlOpen(false)} />
            </motion.div>
          ) : (
            <motion.div {...opacityVariant}>
              <ArrowRight className="cursor-pointer ml-2" onClick={() => controlOpen(true)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-6 mt-5">
        {sidebarLinks.map((content, id) => (
          <div key={id} className="mt-1">
            {isOpen ? (
              <p className="uppercase text-sm font-semibold">{content.heading}</p>
            ) : (
              <> {id > 0 && <div className="h-[0.5px] bg-zinc-800 w-full"></div>}</>
            )}
            <div className="space-y-1">
              {content.links.map((link, id) => (
                <Expandable key={id} {...link} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Expandable: React.FC<SidebarChild> = (link) => {
  const [expanded, setExpanded] = useState(true);
  const { isOpen, controlOpen } = useSidebar();
  const pathname = usePathname();

  const toggleExpand = () => setExpanded((prev) => !prev);

  useEffect(() => {
    let windowSize = window.innerWidth;

    controlOpen(windowSize >= 768);

    const handleResize = () => {
      windowSize = window.innerWidth;
      controlOpen(windowSize >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-zinc-400">
      {link.children ? (
        <div
          className="flex items-center p-3 cursor-pointer select-none justify-between hover:bg-zinc-900 duration-200 rounded-xl"
          onClick={toggleExpand}
        >
          <div className="flex items-center gap-2">
            {link.icon}
            {isOpen && <p className={`${pathname === link.href ? "text-zinc-100 font-semibold" : ""}`}>{link.label}</p>}
          </div>
          {link.children && isOpen && <ChevronUp size={16} className={`duration-200 ${expanded && "rotate-180"}`} />}
        </div>
      ) : (
        <div>
          <Link href={link.href}>
            <div className="flex items-center p-3 cursor-pointer select-none justify-between hover:bg-zinc-900 duration-200 rounded-xl">
              <div className="flex items-center gap-2">
                {link.icon}
                {isOpen && (
                  <p className={`${pathname === link.href ? "text-zinc-100 font-semibold" : ""}`}>{link.label}</p>
                )}
              </div>
            </div>
          </Link>
        </div>
      )}

      <AnimatePresence mode="wait">
        {expanded && isOpen && (
          <motion.div {...opacityVariant} className={`duration-300 overflow-hidden`}>
            <div className="ml-8">
              {link.children?.map((child, id) => (
                <div key={id}>
                  <Link href={child.href}>
                    <div
                      className={`py-3 duration-200 hover:text-zinc-100 ${
                        link.href === pathname && "font-semibold text-zinc-100"
                      }`}
                    >
                      <p>{child.label}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardSidebar;

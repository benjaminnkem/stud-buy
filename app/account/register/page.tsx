"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { fadeToTopVariant, parentVariant } from "@/lib/utils/variants";
import { useState } from "react";
import { StudentRegisterForm, VendorRegisterForm } from "@/components/UI/Account/Register";

const Page = () => {
  const [current, setCurrent] = useState<"regular" | "vendor">("regular");

  const toggleCurrent = () => setCurrent((prev) => (prev === "regular" ? "vendor" : "regular"));

  return (
    <>
      <main className="min-h-screen flex items-center justify-center py-10 bg-deepRed/20">
        <div className="min-h-[36rem] rounded-2xl shadow-2xl md:max-w-[50rem] w-[98%] mx-auto bg-white grid overflow-hidden grid-cols-2">
          <div className="h-full relative overflow-hidden w-full">
            <Image
              src={"/images/account/food2.jpg"}
              alt="register"
              width={400}
              height={800}
              className={`w-full h-full object-cover absolute top-0 left-0 duration-500 ${
                current !== "regular" && "opacity-0"
              }`}
            />

            <Image
              src={"/images/account/register_.jpg"}
              alt="register"
              width={400}
              height={800}
              className={`w-full h-full object-cover absolute top-0 left-0 duration-500 ${
                current !== "vendor" && "opacity-0"
              }`}
            />

            <div className="w-full h-full absolute top-0 left-0 p-6 bg-gradient-to-t text-white from-black flex items-center justify-center">
              <AnimatePresence mode="wait">
                {current === "regular" ? (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    key="regular"
                    exit="exit"
                    variants={parentVariant}
                    className="space-y-2 text-center"
                  >
                    <motion.h1 variants={fadeToTopVariant} className="font-extrabold text-5xl">
                      JOIN US
                    </motion.h1>
                    <motion.p variants={fadeToTopVariant} className="text-zinc-100">
                      We are so thrilled to have you join the student community. lorem ipsum dolor sit amet.
                    </motion.p>
                    <motion.div variants={fadeToTopVariant} className="pt-4">
                      <button className="border-b font-semibold" onClick={toggleCurrent}>
                        Join as a vendor
                      </button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    key="vendor"
                    exit="exit"
                    variants={parentVariant}
                    className="space-y-2 text-center"
                  >
                    <motion.h1 variants={fadeToTopVariant} className="font-extrabold text-5xl">
                      VENDORS JOINT
                    </motion.h1>
                    <motion.p variants={fadeToTopVariant} className="text-zinc-100">
                      Let&apos;s take your business to greater heights, and reach student faster lorem, ipsum dolor.
                    </motion.p>
                    <motion.div variants={fadeToTopVariant} className="pt-4">
                      <button className="border-b font-semibold" onClick={toggleCurrent}>
                        Join as a student
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              {current === "regular" ? (
                <StudentRegisterForm key="student-form" />
              ) : (
                <VendorRegisterForm key="vendor-form" />
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;

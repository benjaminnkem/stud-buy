"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { opacityVariant, parentVariant, stiffTransition } from "@/lib/utils/variants";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center py-10 bg-deepRed/20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: stiffTransition }}
          exit={{ scale: 0, opacity: 0 }}
          className="min-h-[28rem] rounded-2xl shadow-2xl md:max-w-[30rem] w-[96%] mx-auto bg-white overflow-hidden"
        >
          <div className="overflow-hidden">
            <motion.div
              initial="initial"
              animate="animate"
              key="vendor-form-"
              exit="exit"
              variants={parentVariant}
              className="h-full p-8"
            >
              <motion.div variants={opacityVariant} className="space-y-1 text-center">
                <h2 className="text-3xl font-semibold">
                  Oya <span className="text-deepRed">Login</span>
                </h2>
                <p className="text-zinc-600 text-sm">Login to access your dashboard and view your activities.</p>
              </motion.div>

              <motion.div variants={opacityVariant} className="mt-8 space-y-2">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-medium text-zinc-600">
                      Email
                    </label>
                    <input
                      type="email"
                      className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="font-medium text-zinc-600">
                      Password
                    </label>
                    <input
                      type="password"
                      className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
                      placeholder="******"
                    />
                  </div>

                  <div className="pt-3">
                    <button className="w-full py-2 rounded-xl bg-deepRed font-medium text-white">Login</button>
                    <p className="text-sm text-center text-zinc-600 mt-1">
                      Don&apos;t have an account?{" "}
                      <Link href={"/account/register"} className="text-deepRed font-medium border-b border-deepRed">
                        Register
                      </Link>
                    </p>
                  </div>
                </form>

                <div className="mt-8">
                  <div className="flex items-center gap-2 text-zinc-500 justify-center">
                    <div className="h-[0.5px] bg-zinc-500 rounded-full w-8"></div>
                    <p>or</p>
                    <div className="h-[0.5px] bg-zinc-500 rounded-full w-8"></div>
                  </div>

                  <div className="mt-2 flex items-center gap-2 justify-center">
                    <Image width={24} height={24} src="/images/icons/google-color.svg" alt="google logo" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Page;

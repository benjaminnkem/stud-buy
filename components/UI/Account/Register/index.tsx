import Image from "next/image";
import { motion } from "framer-motion";
import { fadeToRightVariant, parentVariant } from "@/lib/utils/variants";
import Link from "next/link";

export const StudentRegisterForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={parentVariant}
      className="h-full p-8 flex items-center justify-center"
    >
      <div>
        <motion.div variants={fadeToRightVariant} className="space-y-1 text-center">
          <h2 className="text-3xl font-semibold">
            Create an <span className="text-deepRed">account</span>
          </h2>
          <p className="text-zinc-600">Create a regular account</p>
        </motion.div>

        <motion.div variants={fadeToRightVariant} className="mt-8 space-y-2">
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
                Create password
              </label>
              <input
                type="password"
                className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
                placeholder="******"
              />
            </div>

            <div className="pt-3">
              <button className="w-full py-2 rounded-xl bg-deepRed font-medium text-white">Continue</button>
              <div className="flex items-center justify-center py-1">
                <button className="outline-none text-deepRed font-semibold md:hidden" onClick={toggleForm}>
                  Join as a vendor
                </button>
              </div>
              <p className="text-sm text-center text-zinc-600 mt-1">
                Have an account?{" "}
                <Link href={"/account/login"} className="text-deepRed font-medium border-b border-deepRed">
                  Login
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
      </div>
    </motion.div>
  );
};

export const VendorRegisterForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={parentVariant} className="h-full p-8">
      <motion.div variants={fadeToRightVariant} className="space-y-1 text-center">
        <h2 className="text-3xl font-semibold">
          Vendor <span className="text-deepRed">account</span>
        </h2>
        <p className="text-zinc-600 text-sm">Other details can be updated in your secure dashboard after signing up.</p>
      </motion.div>

      <motion.div variants={fadeToRightVariant} className="mt-8 space-y-2">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="email" className="font-medium text-zinc-600">
              Restaurant Name
            </label>
            <input
              type="text"
              className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
              placeholder="e.g Boripe Foods"
            />
          </div>
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
              Create password
            </label>
            <input
              type="password"
              className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
              placeholder="******"
            />
          </div>

          <div className="pt-3">
            <button className="w-full py-2 rounded-xl bg-deepRed font-medium text-white">Continue</button>
            <div className="flex items-center justify-center py-1">
              <button className="outline-none text-deepRed font-semibold md:hidden" onClick={toggleForm}>
                Join as a student
              </button>
            </div>
            <p className="text-sm text-center text-zinc-600 mt-1">
              Have an account?{" "}
              <Link href={"/account/login"} className="text-deepRed font-medium border-b border-deepRed">
                Login
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
  );
};

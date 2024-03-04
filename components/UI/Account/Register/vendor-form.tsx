import Image from "next/image";
import { motion } from "framer-motion";
import { fadeToRightVariant, parentVariant } from "@/lib/utils/variants";
import Link from "next/link";
import toast from "react-hot-toast";
import { publicApi } from "@/lib/config/axios-instance";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type VendorRegisterInput = { restaurantName: string; password: string; email: string };

const VendorRegisterForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<VendorRegisterInput>();

  // TODO: Create a useCreateAccount hook for vendor and basic user registration

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submit: SubmitHandler<VendorRegisterInput> = async (data) => {
    setLoading(true);

    try {
      await publicApi.post("/auth/vendor/register", { ...data });

      toast.success("Account created successfully.");

      router.push("/account/login");
    } catch (e: any) {
      toast.error(e?.response?.data?.error ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={parentVariant} className="h-full p-8">
      <motion.div variants={fadeToRightVariant} className="space-y-1 text-center">
        <h2 className="text-3xl font-semibold">
          Vendor <span className="text-deepRed">account</span>
        </h2>
        <p className="text-zinc-600 text-sm">Other details can be updated in your secure dashboard after signing up.</p>
      </motion.div>

      <motion.div variants={fadeToRightVariant} className="mt-8 space-y-2">
        <form onSubmit={handleSubmit(submit)} className="space-y-3" noValidate>
          <div className="space-y-1">
            <label htmlFor="restaurantName" className="font-medium text-zinc-600">
              Restaurant Name
            </label>
            <div>
              <input
                type="text"
                className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
                placeholder="Boripe foods..."
                {...register("restaurantName", {
                  required: {
                    value: true,
                    message: "Please provide a restaurant name, it can be changed later",
                  },
                })}
              />
              {errors.restaurantName && (
                <p className="text-red-400 text-xs font-medium">{errors.restaurantName.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="font-medium text-zinc-600">
              Email
            </label>
            <div>
              <input
                type="email"
                className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
                placeholder="johndoe@gmail.com"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please provide your email address",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && <p className="text-red-400 text-xs font-medium">{errors.email.message}</p>}
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="font-medium text-zinc-600">
              Create password
            </label>
            <div>
              <input
                type="password"
                className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
                placeholder="******"
                {...register("password", {
                  required: {
                    value: true,
                    message: "A password is required",
                  },
                  minLength: {
                    value: 8,
                    message: "Password should not be less than 8 characters",
                  },
                })}
              />
              {errors.password && <p className="text-red-400 text-xs font-medium">{errors.password.message}</p>}
            </div>
          </div>

          <div className="pt-3">
            <button
              className="w-full flex items-center justify-center py-2 rounded-xl bg-deepRed font-medium text-white"
              disabled={loading}
            >
              {loading ? (
                <div className="w-4 h-4 rounded-full border-[3px] border-white/40 border-t-white animate-spin"></div>
              ) : (
                "Continue"
              )}
            </button>
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

export default VendorRegisterForm;

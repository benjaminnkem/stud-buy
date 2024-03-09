"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { opacityVariant, parentVariant, stiffTransition } from "@/lib/utils/variants";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { Vortex } from "react-loader-spinner";
import { signIn, useSession } from "next-auth/react";

type Inputs = {
  email: string;
  password: string;
};

const LoginContent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { data: session } = useSession();

  const submit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    try {
      const res = await signIn("credentials", { ...data, redirect: false });

      if (res?.status === 401) {
        toast.error("Unauthorized (Credentials incorrect).", { id: "unauthorized" });
        return;
      }

      toast.success("Logged in successfully.");
      router.push("/dashboard"); // push to dashboard
    } catch (e: any) {
      toast.error(e?.response?.data?.error ?? "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="min-h-screen flex items-center justify-center py-10 bg-deepRed/20">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: stiffTransition }}
          exit={{ scale: 0, opacity: 0 }}
          className="min-h-[28rem] rounded-2xl shadow-2xl md:max-w-[30rem] relative w-[96%] mx-auto bg-white overflow-hidden"
        >
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md flex items-center justify-center">
              <Vortex />
            </div>
          )}

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
                <form onSubmit={handleSubmit(submit)} noValidate className="space-y-3">
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
                      Password
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

export default LoginContent;

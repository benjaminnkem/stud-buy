"use client";

import Image from "next/image";

const Page = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center py-10 bg-deepRed/20">
        <div className="min-h-[30rem] rounded-2xl shadow-2xl md:max-w-[50rem] w-[98%] mx-auto bg-white grid overflow-hidden grid-cols-2">
          <div className="h-full relative overflow-hidden w-full">
            <Image
              src={"/images/account/register_.jpg"}
              alt="register"
              width={400}
              height={800}
              className="w-full h-full object-cover"
            />

            <div className="w-full h-full absolute top-0 left-0 p-6 bg-gradient-to-t text-white from-black flex items-center justify-center">
              <div className="space-y-2 text-center">
                <h1 className="font-extrabold text-5xl">JOIN US</h1>
                <p className="text-zinc-100">
                  We are so thrilled to have you join the student community. lorem ipsum dolor sit amet.
                </p>
                <div className="pt-4">
                  <button className="border-b font-semibold">Join as a vendor</button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full p-8">
            <div className="space-y-1 text-center">
              <h2 className="text-3xl font-semibold">
                Create an <span className="text-deepRed">account</span>
              </h2>
              <p className="text-zinc-600">Create a regular account</p>
            </div>

            <div className="mt-8 space-y-2">
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
                <div className="space-y-1">
                  <label htmlFor="email" className="font-medium text-zinc-600">
                    Repeat password
                  </label>
                  <input
                    type="password"
                    className="bg-transparent p-2 w-full outline-none duration-200 ring-[1px] focus:ring ring-zinc-200 rounded-lg"
                    placeholder="Repeat password"
                  />
                </div>

                <div className="pt-3">
                  <button className="w-full py-2 rounded-xl bg-deepRed font-medium text-white">Continue</button>
                  <p className="text-sm text-center text-zinc-600 mt-1">
                    Have an account? <span className="text-deepRed font-medium border-b border-deepRed">Login</span>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;

import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-[1000] backdrop-blur-md grid place-content-center w-full h-full">
      <div className="size-24 bg-white shadow-xl grid place-content-center">
        <Loader />
      </div>
    </div>
  );
};

export default Loading;

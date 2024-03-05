import { Loader } from "lucide-react";
import { Vortex } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-[1000] backdrop-blur-md grid place-content-center w-full h-full">
      <div className="size-24 bg-white shadow-2xl grid place-content-center rounded-full">
        <Loader className="animate-spin" size={40} />
      </div>
    </div>
  );
};

export default Loading;

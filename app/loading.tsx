const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-[1000] backdrop-blur-md grid place-content-center w-full h-full">
      <div className="size-24 border-8 rounded-full border-transparent border-t-deepRed animate-spin"></div>
    </div>
  );
};

export default Loading;

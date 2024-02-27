import classNames from "classnames";

export const cardClass = classNames([
  "sm:w-[18rem] w-[95%] mx-auto sm:mx-0 min-h-[20rem] duration-300 border",
  "rounded-lg p-2 hover:shadow-lg relative bg-white",
]);

export const counterButton = classNames([
  "outline-none min-w-12 flex items-center border",
  "justify-center py-3 hover:shadow-lg duration-300",
  "disabled:opacity-50 disabled:hover:bg-transparent",
]);

import classNames from "classnames";

const cardClass = classNames([
  "sm:w-[18rem] w-[95%] mx-auto sm:mx-0 h-[15rem] duration-300 border border-r-4",
  "border-b-4 hover:border-r hover:border-b rounded-lg",
]);

const MenuCard = () => {
  return <div className={cardClass}></div>;
};

export default MenuCard;

import MenuCard from "@/components/Common/Cards/menu";

const Menu = () => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      {Array.from({ length: 16 }).map((_, id) => (
        <MenuCard key={id} />
      ))}
    </div>
  );
};

export default Menu;

export type TrayItem = {
  quantity: number;
  image: string;
  name: string;
  id: string;
  price: number;
};

export type Tray = {
  items: TrayItem[] | null;
  updateItems: (items: TrayItem[]) => void;
  deleteItems: (id: string) => void;
};

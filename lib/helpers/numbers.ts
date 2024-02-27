export const formatPrice = (price: number) => {
  return new Intl.NumberFormat(undefined, {
    currency: "NGN",
    style: "currency",
  }).format(price);
};

export const formatDefault = (num: number) => {
  return new Intl.NumberFormat().format(num);
};

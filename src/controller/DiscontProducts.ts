const calculateDiscountedPrice = (price: number, discount: number): number => {
  if (discount === 0) {
    return price;
  }
  return price - (price * (discount / 100));
};

  export default calculateDiscountedPrice;
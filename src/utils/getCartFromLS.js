import { totalPriceReduce } from './totalPriceReduce';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = totalPriceReduce(items);

  return {
    items,
    totalPrice,
  };
};

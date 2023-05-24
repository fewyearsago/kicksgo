export const calcTotalPrice = (items) => {
  items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

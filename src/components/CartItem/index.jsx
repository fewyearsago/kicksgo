import React from 'react';
import { useDispatch } from 'react-redux';
import { toRemoveCartItem } from '../../redux/slices/cartSlice';
import style from './index.module.scss';

const CartItem = ({ id, title, price, imgUrl, size, sizes, count }) => {
  const itemSize = sizes[size];
  const dispatch = useDispatch();
  const removeItem = {
    id,
    size,
  };
  return (
    <div className={style.root}>
      <img src={imgUrl} alt="" />
      <h1>{title}</h1>
      <p>{price}$</p>
      <p>шт:{count}</p>
      <span>Размер:{itemSize}</span>
      <button onClick={() => dispatch(toRemoveCartItem(removeItem))}>удалить</button>
    </div>
  );
};

export default CartItem;

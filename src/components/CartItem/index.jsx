import React from 'react';
import { useDispatch } from 'react-redux';
import {
  toRemoveCartItem,
  toMinusCartItem,
  toAddCartItem,
} from '../../redux/slices/cartSlice';
import style from './index.module.scss';

const CartItem = ({ id, title, price, imgUrl, size, sizes, count }) => {
  const itemSize = sizes[size];
  const dispatch = useDispatch();
  const itemArgs = {
    id,
    size,
  };
  const onClickRemoveCartItem = () => {
    if (window.confirm('Действительно удалить товар?'))
      dispatch(toRemoveCartItem(itemArgs));
  };
  const onClickMinusCartItem = () => {
    dispatch(toMinusCartItem(itemArgs));
  };
  const onClickPlusCartItem = () => {
    dispatch(toAddCartItem(itemArgs));
  };
  return (
    <div className={style.root}>
      <img src={imgUrl} alt="" />
      <div className={style.rootText}>
        <h1>{title}</h1>
        <span>Размер:{itemSize}</span>
      </div>
      <div className={style.rootInfo}>
        <p>{price}$</p>
        <div className={style.rootInfoBtns}>
          <button disabled={count === 1} onClick={onClickMinusCartItem}>
            -
          </button>
          <p>{count}</p>
          <button onClick={onClickPlusCartItem}>+</button>
        </div>
      </div>
      <button className={style.rootBtn} onClick={onClickRemoveCartItem}>
        <svg
          width="40px"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8,19a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5,1,1,0,0,0,8,3,5,5,0,0,0,3,8v8a5,5,0,0,0,5,5,1,1,0,0,0,0-2Zm7.71-3.29a1,1,0,0,0,0-1.42L13.41,12l2.3-2.29a1,1,0,0,0-1.42-1.42L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0ZM16,3a1,1,0,0,0,0,2,3,3,0,0,1,3,3v8a3,3,0,0,1-3,3,1,1,0,0,0,0,2,5,5,0,0,0,5-5V8A5,5,0,0,0,16,3Z"
            fill="#6563ff"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;

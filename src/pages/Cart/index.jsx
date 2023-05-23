import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartEmpty from '../../components/CartEmpty';
import CartItem from '../../components/CartItem';
import { toClearCartItem } from '../../redux/slices/cartSlice';
import style from './index.module.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const onClickClearItems = () => {
    if (window.confirm('Действительно очистить корзину?')) dispatch(toClearCartItem());
  };
  const items = useSelector((state) => state.cartSlice.items);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  if (totalPrice === 0) {
    return <CartEmpty />;
  }
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.rootCartMain}>
          <div className={style.rootCartHeader}>
            <h1>Корзина</h1>
            <button onClick={onClickClearItems}>Очистить корзину</button>
          </div>
          <div className={style.rootCartContent}>
            {items.map((e, i) => (
              <CartItem
                id={e.id}
                count={e.count}
                sizes={e.sizes}
                size={e.size}
                imgUrl={e.imgUrl}
                title={e.title}
                price={e.price}
              />
            ))}
          </div>
          <div className={style.rootCartFooter}>
            <div className={style.rootCartSum}>Сумма заказа: {totalPrice}$</div>
            <button>Оплатить сейчас</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

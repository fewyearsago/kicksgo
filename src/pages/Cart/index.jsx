import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartEmpty from '../../components/CartEmpty';
import CartItem from '../../components/CartItem';

import style from './index.module.scss';

const Cart = () => {
  const items = useSelector((state) => state.cartSlice.items);
  const totalCount = useSelector((state) => state.cartSlice.totalCount);

  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.rootCartMain}>
          <div className={style.rootCartHeader}>
            <h1>Корзина</h1>
            <button>Очистить корзину</button>
          </div>
          <div className={style.rootCartContent}>
            {items.map((e, i) => (
              <div>
                <CartItem
                  id={e.id}
                  count={e.count}
                  sizes={e.sizes}
                  size={e.size}
                  imgUrl={e.imgUrl}
                  title={e.title}
                  price={e.price}
                />
              </div>
            ))}
          </div>
          <div className={style.rootCartFooter}>
            <div className={style.rootCartItems}>Всего товаров: {totalCount}</div>
            <div className={style.rootCartSum}>Сумма заказа: 1000р.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from 'react';
import style from './index.module.scss';
import cartImg from '../../../public/cart.png';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className={style.root}>
      <h1>Корзина пустая</h1>
      <p>Вероятней всего, вы еще ничего не заказывали.</p>
      <img src={cartImg} alt="" />
      <Link to="/">
        <button>Вернуться на главную.</button>
      </Link>
    </div>
  );
};

export default CartEmpty;

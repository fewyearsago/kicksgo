import React from 'react';
import style from './index.module.scss';

const Contacts = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.rootContactsInner}>
          <div className={style.rootContactsItem}>
            <h1>Телефон</h1>
            <a href="tel:79891016969">+7 (989) 101 69-69</a>
          </div>
          <div className={style.rootContactsItem}>
            <h1>Email</h1>
            <a href="#">info@kicksgo.ru</a>
          </div>
          <div className={style.rootContactsItem}>
            <h1>Время работы</h1>
            <p>
              Заказы в интернет-магазине принимаются круглосуточно. После онлайн оплаты выбранный
              товар резервируется.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

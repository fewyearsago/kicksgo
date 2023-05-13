import React from 'react';
import style from './index.module.scss';

const ItemBlock = ({ imgUrl, id, price, title }) => {
  return (
    <div className={style.root}>
      <img className={style.rootImg} src={imgUrl} alt="" />
      <div className={style.rootText}>
        <h1 className={style.rootTextTitle}>{title}</h1>
        <p className={style.rootTextPrice}>{price}</p>
      </div>
    </div>
  );
};

export default ItemBlock;

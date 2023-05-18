import React from 'react';
import style from './index.module.scss';
import { useSelector } from 'react-redux';

const FavItemBlock = ({ title, sizes, price, imgUrl, id }) => {
  return (
    <div className={style.root}>
      <img className={style.rootImg} src={imgUrl} alt="" />
      <h6 className={style.rootTitle}>{title}</h6>
      <span className={style.rootPrice}>{price}</span>
    </div>
  );
};

export default FavItemBlock;

import React from 'react';
import style from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { remItem } from '../../redux/slices/favoriteSlice';

const FavItemBlock = ({ title, sizes, price, imgUrl, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.root}>
      <img className={style.rootImg} src={imgUrl} alt="" />
      <h6 className={style.rootTitle}>{title}</h6>
      <span className={style.rootPrice}>{price}</span>
      <button onClick={() => dispatch(remItem(id))} className={style.rootBtn}>
        Удалить из избранных
      </button>
    </div>
  );
};

export default FavItemBlock;

import React from 'react';
import style from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { remItem } from '../../redux/slices/favoriteSlice';
import { Link } from 'react-router-dom';

const FavItemBlock = ({ title, sizes, price, imgUrl, id }) => {
  const dispatch = useDispatch();
  return (
    <Link className={style.Link} to={'/sneakers/' + id}>
      <div className={style.root}>
        <img className={style.rootImg} src={imgUrl} alt="" />
        <h6 className={style.rootTitle}>{title}</h6>
        <span className={style.rootPrice}>от {price} $</span>
        <button onClick={() => dispatch(remItem(id))} className={style.rootBtn}>
          -
        </button>
      </div>
    </Link>
  );
};

export default FavItemBlock;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, toggleFavorite } from '../../redux/slices/favoriteSlice';
import style from './index.module.scss';

const ItemBlock = ({ imgUrl, id, price, title, sizes }) => {
  const favorites = useSelector((state) => state.favorite.isFavorite);
  const isFavorite = favorites.includes(id);
  const dispatch = useDispatch();
  const onClickAddFav = () => {
    const item = {
      id,
      price,
      title,
      sizes,
      imgUrl,
    };
    dispatch(addItem(item));
    dispatch(toggleFavorite(id));
  };
  const list = [...sizes];
  return (
    <div className={style.root}>
      <div className={style.rootItem}>
        <div className={style.rootPicture}>
          <div className={style.rootPictureBtns}>
            <button
              onClick={onClickAddFav}
              className={
                isFavorite
                  ? style.rootPictureBtnsLikeActive
                  : style.rootPictureBtnsLike
              }>
              <svg
                viewBox="0 0 24 24"
                width="30px"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M20 22V4c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22zM6 10V4h12v14.553l-6-3.428-6 3.428V10z" />
                <path d="M15.409 9.512c.361-.372.585-.888.585-1.456s-.223-1.083-.585-1.456a1.962 1.962 0 0 0-1.412-.603S13.001 5.994 12 7.026c-1.001-1.032-1.997-1.029-1.997-1.029-.552 0-1.051.23-1.412.603-.362.373-.585.887-.585 1.456s.223 1.084.585 1.456L12 13.203l3.409-3.691z" />
              </svg>
            </button>
          </div>
          <img className={style.rootImg} src={imgUrl} alt="" />
        </div>
      </div>
      <div className={style.rootText}>
        <Link className={style.rootLink} to={'/sneakers/' + id}>
          <h1 className={style.rootTextTitle}>{title}</h1>
        </Link>
        <p className={style.rootTextPrice}>от {price} $</p>
      </div>
      <div className={style.rootSizes}>
        {list.map((e, i) => (
          <button key={i} className={style.rootSizesBtn}>
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemBlock;

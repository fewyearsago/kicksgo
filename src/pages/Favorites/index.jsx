import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavItemBlock from '../../components/FavItemBlock';
import { clearItems } from '../../redux/slices/favoriteSlice';
import style from './index.module.scss';
import favsImg from '../../../public/favs.png';

const Favorites = () => {
  const favs = useSelector((state) => state.favorite.items);
  const dispatch = useDispatch();
  const onClickClearFavs = () => {
    if (window.confirm('Действительно очистить список?')) dispatch(clearItems());
  };
  return (
    <div className={style.root}>
      <div className={style.container}>
        {favs.length == 0 ? (
          <div className={style.rootBox}>
            <h1 className={style.rootText}>Пока нет товаров..</h1>
            <img className={style.rootImg} src={favsImg} alt="" />
            <Link to="/">
              <button className={style.rootBackBtn}>Вернуться назад..</button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className={style.rootTitle}>Избранное:</h1>
            <div className={style.rootInner}>
              {favs.map((e, i) => (
                <FavItemBlock
                  key={i}
                  title={e.title}
                  sizes={e.sizes}
                  price={e.price}
                  imgUrl={e.imgUrl}
                  id={e.id}
                />
              ))}
            </div>
            <button className={style.rootClearBtn} onClick={onClickClearFavs}>
              Очистить список.
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;

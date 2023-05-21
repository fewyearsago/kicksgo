import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavItemBlock from '../../components/FavItemBlock';
import { clearItems } from '../../redux/slices/favoriteSlice';
import style from './index.module.scss';

const Favorites = () => {
  const favs = useSelector((state) => state.favorite.items);
  const dispatch = useDispatch();
  const onClickClearFavs = () => {
    if (window.confirm('Действительно очистить список?'))
      dispatch(clearItems());
  };
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <h1 className={style.rootTitle}>Избранное:</h1>
        {favs.length == 0 ? (
          <div className={style.rootBox}>
            <h1 className={style.rootText}>Пока нет товаров..</h1>
            <img
              className={style.rootImg}
              src="https://images.unsplash.com/photo-1505650462443-863da97fc640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <Link to="/">
              <button className={style.rootBackBtn}>Вернуться назад..</button>
            </Link>
          </div>
        ) : (
          <>
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

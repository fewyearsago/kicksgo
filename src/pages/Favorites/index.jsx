import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavItemBlock from '../../components/FavItemBlock';
import style from './index.module.scss';

const Favorites = () => {
  const favs = useSelector((state) => state.favorite.items);
  return (
    <div className={style.root}>
      <div className={style.wrapper}>
        <h1 className={style.rootTitle}>Избранное:</h1>
        {favs.length == 0 ? (
          <div className={style.rootBox}>
            Пока нет товаров..
            <Link to="/">
              <button>Вернуться назад..</button>
            </Link>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Favorites;

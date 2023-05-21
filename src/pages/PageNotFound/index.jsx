import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';

const PageNotFound = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <h1 className={style.rootTitle}>NOT FOUND! 404</h1>
        <Link to="/">
          <button className={style.rootBtn}>Вернуться назад..</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

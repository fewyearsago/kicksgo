import React from 'react';
import style from './index.module.scss';

const PageNotFound = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <h1 className={style.rootTitle}>NOT FOUND! 404</h1>
        <button className={style.rootBtn}>Вернуться назад!</button>
      </div>
    </div>
  );
};

export default PageNotFound;

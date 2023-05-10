import React from 'react';
import style from '../ForHimAndHer/index.module.scss';
import ImgForMen from '../../../public/1.png';
import ImgForWomen from '../../../public/2.png';

const ForHimAndHer = () => {
  return (
    <div className={style.root}>
      <div className={style.rootWomen}>
        <a href="#">
          <img className={style.rootImg} src={ImgForMen} alt="" />
        </a>
        <h1 className={style.rootTitle}>Для него</h1>
      </div>
      <div className={style.rootMen}>
        <a href="#">
          <img className={style.rootImg} src={ImgForWomen} alt="" />
        </a>
        <h1 className={style.rootTitle}>Для нее</h1>
      </div>
    </div>
  );
};

export default ForHimAndHer;

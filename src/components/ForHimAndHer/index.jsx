import React from 'react';
import style from './index.module.scss';
import ImgForMen from '../../../public/1.png';
import ImgForWomen from '../../../public/2.png';

const ForHimAndHer = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.root}>
          <div className={style.rootWomen}>
            <a href="#">
              <img className={style.rootImg} src={ImgForMen} alt="" />
              <h1 className={style.rootTitle}>Для него</h1>
            </a>
          </div>
          <div className={style.rootMen}>
            <a href="#">
              <img className={style.rootImg} src={ImgForWomen} alt="" />
              <h1 className={style.rootTitle}>Для неё</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForHimAndHer;

import React from 'react';
import style from './index.module.scss';
import ImgForMen from '../../../public/1.png';
import ImgForWomen from '../../../public/2.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const ForHimAndHer = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.root}>
          <div className={style.rootWomen}>
            <Link
              className={style.rootLink}
              activeClass="active"
              to="section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <img className={style.rootImg} src={ImgForMen} alt="" />
              <h1 className={style.rootTitle}>Для него</h1>
            </Link>
          </div>
          <div className={style.rootMen}>
            <Link
              className={style.rootLink}
              activeClass="active"
              to="section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <img className={style.rootImg} src={ImgForWomen} alt="" />
              <h1 className={style.rootTitle}>Для неё</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForHimAndHer;

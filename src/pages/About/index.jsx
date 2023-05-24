import React from 'react';
import style from './index.module.scss';
import about from '../../../public/about.png';

const About = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.rootAbout}>
          <h1 className={style.rootAboutTitle}>О нас</h1>
          <p className={style.rootAboutText}>
            Наша цель — предложить вам самый широкий выбор высококачественной обуви, которая
            отражает вашу индивидуальность и позволяет выразить свой стиль на полную катушку.
          </p>
          <p className={style.rootAboutText}>
            <span>В KicksGo </span>
            мы верим, что каждая пара кроссовок — это больше, чем просто обувь. Это яркий акцент,
            который подчеркивает вашу уникальность и добавляет долю личности в ваш образ. Поэтому мы
            тщательно подбираем и предлагаем вам только самые актуальные и модные модели, от ведущих
            мировых брендов и дизайнеров.
          </p>
          <div className={style.rootImgBox}>
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

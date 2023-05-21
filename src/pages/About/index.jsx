import React from 'react';
import style from './index.module.scss';

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
          <img
            src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;

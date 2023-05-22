import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import style from './index.module.scss';
import '../../index.css';
const Header = () => {
  const list = [
    { name: 'FAQ', href: '/FAQ' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];
  const favs = useSelector((state) => state.favorite.items);
  return (
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.rootInner}>
          <Link className={style.rootInnerLogo} to="/">
            KicksGo
          </Link>
          <ul className={style.rootInnerMenu}>
            {list.map((obj, i) => (
              <NavLink className={style.rootInnerMenuItem} key={i} to={obj.href}>
                <li key={i}>{obj.name}</li>
              </NavLink>
            ))}
          </ul>
          <div className={style.rootInnerInfo}>
            <div className={style.rootInnerInfoFav}>
              {favs.length > 0 && <span className={style.rootInnerInfoFavFull}></span>}
              <Link to="/favorites">
                <svg height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <style></style>
                  </defs>
                  <title />
                  <g data-name="Layer 54" id="Layer_54">
                    <path
                      className="cls-1"
                      d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"
                    />
                  </g>
                </svg>
              </Link>
            </div>
            <Link to="/cart">
              <div className={style.rootInnerInfoCart}>
                <svg
                  enableBackground="new 0 0 50 50"
                  height="20px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 50 50"
                  width="20px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <path
                    d="M8,14L4,49h42l-4-35H8z"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <rect fill="none" height="50" width="50" />
                  <path
                    d="M34,19c0-1.241,0-6.759,0-8  c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,1.241,0,6.759,0,8"
                    fill="none"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <circle cx="34" cy="19" r="2" />
                  <circle cx="16" cy="19" r="2" />
                </svg>
                <span className={style.rootInnerInfoCartCount}>1</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toAddCartItem } from '../../redux/slices/cartSlice';
import style from './index.module.scss';

const FullItem = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState([]);
  const [category, setCategory] = React.useState(0);
  const dispatch = useDispatch();
  const onClickSetCategory = (id) => {
    setCategory(id);
  };

  React.useEffect(() => {
    try {
      const getItem = async () => {
        const { data } = await axios.get('https://644189e3792fe886a8aa1467.mockapi.io/items/' + id);
        setItem(data);
      };
      getItem();
    } catch {
      alert('Произошла ошибка. Повторите попытку позже.');
    }
  }, []);
  const KicksItem = {
    title: item.title,
    imgUrl: item.imgUrl,
    id: item.id,
    price: item.price,
    sizes: item.sizes,
    size: category,
  };
  if (item.length == 0) {
    return <h1 className={style.loading}>Идет загрузка...</h1>;
  }

  return (
    <div className={style.root}>
      <div className={style.rootInner}>
        <div className={style.Img}>
          <img className={style.rootImgItem} src={item.imgUrl} alt="" />
        </div>
        <div className={style.rootInfo}>
          <h1 className={style.rootTitle}>{item.title}</h1>
          <p className={style.rootText}>{item.price}$</p>
          <ul className={style.rootList}>
            {item.sizes.map((e, i) => (
              <button
                onClick={() => onClickSetCategory(i)}
                className={category === i ? style.rootBtnActive : style.rootBtn}
                key={i}>
                {e}
              </button>
            ))}
          </ul>
          <button onClick={() => dispatch(toAddCartItem(KicksItem))} className={style.rootCart}>
            Добавить в корзину.
          </button>
          <Link className={style.rootLink} to="/">
            <button className={style.rootBackBtn}>
              <svg
                width="40px"
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M478,256,302,432l-21.21-21.2L420.6,271H34V241H420.6L280.75,101.16,302,80Z" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullItem;

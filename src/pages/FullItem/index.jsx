import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import style from './index.module.scss';

const FullItem = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState([]);
  const [category, setCategory] = React.useState(0);
  const onClickSetCategory = (id) => {
    setCategory(id);
  };
  React.useEffect(() => {
    try {
      const getItem = async () => {
        const { data } = await axios.get(
          'https://644189e3792fe886a8aa1467.mockapi.io/items/' + id,
        );
        setItem(data);
      };
      getItem();
    } catch {
      alert('Произошла ошибка. Повторите попытку позже.');
    }
  }, []);
  if (item.length == 0) {
    return <h1 className={style.loading}>Идет загрузка...</h1>;
  }
  return (
    <div className={style.root}>
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
        <button className={style.rootCart}>Добавить в корзину.</button>
      </div>
    </div>
  );
};

export default FullItem;

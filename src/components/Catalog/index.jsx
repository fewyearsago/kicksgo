import axios from 'axios';
import React from 'react';
import ItemBlock from '../ItemBlock';
import style from './index.module.scss';

const Catalog = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://644189e3792fe886a8aa1467.mockapi.io/items');
      setItems(data);
      setIsLoading(true);
    };
    getData();
  }, []);
  return (
    <div className={style.root}>
      <div className={style.container}>
        <h1 className={style.rootTitle}>Каталог ❤️</h1>
        <div className={style.rootCatalogList}>
          {isLoading
            ? items.map((e, i) => (
                <ItemBlock key={i} id={e.id} title={e.title} price={e.price} imgUrl={e.imgUrl} />
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};

export default Catalog;

import axios from 'axios';
import React from 'react';
import ItemBlock from '../ItemBlock';
import Pagination from '../Pagination';
import Skeleton from '../Skeleton';
import style from './index.module.scss';

const Catalog = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const ShortSkeleton = [...new Array(4)].map(() => <Skeleton />);
  const ShortItemBlock = items.map((e, i) => (
    <ItemBlock
      sizes={e.sizes}
      key={i}
      id={e.id}
      title={e.title}
      price={e.price}
      imgUrl={e.imgUrl}
    />
  ));
  React.useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://644189e3792fe886a8aa1467.mockapi.io/items?page=${currentPage}&limit=4`,
        );
        setItems(data);
      } catch {
        alert('Произошла ошибка. Обновите страницу позже.');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [currentPage]);

  return (
    <div className={style.root}>
      <div className={style.container}>
        <h1 className={style.rootTitle}>Каталог ❤️</h1>
        <div className={style.rootCatalogList}>{isLoading ? ShortSkeleton : ShortItemBlock}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
};

export default Catalog;

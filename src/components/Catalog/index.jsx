import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, setItems } from '../../redux/slices/filtersSlice';
import ItemBlock from '../ItemBlock';
import Pagination from '../Pagination';
import Skeleton from '../Skeleton';
import Sort from '../Sort';
import style from './index.module.scss';

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, currentPage, sortType } = useSelector((state) => state.filter);
  const [isLoading, setIsLoading] = React.useState(true);

  const ShortSkeleton = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
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
    const ShortOrder = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const ShortSortBy = sortType.sortProperty.replace('-', '');
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://644189e3792fe886a8aa1467.mockapi.io/items?page=${currentPage}&limit=4&sortBy=${ShortSortBy}&order=${ShortOrder}`,
        );
        dispatch(setItems([...data]));
      } catch {
        alert('Произошла ошибка. Обновите страницу позже.');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [currentPage, sortType]);

  return (
    <section id="section">
      <div className={style.root}>
        <div className={style.container}>
          <div className={style.rootCatalogWrapper}>
            <h1 className={style.rootTitle}>Каталог</h1>
            <Sort />
          </div>
          <div className={style.rootCatalogList}>
            {isLoading ? ShortSkeleton : ShortItemBlock}
          </div>
          <Pagination
            onChangePage={(number) => dispatch(setCurrentPage(number))}
          />
        </div>
      </div>
    </section>
  );
};

export default Catalog;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/filtersSlice';
import { selectFilters } from '../../redux/slices/filtersSlice/selectors';
import { fetchSneakers } from '../../redux/slices/sneakersSlice';
import { selectSneakers } from '../../redux/slices/sneakersSlice/selectors';
import ItemBlock from '../ItemBlock';
import Pagination from '../Pagination';
import Skeleton from '../Skeleton';
import Sort from '../Sort';
import style from './index.module.scss';

const Catalog = () => {
  const dispatch = useDispatch();
  const { currentPage, sortType } = useSelector(selectFilters);
  const { items, status } = useSelector(selectSneakers);
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
    const ShortOrder = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const ShortSortBy = sortType.sortProperty.replace('-', '');
    dispatch(fetchSneakers({ currentPage, ShortOrder, ShortSortBy }));
  }, [currentPage, sortType]);

  return (
    <section id="section">
      <div className={style.root}>
        <div className={style.container}>
          <div className={style.rootCatalogWrapper}>
            <h1 className={style.rootTitle}>Каталог</h1>
            <Sort />
          </div>
          {status === 'error' ? (
            <div className={style.error}>
              Произошла техническая ошибка.
              <br />
              Повторите попытку позже.
            </div>
          ) : (
            <div className={style.rootCatalogList}>
              {status === 'loading' ? ShortSkeleton : ShortItemBlock}
            </div>
          )}
          <Pagination onChangePage={(number) => dispatch(setCurrentPage(number))} />
        </div>
      </div>
    </section>
  );
};

export default Catalog;

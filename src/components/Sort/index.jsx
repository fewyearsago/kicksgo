import React from 'react';
import style from './index.module.scss';

const Sort = ({ sortTitle, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);
  const onClickListItem = (id) => {
    setOpen(false);
    onChangeSort(id);
  };
  const list = [
    { name: 'популярности (DESC)', sortProperty: 'rating' },
    { name: 'популярности (ASC)', sortProperty: 'rating' },
    { name: 'цене (DESC)', sortProperty: 'price' },
    { name: 'цене (ASC)', sortProperty: 'price' },
    { name: 'алфавиту (DESC)', sortProperty: 'title' },
    { name: 'алфавиту (ASC)', sortProperty: 'title' },
  ];
  return (
    <div className={style.rootSort}>
      <b className={style.rootSortLabel}>Сортировка по: </b>
      <span className={style.rootSortTitle} onClick={() => setOpen(!open)}>
        {sortTitle.name}
      </span>
      {open && (
        <div className={style.rootSortPopup}>
          <ul>
            {list.map((e, i) => (
              <li
                className={
                  e.sortProperty === sortTitle.sortProperty
                    ? style.rootSortItemActive
                    : style.rootSortItem
                }
                onClick={() => onClickListItem(e)}>
                {e.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;

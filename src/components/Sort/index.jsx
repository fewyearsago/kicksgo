import React from 'react';
import style from './index.module.scss';

const Sort = ({ sortTitle, onChangeSort }) => {
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef();
  const onClickListItem = (id) => {
    setOpen(false);
    onChangeSort(id);
  };
  const list = [
    { name: 'Популярности', sortProperty: '-rating' },
    { name: 'Цене (по убыванию)', sortProperty: 'price' },
    { name: 'Цене (по возрастанию)', sortProperty: '-price' },
    { name: 'Новинкам', sortProperty: 'id' },
  ];
  const handleClickOutside = (event) => {
    if (!event.composedPath().includes(sortRef.current)) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div ref={sortRef} className={style.rootSort}>
      <div className={style.rootSortMain}>
        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 20h2V8h3L8 4 4 8h3zm13-4h-3V4h-2v12h-3l4 4z" />
        </svg>
        <span className={style.rootSortTitle} onClick={() => setOpen(!open)}>
          {sortTitle.name}
        </span>
      </div>

      {open && (
        <div className={style.rootSortPopup}>
          <ul>
            {list.map((e, i) => (
              <li
                key={i}
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

import style from './index.module.scss';
import { useDispatch } from 'react-redux';
import { remItem } from '../../redux/slices/favoriteSlice';
import { Link } from 'react-router-dom';

const FavItemBlock = ({ title, price, imgUrl, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={style.root}>
      <img className={style.rootImg} src={imgUrl} alt="" />
      <div className={style.rootText}>
        <Link className={style.Link} to={'/sneakers/' + id}>
          <h6 className={style.rootTitle}>{title}</h6>
        </Link>
        <span className={style.rootTextPrice}>от {price} $</span>
        <button
          onClick={() => dispatch(remItem(id))}
          className={style.rootTextBtn}>
          —
        </button>
      </div>
    </div>
  );
};

export default FavItemBlock;

export const getFavsFromLS = () => {
  const favs = localStorage.getItem('favs');
  const items = favs ? JSON.parse(favs) : [];
  const isFavs = localStorage.getItem('isFavs');
  const isFavorite = isFavs ? JSON.parse(isFavs) : [];
  return {
    items,
    isFavorite,
  };
};

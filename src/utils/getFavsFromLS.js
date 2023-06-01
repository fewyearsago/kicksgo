export const getFavsFromLS = () => {
  const data = localStorage.getItem('favs');
  const items = data ? JSON.parse(data) : [];
  return {
    items,
  };
};

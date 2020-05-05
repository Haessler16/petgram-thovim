import React from "react";

export const ListOfFavs = ({ favs = [] }) => {
  return favs.map(fav => <img key={fav.id} src={fav.src} alt="fav image" />);
};

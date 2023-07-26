import { createContext, useContext, useState, useEffect } from "react";
import {
  changeFavorite,
  fetchFavorites,
} from "../services/favorites/favoritesService";

const FavoritesContext = createContext();

function FavoritesProvider(props) {
  const [favorites, setFavorites] = useState([]);
  function handleFavorites(property) {
    if (favorites.includes(property)) {
      setFavorites(favorites.filter((favorite) => favorite.id !== property.id));
      changeFavorite(property.id, { body: "favorite: true" });
      console.log(favorites);
    } else {
      setFavorites([...favorites, property]);
    }
  }
  useEffect(() => {
    fetchFavorites()
      .then((data) => {
        setFavorites(data);
      })
      .catch((error) => {
        console.error("Error fetching favorites:", error);
      });
  }, []);

  const value = {
    favorites,
    setFavorites,
    handleFavorites,
  };

  return <FavoritesContext.Provider value={value} {...props} />;
}

function useFavorites() {
  return useContext(FavoritesContext);
}

export { FavoritesProvider, useFavorites };

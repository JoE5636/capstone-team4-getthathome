import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

function FavoritesProvider(props) {
  const [favorites, setFavorites] = useState([]);
  function handleFavorites(property) {
    if (favorites.includes(property)) {
      setFavorites(favorites.filter(favorite => favorite.id !== property.id))
    } else {
      setFavorites([...favorites, property])
    }
  }
  const value = {
    favorites,
    setFavorites: handleFavorites,
  };

  return <FavoritesContext.Provider value={value} {...props} />;
}

function useFavorites() {
  return useContext(FavoritesContext);
}

export { FavoritesProvider, useFavorites };

import React, { useContext, useEffect, useState } from "react";

import MovieContext from "./MovieContex";

function MovieState({ children }) {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("Doraemon");
  const [error, setError] = useState({ msg: "", show: "fasle" });
  const [isloading, setIsloading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setIsloading(true);
    let timerOut = setTimeout(() => {
      const fetchMovie = async () => {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=cb2dbd2d&s=${query}`
          );
          const data = await res.json();
          if (data.Response === "True") {
            setIsloading(false);
            setMovie(data.Search);
            setError({
              show: false,
              msg: "",
            });
          } else {
            setError({
              show: true,
              msg: data.Error,
            });
          }
          // console.log(data.Search, "rendered");
        } catch (error) {
          console.log(error, "Something went wrong");
        }
      };
      fetchMovie();
    }, 1000);

    return () => clearTimeout(timerOut);
  }, [query]);

  const addToFavorites = (selectedMovie) => {
    const newFavorites = [...favorites, selectedMovie];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    const storedFavorites =localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites( JSON.parse(storedFavorites));
    }
  }, []);

  // const addToFavorites = (selectedMovie) => {
  //   setFavorites([...favorites, selectedMovie]);
  // };

  const deletefromFavourite = (imdbID) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.imdbID !== imdbID
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  // const deletefromFavourite = (imdbID) => {
  //   setFavorites((prevFavorites) =>
  //     prevFavorites.filter((favorite) => favorite.imdbID !== imdbID)
  //   );
  // };

  return (
    <MovieContext.Provider
      value={{
        movie,
        query,
        setQuery,
        error,
        isloading,
        addToFavorites,
        favorites,
        deletefromFavourite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

//global custom hook
const useGlobalContext = () => {
  return useContext(MovieContext);
};

export default MovieState;
export { useGlobalContext };

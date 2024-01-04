import React, { useContext, useEffect, useState } from "react";

import MovieContext from "./MovieContex";

function MovieState({ children }) {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("Shinchan");
  const [error, setError] = useState({ msg: "", show: "fasle" });
  const [isloading, setIsloading] = useState(true);

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
          console.log(data.Search, "rendered");
        } catch (error) {
          console.log(error, "Something went wrong");
        }
      };
      fetchMovie();
    }, 1000);

    return () => clearTimeout(timerOut);
  }, [query]);
  return (
    <MovieContext.Provider value={{ movie, query, setQuery, error, isloading }}>
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

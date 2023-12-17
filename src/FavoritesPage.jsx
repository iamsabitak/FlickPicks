import React from 'react';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const favoriteMovies = [
    { id: 1, title: 'Inception', genre: 'Sci-Fi' },
    { id: 2, title: 'The Shawshank Redemption', genre: 'Drama' },
    { id: 3, title: 'The Dark Knight', genre: 'Action' },
    // Add more favorite movies as needed
  ];

  return (
    <div className="favorites-page">
      <h2 className="page-title">My Favorite Movies</h2>
      <ul className="favorite-movies-list">
        {favoriteMovies.map(movie => (
          <li key={movie.id} className="favorite-movie-item">
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;

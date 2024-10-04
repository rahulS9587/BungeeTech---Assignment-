import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('batman');
  const apiKey = '6ea1ea55';

  useEffect(() => {
    fetchMovies();
  }, [page, query]);

  useEffect(() => {
    if (sortBy === 'year') {
      const sortedMovies = [...movies].sort((a, b) => b.Year - a.Year);
      setMovies(sortedMovies);
    }
  }, [sortBy]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}&page=${page}`);
      
      if (response.data.Search) {
        const movieDetailsPromises = response.data.Search.map((movie) => 
          axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
        );
        
        const detailedMoviesResponses = await Promise.all(movieDetailsPromises);
        const detailedMovies = detailedMoviesResponses.map(res => res.data);
        
        setMovies(detailedMovies);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const addToFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 p-4">
      <form onSubmit={handleSearchSubmit} className="mb-8">
        <div className="flex items-center max-w-lg mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a movie"
            className="w-full p-3 rounded-l-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-r-lg transition duration-300"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Sort By:</label>
          <select
            className="bg-gray-800 p-2 rounded text-gray-200"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="">None</option>
            <option value="year">Year</option>
          </select>
        </div>
        <div className="flex items-center">
          <button
            className="bg-yellow-600 text-gray-200 px-4 py-2 rounded-l-lg hover:bg-yellow-700 transition duration-300"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="mx-4">{page}</span>
          <button
            className="bg-yellow-600 text-gray-200 px-4 py-2 rounded-r-lg hover:bg-yellow-700 transition duration-300"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;


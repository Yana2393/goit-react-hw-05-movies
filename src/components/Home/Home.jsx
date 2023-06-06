import React from 'react';
import { useEffect, useState } from 'react';
import css from './Home.module.css';
import { getTrendMovies } from '../services/getMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendMovies().then(data => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={css.listWrapp}>
      <h1 className={css.listTitle}>Trending Movies</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.list}>
          {movies.map(movie => (
            <li key={movie.id} className={css.listItem}>
              <img
                className={css.listImg}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
              <a href="" className={css.listText}>{movie.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;

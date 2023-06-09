import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import { getTrendMovies } from '../services/getMovies';
import PropTypes from 'prop-types';


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
              <NavLink to={`/movies/${movie.id}`} className={css.listText}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Home;

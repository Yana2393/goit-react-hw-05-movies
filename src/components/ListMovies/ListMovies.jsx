import React from 'react';
import css from './ListMovies.module.css';
import { Link, useLocation } from 'react-router-dom';
import defaultImg from '../defolt-img/defaultImg.jpeg';
import PropTypes from 'prop-types';

const ListMovies = ({ movies }) => {
  const location  = useLocation();

  return (
    <div className={css.listWrapp}>
      {movies.length < 0 ? (
        <p className={css.listText}>No movies found</p>
      ) : (
        <ul className={css.list}>
          {movies.map(movie => (
            <li key={movie.id} className={css.listItem}>
              <img
                className={css.listImg}
                src={
                  movie.poster_path === null
                    ? defaultImg
                    : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                }
                alt={movie.title}
              />
              <Link state={location} to={`/movies/${movie.id}`} className={css.listName}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ListMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ).isRequired,
}

export default ListMovies;
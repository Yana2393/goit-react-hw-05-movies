import React from 'react';
import css from './ListMovies.module.css';

const ListMovies = ({ movies }) => {
  return (
    <div className={css.listWrapp}>
      {movies.length > 0 ? (
        <ul className={css.list}>
          {movies.map(movie => (
            <li key={movie.id} className={css.listItem}>
              <img className={css.listImg}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
              <a href={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className={css.listName}>{movie.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.listText}>No movies found</p>
      )}
    </div>
  );
};

export default ListMovies;

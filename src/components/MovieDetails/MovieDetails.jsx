import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMovieDetails } from '../services/getMovies';
import { useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import defaultImg from '../defolt-img/defaultImg.jpeg'
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';


const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const { current } = useRef(location.state);

  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(movieId).then(data => {
      setMovie(data);
      setLoading(false);
    });
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return null;
  }

  return (
    <div className={css.movieWrapp}>
      <Link to={current ?? '/'}> Back </Link>
      <div className={css.movie}>
        <img
          className={css.movieImg}
          src={
            movie.poster_path === null
              ? defaultImg
              : `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
          }
          alt={movie.title}
        />
        <div className={css.movieWrappTxt}>
          <p className={css.movieTitle}>{movie.title}</p>
          <p className={css.movieSpanTxt}>
            Rating: <span className={css.movieTxt}>{movie.vote_average}</span>{' '}
          </p>
          <p className={css.movieSpanTxt}>
            Genre:{' '}
            {movie.genres.map(genre => {
              return (
                <span key={genre.id} className={css.movieTxt}>
                  {genre.name}{' '}
                </span>
              );
            })}
          </p>
          <p className={css.movieSpanTxt}>
            Description: <span className={css.movieTxt}>{movie.overview}</span>
          </p>
        </div>
      </div>
      <div className={css.linkWrapp}>
        <Link to="cast" className={css.link}>
          Cast
        </Link>
        <Link to="reviews" className={css.link}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
}

export default MovieDetails;

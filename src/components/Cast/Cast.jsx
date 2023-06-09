import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../services/getMovies';
import css from './Cast.module.css';
import defaultImg from '../defolt-img/defaultImg.jpeg';
import PropTypes from 'prop-types';


const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data));
  }, []);

  return (
    <div className={css.castWrapp}>
      <ul className={css.castList}>
        {cast.map(item => (
          <li key={item.id} className={css.castItem}>
            <img
              className={css.castImg}
              src={
                item.profile_path === null
                  ? defaultImg
                  : `https://image.tmdb.org/t/p/w300/${item.profile_path}`
              }
              alt={item.name}
            />
            <p className={css.castMainText}>{item.name}</p>
            <p className={css.castText}>{item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
}

export default Cast;

import { useEffect, useState } from 'react';
import { searchMovies } from '../services/getMovies';
import ListMovies from '../ListMovies/ListMovies';
import css from './FilteredMovies.module.css'
import { useSearchParams } from "react-router-dom";
import PropTypes from 'prop-types';



const FilteredMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const param = searchParams.get("query") || '';

  useEffect(() => {
    if(!param) return 
    setLoading(true);
    searchMovies(param)
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });

  }, [param])

  const handleChange = e => {
    setQuery(e.target.value);
  };

 

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return alert('Enter text');
    }
    setSearchParams({ query });
  };

  return (
    <div className={css.filterWrapp}>
      <form onSubmit={e => handleSubmit(e)} className={css.filterForm}>
        <input className={css.filterInput}
          type="text"
          name="query"
          value={query}
          onChange={e => handleChange(e)}
          placeholder="Search movies"
        />
        <button type="submit" className={css.filterBtn}>Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error occurred while loading movies.</p>
      ) : (
        <ListMovies movies={movies} />  
      )}
    </div>
  );
};

FilteredMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
}

export default FilteredMovies;

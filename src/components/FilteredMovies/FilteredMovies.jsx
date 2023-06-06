import { useEffect, useState } from 'react';
import { searchMovies } from '../services/getMovies';
import ListMovies from '../ListMovies/ListMovies';
import css from './FilteredMovies.module.css'

const FilteredMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    searchMovies(query)
      .then(data => {
        setMovies(data);
        console.log(data);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  }, [query, loading, error]);

  useEffect(() => {
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredMovies(filtered);
  }, [movies, query]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return alert('Enter text');
    }
    searchMovies(query);
  };

  return (
    <div className={css.filterWrapp}>
      <form onSubmit={handleSubmit} className={css.filterForm}>
        <input className={css.filterInput}
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="Search movies"
        />
        <button type="submit" className={css.filterBtn}>Search</button>
      </form>
      <ListMovies movies={filteredMovies} />
    </div>
  );
};

export default FilteredMovies;

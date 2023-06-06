import React from 'react';
import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import css from './App.module.css'

import Home from './Home/Home';
import FilteredMovies from './FilteredMovies/FilteredMovies';
import ListMovies from './ListMovies/ListMovies';

export const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const onSubmit = query => {
    if (setQuery === query) {
      alert('Already shown');
      return;
    }
    setQuery(query);
    setMovies([]);
  };

  return (
    <div>
      <div className={css.header}>
        <NavLink to="/" end className={css.headerTitle}>
          Home
        </NavLink>
        <NavLink to="/movies" end className={css.headerTitle}>
          Movies
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<FilteredMovies onSubmit={onSubmit} />}>
          {/* <Route path="/movies:query" element={<ListMovies />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

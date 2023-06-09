import React, { Suspense } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import css from './App.module.css';


const Home = React.lazy(() => import('./Home/Home'));
const FilteredMovies = React.lazy(() => import('./FilteredMovies/FilteredMovies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

export const App = () => {
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<FilteredMovies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

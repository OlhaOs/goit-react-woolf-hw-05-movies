import { useState } from 'react';
import css from './SearchForm.module.css';

export const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');
  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit(query);
  };
  return (
    <form className={css.searchForm} onSubmit={handleFormSubmit}>
      <input
        className={css.searchInput}
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

import css from './SearchForm.module.css';

export const SearchForm = ({ handleSubmit, query, setSearchParams }) => {
  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchInput}
        value={query}
        onChange={e => setSearchParams({ query: e.target.value })}
      />
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

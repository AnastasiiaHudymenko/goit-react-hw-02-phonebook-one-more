import css from './Filter.module.css';

export const Filter = ({ filterName }) => {
  return (
    <label className={css.label}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        onChange={filterName}
        type="text"
        name="filter"
      />
    </label>
  );
};

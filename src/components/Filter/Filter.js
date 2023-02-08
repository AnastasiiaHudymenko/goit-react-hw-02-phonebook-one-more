import css from './Filter.module.css';
import PropTypes from 'prop-types';
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

Filter.propTypes = {
  filterName: PropTypes.func.isRequired,
};

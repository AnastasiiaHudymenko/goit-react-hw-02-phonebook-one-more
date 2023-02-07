export const Filter = ({ filterName }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={filterName} type="text" name="filter" />
    </label>
  );
};

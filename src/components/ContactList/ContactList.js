export const ContactList = ({ filterList, handlDelete }) => {
  return (
    <ul>
      {filterList().map(({ id, name, number }, index) => {
        return (
          <li key={id}>
            <span>{name}</span>: <span>{number}</span>
            <button id={index} onClick={handlDelete} type="button">
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

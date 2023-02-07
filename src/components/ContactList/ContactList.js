import css from './ContactList.module.css';

export const ContactList = ({ filterList, handlDelete }) => {
  return (
    <ul className={css.list}>
      {filterList().map(({ id, name, number }, index) => {
        return (
          <li className={css.item} key={id}>
            <div>
              <span className={css.spanName}>{name}</span>{' '}
              <span className={css.span}>:</span>
              <span className={css.spanPhone}>{number}</span>
            </div>

            <button
              className={css.btnDelete}
              id={index}
              onClick={handlDelete}
              type="button"
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

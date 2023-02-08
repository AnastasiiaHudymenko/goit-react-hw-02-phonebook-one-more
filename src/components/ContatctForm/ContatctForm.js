import React from 'react';

import css from './ContactForm.module.css';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  trackInputName = event => {
    const { currentTarget: input } = event;
    this.setState({ [input.name]: input.value });
  };

  handlAddContact = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { handlAddContact, trackInputName, state } = this;
    return (
      <form className={css.form} onSubmit={handlAddContact}>
        <label className={css.label}>
          <p className={css.labelName}>Name</p>
          <input
            className={css.input}
            value={state.name}
            onChange={trackInputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          <p className={css.labelName}>Number</p>
          <input
            className={css.input}
            value={state.number}
            onChange={trackInputName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

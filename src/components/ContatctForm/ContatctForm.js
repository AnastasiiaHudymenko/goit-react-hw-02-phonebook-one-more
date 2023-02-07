import React from 'react';

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
  };

  render() {
    const { handlAddContact, trackInputName, state } = this;
    return (
      <form onSubmit={handlAddContact}>
        <label>
          Name
          <input
            value={state.name}
            onChange={trackInputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            value={state.number}
            onChange={trackInputName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

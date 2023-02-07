import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContatctForm/ContatctForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  trackInputFilter = event => {
    const { currentTarget: input } = event;
    this.setState({ [input.name]: input.value });
  };

  filterListName = () => {
    const normalizeName = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(normalizeName)
    );
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.some(el => el.name === name)) {
      return Notify.failure(`${name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handlDelete = event => {
    const { id } = event.target;
    console.log(id);
  };

  render() {
    const { trackInputFilter, filterListName, addContact, handlDelete } = this;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter filterName={trackInputFilter} />
        <ContactList filterList={filterListName} handlDelete={handlDelete} />
      </div>
    );
  }
}

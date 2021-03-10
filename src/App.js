import React, { Component } from 'react';

import FormContacts from './Components/FormContacts/FormContacts';
import Filter from './Components/Filter/Filter';
import ListContacts from './Components/ListContacts/ListContacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedСontacts = JSON.parse(contacts);

    if (parsedСontacts) {
      this.setState({ contacts: parsedСontacts });
    }
  }

  componentDidUpdate(prevState) {
    const nextСontacts = this.state.contacts;
    const prevСontacts = prevState.contacts;

    if (nextСontacts !== prevСontacts) {
      localStorage.setItem('contacts', JSON.stringify(nextСontacts));
    }
  }

  handleSubmit = ({ name, number }) => {
    const isInContacts = this.state.contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    const { value } = event.target;

    this.setState({
      filter: value,
    });
  };

  handlerDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const contactsToShow = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <FormContacts onSubmit={this.handleSubmit} />

        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ListContacts contacts={contactsToShow} onDelete={this.handlerDelete} />
      </>
    );
  }
}

export default App;

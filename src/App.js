import React, { Component } from 'react';

import FormContacts from './Components/FormContacts/FormContacts';
import Filter from './Components/Filter/Filter';
import ListContacts from './Components/ListContacts/ListContacts';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    console.log('App componentDidMount');

    // const todos = localStorage.getItem('todos');
    // const parsedTodos = JSON.parse(todos);

    // if (parsedTodos) {
    //   this.setState({ todos: parsedTodos });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    //   const nextTodos = this.state.todos;
    //   const prevTodos = prevState.todos;

    //   if (nextTodos !== prevTodos) {
    //     console.log('Обновилось поле todos, записываю todos в хранилище');
    //     localStorage.setItem('todos', JSON.stringify(nextTodos));
    //   }

    //   if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
    //     this.toggleModal();
    //   }
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
        <h1>Phonebook</h1>
        <FormContacts onSubmit={this.handleSubmit} />

        <h1>Contacts</h1>
        <Filter value={filter} onChange={this.changeFilter} />

        <ListContacts contacts={contactsToShow} onDelete={this.handlerDelete} />
      </>
    );
  }
}

export default App;

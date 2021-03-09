import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FormContacts.module.css';

class FormContacts extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.name === '') {
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label className="label">
          Name
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="input"
          />
        </label>
        <label className="label">
          Phone Number
          <input
            type="tel"
            placeholder="Enter phone number"
            name="number"
            value={number}
            onChange={this.handleChange}
            className="input"
          />
        </label>
        <button
          type="submit"
          disabled={name === '' || number === '' ? true : false}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default FormContacts;

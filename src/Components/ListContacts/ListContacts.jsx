import React from 'react';
import ContactItem from '../ContactItem';

import PropTypes from 'prop-types';

const ListContacts = ({ contacts, onDelete }) => {
  return (
    <ul className="container list">
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListContacts;

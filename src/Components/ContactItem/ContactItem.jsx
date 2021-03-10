import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
  const { id, number, name } = contact;

  const handleDelete = id => onDelete(id);

  return (
    <li key={id} id={id} className="contact">
      <p>
        {name}: {number}
      </p>
      <button type="button" className="btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className="label">
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="inputFinder"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

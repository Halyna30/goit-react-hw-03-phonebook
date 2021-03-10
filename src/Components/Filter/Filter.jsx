import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className="container">
    <label className="label">
      Find contacts by name
      <input type="text" value={value} onChange={onChange} className="input" />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

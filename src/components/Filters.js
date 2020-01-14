import React from 'react';
import '../styles/filters.scss';
import PropTypes from 'prop-types';

const Filters = (props) => {

  const handleSearch = (ev) => {
    props.handleSearch({
      value: ev.target.value
    });
  }



  return (
    <div className="container">
      <label for="Search Character" className="filter__label">Who are you looking for?</label>
      <input
        type="text"
        className="filter__input"
        placeholder="Search Character"
        onChange={handleSearch}
        value={props.value} />
    </div>
  );
}

Filters.propTypes = {
  handleSearch: PropTypes.func,
  value: PropTypes.string
}


export default Filters;
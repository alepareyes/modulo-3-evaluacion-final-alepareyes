import React from 'react';
import '../styles/filters.scss';

const Filters = (props) => {

  const handleSearch = (ev) => {
    props.handleSearch({
      value: ev.target.value
    });
  }

  return (
    <div className="container">
      <input
        type="text"
        className="filter__input"
        placeholder="Search Character"
        onChange={handleSearch} />
    </div>
  );
}

export default Filters;
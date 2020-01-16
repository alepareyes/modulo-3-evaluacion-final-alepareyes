import React from 'react';
import '../styles/filters.scss';
import PropTypes from 'prop-types';

const Filters = (props) => {


  const handleSearch = (ev) => {
    props.handleSearch({
      value: ev.target.value
    });
  }

  const handleSpecies = (ev) => {
    props.handleSpecies({
      searchSpecies: ev.target.value
    });
  }

  const handleGender = (ev) => {
    props.handleGender({
      searchGender: ev.target.value
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
      <div>

        <label
          className="filter__label"
          name="species"
          htmlFor="alien">
          Alien

            <input
            className="filter__input"
            type="radio"
            id="alien"
            name="species"
            value="Alien"
            onChange={handleSpecies}
          // checked={props.searchSpecies === "Alien"}
          />
        </label>



        <label
          className="filter__label"
          name="species"
          htmlFor="human">
          Human

        <input
            className="filter__input"
            type="radio"
            id="human"
            name="species"
            value="Human"
            onChange={handleSpecies}
          />
        </label>


        <label
          className="filter__label"
          name="all"
          htmlFor="all">
          All

        <input
            className="filter__input"
            type="radio"
            id="all"
            name="species"
            value=""
            onChange={handleSpecies}

          />
        </label>
      </div>

      <select onChange={handleGender} value={props.genderSearch} name="fitler__select">
        <option value="Male">Male</option>
        <option value="Female" >Female</option>
        <option value="Unknow">Unknow</option>
        <option value="" onChange={handleGender}>All</option>
      </select>
    </div>);
}

Filters.propTypes = {
  handleSearch: PropTypes.func,
  value: PropTypes.string
}


export default Filters;
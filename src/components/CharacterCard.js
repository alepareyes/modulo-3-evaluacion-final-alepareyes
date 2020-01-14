import React from 'react';
import '../styles/characterCard.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {

  const { id, image, name, species } = props.characters;

  return (
    <div className="card">
      <Link to={`/character/${id}`}>
        <img className="card__img" src={image} alt={image} />
        <p className="card__name">{name}</p>
        <span className="card__specie">{species}</span>
      </Link>
    </div>
  )
}

CharacterCard.propTypes = {
  characters: PropTypes.object.isRequired
}

export default CharacterCard;
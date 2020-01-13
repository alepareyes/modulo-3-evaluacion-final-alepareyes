import React from 'react';
import '../styles/characterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  return (
    <div className="card">
      <Link to={`/character/${props.characters.id}`}>
        <img className="card__img" src={props.characters.image} />
        <p className="card__name">{props.characters.name}</p>
        <span className="card__specie">{props.characters.species}</span>
      </Link>
    </div>
  )
}

export default CharacterCard;
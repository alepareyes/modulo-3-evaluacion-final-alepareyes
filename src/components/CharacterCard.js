import React from 'react';
import '../styles/characterCard.scss';

const CharacterCard = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.characters.image} />
      <p className="card__name">{props.characters.name}</p>
      <span className="card__specie">{props.characters.species}</span>
    </div>
  )
}

export default CharacterCard;
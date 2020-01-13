import React from 'react';
import '../styles/characterDetail.scss';

const CharacterDetail = (props) => {
  return (
    <div className="details__container">
      <div className="details">
        <img className="details__img"></img>
        <h2>{props.characters.name}</h2>
        <ul className="details__info">
          <li className="details__info--">
            hola
          </li>
          <li className="details__info--">

          </li>
          <li className="details__info--">

          </li>
          <li className="details__info--">

          </li>
          <li className="details__info--">

          </li>
        </ul>
      </div>
    </div>
  )
}

export default CharacterDetail;
import React from 'react';
import '../styles/characterDetail.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


const CharacterDetail = (props) => {

  return (
    <div className="container">

      <div className="details">

        <img className="details__img" src={props.character.image} />
        <div>

          <Link to="/">
            <div className="btn">
              <FontAwesomeIcon className="icon--exit" icon={faTimesCircle} />
            </div>
          </Link>
          <ul className="details__info">
            <h2 className="details__info--name">{props.character.name}</h2>
            <li className="details__info--specie">
              <strong>Specie:</strong> {props.character.species}
            </li>
            <li className="details__info--">
              <strong>Planet:</strong> {props.character.origin.name}
            </li>
            <li className="details__info--">
              <strong> Status:</strong> {props.character.status}
            </li>
            <li className="details__info--">
              <strong>Episodes:</strong> {props.character.episode.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail;
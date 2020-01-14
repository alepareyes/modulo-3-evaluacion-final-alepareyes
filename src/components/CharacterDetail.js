import React from 'react';
import '../styles/characterDetail.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { GiAlienSkull, GiPerson } from "react-icons/gi";
import { FaBookDead, FaHeartbeat } from 'react-icons/fa';


const CharacterDetail = (props) => {

  function whichSpecie(specie) {
    if (specie === "Alien") {
      return <GiAlienSkull />
    } else {
      return <GiPerson />
    }
  }


  function whichStatus(status) {
    if (status === "Alive") {
      return <FaHeartbeat />
    } else if (status === "unknown") {
      return
    } else {
      return <FaBookDead />
    }
  }




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
          <div className="icons">{whichSpecie(props.character.species)} {whichStatus(props.character.status)}</div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail;
import React from 'react';
import '../styles/characterDetail.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { GiAlienSkull, GiPerson } from "react-icons/gi";
import { FaBookDead, FaHeartbeat } from 'react-icons/fa';
import PropTypes from 'prop-types';


const CharacterDetail = (props) => {

  function whichSpecie(specie) {
    if (specie === "Alien") {
      return <GiAlienSkull className="icon--alien" />
    } else {
      return <GiPerson className="icon--human" />
    }
  }


  function whichStatus(status) {
    if (status === "Alive") {
      return <FaHeartbeat className="icon--heart" />
    } else if (status === "unknown") {
      return
    } else {
      return <FaBookDead className="icon--dead" />
    }
  }

  const { image, name, species, origin, status, episode } = props.character;


  return (
    <div className="container">

      <div className="details">

        <img className="details__img" src={image} />
        <div>

          <Link to="/" >
            <div className="btn">
              <FontAwesomeIcon className="icon--exit" icon={faTimesCircle} />
            </div>
          </Link>
          <ul className="details__info">
            <h2 className="details__info--name">{name}</h2>
            <li className="details__info--specie">
              <strong>Specie:</strong> {species}
            </li>
            <li className="details__info--">
              <strong>Planet:</strong> {origin.name}
            </li>
            <li className="details__info--">
              <strong> Status:</strong> {status}
            </li>
            <li className="details__info--">
              <strong>Episodes:</strong> {episode.length}
            </li>
          </ul>
          <div className="icons">{whichSpecie(species)} {whichStatus(status)}</div>
        </div>
      </div>
    </div>
  )
}

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterDetail;
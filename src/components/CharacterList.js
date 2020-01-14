import React from 'react';
import CharacterCard from './CharacterCard';
import '../styles/characterList.scss';
import PropTypes from 'prop-types';


const CharacterList = (props) => {

  const notFound = props.characters.length === 0 ? <p className="notfound">Character not found :( sorry!!</p> : ""

  return (
    <div className="list">
      {notFound}
      {props.characters.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            characters={character} />
        )
      })}

    </div>
  )
}

CharacterList.propTypes = {
  filteredCharacters: PropTypes.func
}


export default CharacterList;
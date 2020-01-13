import React from 'react';
import CharacterCard from './CharacterCard';
import '../styles/characterList.scss'

const CharacterList = (props) => {
  console.log(props.characters)
  return (
    <div className="list">
      {props.characters.map((character) => {
        return (
          <CharacterCard
            characters={character} />
        )
      })}

    </div>
  )
}

export default CharacterList;
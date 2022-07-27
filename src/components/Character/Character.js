import React from 'react'
import './Character.css'

const Character = ({character}) => {

    return (
        <div className='card'>
            <div className='img-container'>
                <img src={character.img} alt={character.name}/>
            </div>
            <div className='info'>
                <h2>{character.name}</h2>
                <p><span>Birthday:</span> {character.birthday}</p>
                <p><span>Occupation:</span> {character.occupation[0]}</p>
                <p><span>Actor:</span> {character.portrayed}</p>
                <p><span>Status:</span> {character.status}</p>
            </div>
        </div>
    )
}

export default Character
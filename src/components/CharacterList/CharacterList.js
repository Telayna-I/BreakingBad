import React, { useEffect, useState } from 'react'
import Character from '../Character/Character'
import './CharacterList.css'

const CharacterList = () => {

    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        const listCharacters = async () =>{
            const characters = await fetch('https://www.breakingbadapi.com/api/characters')
            const response = await characters.json()
            setCharacters(response)
            console.log(response)
        }
    
        listCharacters()
    },[])

    return (
        <div className='main'>
            {characters !== null ? characters.map(character =>(
                <Character character={character} key={character.char_id} />
            )) : 'empty'}
        </div>
    )
}

export default CharacterList
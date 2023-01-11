import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allCharactersService } from '../services/characters.services'

function Characters() {
  const navigate = useNavigate()
  const [allCharacters, setAllCharacters] = useState([])
  const [fetching, isFetching] = useState(false)

  useEffect(() => {
    getAllCharacters()
  },[])

  const getAllCharacters = async () => {
    try {
      const responseAllCharacter = await allCharactersService()
      setAllCharacters(responseAllCharacter.data.data.results)
      isFetching(true)
    } catch (error) {
      navigate ('/error')
    }
  }

  if (!fetching) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-50 font-mono pt-20'>{
        allCharacters.map((eachCharacter) =>{
          return(
          <div className='grid place-content-center w-full h-full px-2' key={eachCharacter.id}>
            <Link to={`/characters/${eachCharacter.id}`}>
              <img className='object-cover h-48 w-full rounded-2xl' src={`${eachCharacter.thumbnail.path}.${eachCharacter.thumbnail.extension}`} alt={eachCharacter.name}/>
            </Link>
            <Link className='mb-2 bg-gradient-to-r from-red-300 to-red-800  grid place-content-center h-12 rounded-md font-bold' to={`/characters/${eachCharacter.id}`}>
              {eachCharacter.name}
            </Link>
          </div>

          )  
        })  
      }
    </div>
  )
}

export default Characters
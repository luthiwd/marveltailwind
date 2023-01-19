import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { allCharactersService } from '../services/characters.services'

export let GetAllChars = () => {
  const navigate = useNavigate()
  const [offset, setOffset] = useState(0)
  const [allCharacters, setAllCharacters] = useState([])
  const [fetching, isFetching] = useState(true)
  
  useEffect(() => {
    getAllCharacters(offset)
  },[offset])

  const getAllCharacters = async (offSet) => {
    try {
      console.log('Offset en Hook', offSet)
      const responseAllCharacter = await allCharactersService(offSet)
      setAllCharacters(responseAllCharacter.data.data.results)
      isFetching(false)
    } catch (error) {
      navigate ('/error')
    }
  }

  return {
    fetching,
    allCharacters,
    offset,
    setOffset,
    getAllCharacters
    }
  
}


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { allCharactersService } from '../services/characters.services'

export let GetAllChars = () => {
  const navigate = useNavigate()
  const [allCharacters, setAllCharacters] = useState([])
  const [fetching, isFetching] = useState(true)
  let offSet = 0; 

  useEffect(() => {
    getAllCharacters()
  },[])

  const getAllCharacters = async () => {
    try {
      const responseAllCharacter = await allCharactersService(offSet)
      console.log('offset', offSet);
      setAllCharacters(responseAllCharacter.data.data.results)
      isFetching(false)
    } catch (error) {
      navigate ('/error')
    }
  }

  return {
    fetching,
    allCharacters,
    offSet,
    getAllCharacters
  }
}


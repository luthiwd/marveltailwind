import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import { allCharactersService } from '../services/characters.services'

function CharactersPage({ offset, setOffset, currentPage, setCurrentPage }) {

  const navigate = useNavigate()
  const [allCharacters, setAllCharacters] = useState([])
  const [fetching, isFetching] = useState(true)
  
  const getAllCharacters = async (offSet) => {
    try {
      const responseAllCharacter = await allCharactersService(offSet)
      setAllCharacters(responseAllCharacter.data.data.results.slice(0,20))
      isFetching(false)
    } catch (error) {
      navigate ('/error')
    }
  }

  useEffect(() => {
    getAllCharacters(offset)
  },[offset, currentPage])

    
  if (fetching) {
    return(
      <div>
        Loading...
      </div>
    )
  }
  
  return (
    <div>

      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 h-50 font-mono pt-20'>{
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
      <Pagination setOffset={setOffset} offset={offset} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default CharactersPage
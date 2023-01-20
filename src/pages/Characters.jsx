import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allCharactersService } from '../services/characters.services'

function CharactersPage() {
  
  const navigate = useNavigate()
  const [offset, setOffSet] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [characterCount, setCharacterCount] = useState(20)
  const [allCharacters, setAllCharacters] = useState([])
  const [total, setTotal] = useState(0)
  const [fetching, isFetching] = useState(true)
  
  const getAllCharacters = async (offset) => {
    
    try {
      // const responseAllCharacter = await allCharactersService(offset)
      // console.log('offset', offset)
      // setAllCharacters(responseAllCharacter.data.data.results)
      // console.log('allChars', responseAllCharacter.data.data.results);
      const response = await allCharactersService(offset)
        setAllCharacters(allCharacters => [...allCharacters, ...response.data.data.results])
        setTotal(response.data.data.total)
        if (response.data.data.results.length === 100){
            setOffSet(offset + 100)
        }
        isFetching(false)
    } catch (error) {
        navigate ('/error')
    }
  }

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    if (characterCount < total){
      setCharacterCount (characterCount + 20)
    }
  }

  
  const currentCharacters = allCharacters.slice((currentPage - 1 )*20, currentPage*20)

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    getAllCharacters(offset)
  },[offset])

    
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
        currentCharacters.map((eachCharacter) =>{
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
    <div className='grid-cols-3 place-content-center justify-center'>
      <button className="bg-gradient-to-r from-slate-300 to-black rounded-2xl px-2 mx-2 text-white w-40" onClick={handlePrevClick} disabled={currentPage === 1} hidden={currentPage === 1}>Previous</button>
      <span className='bg-gradient-to-r from-slate-300 to-slate-600 rounded-2xl px-2 mx-2 w-40'>Page {currentPage}</span>
      <button className='bg-gradient-to-l from-slate-300 to-black rounded-2xl px-2 mx-2 text-white w-40' onClick={handleNextClick}>Next</button>
    </div>
    </div>
  )
}

export default CharactersPage
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GetAllChars } from '../hooks/GetAllChars'
import { allCharactersService } from '../services/characters.services'

function CharactersPage() {

  let {fetching, allCharacters, offSet, getAllCharacters} = GetAllChars()
  const [currentPage, setCurrentPage] = useState(0)
  
  const filteredChar = () => {
    return allCharacters.slice(currentPage,currentPage + 20)
  }

  const nextPage = () => {
    let numberPage = 0;
    setCurrentPage(currentPage + 20)
    numberPage = numberPage + 1
    console.log('numeropagina', numberPage)
    if (allCharacters.length === 100) {
      offSet = numberPage;
      getAllCharacters(offSet)
    }   
  }
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
        filteredChar().map((eachCharacter) =>{
          return(
          <div className='grid place-content-center w-full h-full px-2' key={eachCharacter.id}>
            <Link to={`/characters/${eachCharacter.name}`}>
              <img className='object-cover h-48 w-full rounded-2xl' src={`${eachCharacter.thumbnail.path}.${eachCharacter.thumbnail.extension}`} alt={eachCharacter.name}/>
            </Link>
            <Link className='mb-2 bg-gradient-to-r from-red-300 to-red-800  grid place-content-center h-12 rounded-md font-bold' to={`/characters/${eachCharacter.name}`}>
              {eachCharacter.name}
            </Link>
          </div>

          )  
        })  
      }
    </div>
      <div>
        <button className="btn bg-gradient-to-r from-red-300 to-red-800 rounded-md px-2 py-2 hover:from-red-400 hover:to-red-900" onClick={nextPage} >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default CharactersPage
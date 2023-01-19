import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { charDetailsService } from '../services/characters.services'

function CharacterDetailsPage() {

  const navigate = useNavigate ()
  const { id } = useParams()
  const [charDetails, setCharDetails] = useState("")
  const [fetching, isFetching] = useState(false)
  
  useEffect(() => {
    getChar()
  },[])

  const getChar = async () => {
    try {
      const infoChar = await charDetailsService(id)
      setCharDetails(infoChar.data.data.results)
      console.log("detalles", infoChar.data.data.results)
      isFetching(true)
    } catch (error) {
      navigate('/error')
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
    <div className='place-content-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-50 font-mono pt-20'>
      <div className='grid place-content-center'>
        {/* <img className='sm:w-48 lg:w-72 rounded-2xl' src={`${charDetails.thumbnail.path}.${charDetails.thumbnail.extension}`} alt={charDetails.name}/> */}
          {charDetails.name}
      </div>
  
    </div>
  )
}

export default CharacterDetailsPage
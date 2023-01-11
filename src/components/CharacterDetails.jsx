import { charDetailsService } from '../services/characters.services'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CharacterDetails(props) {
  const navigate = useNavigate ()
  const { id } = useParams()
  const [charDetails, setCharDetails] = useState([])
  const [fetching, isFetching] = useState(false)

  useEffect(() => {
    getCharDetails()
  },[])

  const getCharDetails = async () => {
    try {
      const responseCharDetails = await charDetailsService(id)
      setCharDetails(responseCharDetails.data.data.results)
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
    <div className='place-content-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-50 font-mono pt-20'>
      {charDetails.map ((eachChar) => {
        return(
          <div className='grid place-content-center'>
            <img className='sm:w-48 lg:w-72 rounded-2xl' src={`${eachChar.thumbnail.path}.${eachChar.thumbnail.extension}`} alt={eachChar.name}/>
            {eachChar.name}
          </div>
        )
      })
      }
    </div>
  )
}

export default CharacterDetails
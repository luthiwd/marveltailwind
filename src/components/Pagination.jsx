import React, { useState } from 'react'

function Pagination({setOffset,offset,currentPage, setCurrentPage}) {

  
  
  
  const handleNextClick = () => {
    //setOffset(offset + 20);
    setCurrentPage(currentPage + 1);
  }
  const handlePrevClick = () => {
    setOffset(offset - 20);
    setCurrentPage(currentPage - 1);
  }
  
  return (
    <div className='grid-cols-3 place-content-center justify-center'>{
      !offset === 0 ? <button onClick={handlePrevClick}>Previous</button> : <div className="bg-gradient-to-r from-slate-300 to-black rounded-2xl px-2 mx-2 text-white w-40"></div>}
      <button className="bg-gradient-to-r from-slate-300 to-black rounded-2xl px-2 mx-2 text-white w-40" onClick={handlePrevClick} disabled={offset === 0} hidden={offset === 0}>Previous</button>
      <span className='bg-gradient-to-r from-slate-300 to-slate-600 rounded-2xl px-2 mx-2 w-40'>Page {currentPage}</span>
      <button className='bg-gradient-to-l from-slate-300 to-black rounded-2xl px-2 mx-2 text-white w-40' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Pagination
import React from 'react'

function Pagination({setOffset,offset,currentPage, setCurrentPage}) {
  
  const handleNextClick = () => {
    setOffset(offset + 20);
    setCurrentPage(currentPage + 1);
  }
  const handlePrevClick = () => {
    setOffset(offset - 20);
    setCurrentPage(currentPage - 1);
  }
  
  return (
    <div>{
      !offset === 0 ? <button onClick={handlePrevClick}>Previous</button> : <></>}
      <button onClick={handlePrevClick} disabled={offset === 0} hidden={offset === 0}>Previous</button>
      <span>Page {currentPage}</span>
      <button onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Pagination
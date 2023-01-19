
import './App.css';
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'

//Pages
import CharactersPage from './pages/Characters';
import CharacterDetailsPage from './pages/CharacterDetails';

//Errors
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

function App() {
  const [offset, setOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<CharactersPage offset={offset} setOffset={setOffset} currentPage={currentPage} setCurrentPage={setCurrentPage}/>} />
        <Route path='/characters/:id' element={<CharacterDetailsPage />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

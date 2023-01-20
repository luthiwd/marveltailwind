
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
    
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/characters/:id' element={<CharacterDetailsPage />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

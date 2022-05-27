import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WebMeme</h1>
      </header>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

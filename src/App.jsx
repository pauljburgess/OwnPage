import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Nav from './ components/Nav'
import Home from './ components/Home'
import About from './ components/About'
import DataScience from './ components/DataScience'
import WebDev from './ components/WebDev'

function App() {
 
  return (
    <div>

      <Nav />
      <h1>Paul Burgess</h1>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/WebDev" element={<WebDev/>}/>
          <Route path="/DataScience" element={<DataScience/>}/>
        </Routes>
      </main>

    </div>
  )
}

export default App

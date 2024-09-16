import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Nav from './ components/Nav'
import Home from './ components/Home'
import About from './ components/About'
import DataScience from './ components/DataScience'
import WebDev from './ components/WebDev'
import Header from './ components/Header'

function App() {
 
  return (
    <div>

      <Header />
      <main>
        <Nav />
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

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Components from './pages/Components.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Routes>
        {/* Home page – landing screen */}
        <Route path="/" element={<Home />} />

        {/* Components showcase page */}
        <Route path="/components" element={<Components />} />
      </Routes>

      {/* Footer shown on all pages */}
      <Footer />
    </>
  )
}

export default App
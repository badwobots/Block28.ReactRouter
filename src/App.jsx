import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Blue from './Blue.jsx';
import Red from './Red.jsx';
import Home from './Home.jsx';
import Container from './Container.jsx';
import Navbar from './NavBar.jsx';
import Footer from './Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
      <Container>
      <h1>Hello React Router!</h1>
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />   
        </Routes>
        </div>
        <Footer />
      </Container>
  )
}

export default App

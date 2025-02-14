import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Features from "./pages/Features";
import Docs from "./pages/Docs";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App

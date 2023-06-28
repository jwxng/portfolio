import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'

function App() {
  return (
    <div className="app">
      <Router className="router">
        
        <Routes className="routes">
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<div><Header /><About /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

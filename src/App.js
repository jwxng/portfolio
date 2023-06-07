// TODO: make a global.css

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage'

function App() {
  return (
    <div className="app">
      <Router className="router">
        <Routes className="routes">
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

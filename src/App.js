import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="app">
      <Router className="router">
        <Header />
        <Routes className="routes">
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

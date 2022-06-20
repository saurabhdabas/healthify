import React from 'react';
import ReactDOM from 'react-dom/client';
import Exercise from './components/Exercise';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="exercises/exercise/:id" element={<Exercise/>} />
    </Routes>
  </Router>
);


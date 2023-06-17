import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdmissionForm from './components/AdmissionForm';
import End from './components/End';
// import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={< AdmissionForm />} />
          <Route path="/end" element={<End />} />
        </Routes>
    </Router>
  );
}

export default App;

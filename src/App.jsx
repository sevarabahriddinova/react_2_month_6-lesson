// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import StudentListPage from './components/StudentListPage';
import './styles.css'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify'; 
import './styles.css';

function App() {
  return (
   <div>
     <Router>
      <nav>
        <Link to="/" className="nav-link">
          Register
        </Link>
        <Link to="/students" className="nav-link">
          Student List
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/students" element={<StudentListPage />} />
      </Routes>
    </Router>
    <ToastContainer />
   </div>
  );
}

export default App;

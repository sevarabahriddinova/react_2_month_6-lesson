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
   <div className='w-[800px] m-auto'>
     <Router>
      <nav>
        <div className=' flex gap-8 my-[50px]'>
        <Link to="/" className="text-[28px] shadow-2xl p-6 rounded-lg bg-orange-200">
          Register
        </Link>
        <Link to="/students" className="text-[28px] shadow-2xl p-6 rounded-lg bg-orange-200 ">
          Student List
        </Link>
        </div>
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

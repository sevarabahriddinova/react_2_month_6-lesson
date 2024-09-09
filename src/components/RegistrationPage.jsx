
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../store/studentsSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles.css';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(addStudent({ name, age, email }));
    setName('');
    setAge('');
    setEmail('');
    navigate('/students');
  };

  return (
    <form onSubmit={handleRegister} className="registration-container shadow-xl p-6 rounded-lg bg-orange-200 ">
      <h2 className='text-yellow-800 font-bold text-[24px] my-4'>Student Registration</h2>
     <div className='flex flex-col gap-4 items-center'>
     <input className=' w-full border p-2 border-yellow-800 rounded-lg'
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input className=' w-full border p-2 border-yellow-800 rounded-lg'
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input className=' w-full border p-2 border-yellow-800 rounded-lg'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className='text-[24px] border flex justify-center p-2 w-[200px] rounded-lg border-blue-800 bg-blue-400'>Register</button>
     </div>
    </form>
  );
};

export default RegistrationPage;

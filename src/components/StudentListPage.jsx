// src/pages/StudentListPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, deleteStudent } from '../store/studentsSlice';
import { Link } from 'react-router-dom';
import './studentList.css';

const StudentListPage = () => {
  const { list, searchTerm } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const filteredStudents = list.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (confirmDelete) {
      dispatch(deleteStudent(index));
    }
  };

  return (
    <div className="list-container bg-white p-8">
      <div className='flex justify-between'>
        <h2 className='text-[28px] font-bold '>Student List</h2>

        <input className='w-[400px] p-2 bg-gray-200 outline-none rounded-xl'
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </div>
      <table>
        <thead className=''>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index} className=''>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-student-button">
        <Link to="/">Add Student</Link>
      </button>
    </div>
  );
};

export default StudentListPage;

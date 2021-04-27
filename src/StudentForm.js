import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addStudent, updateStudent } from './helpers/data/studentData';

const StudentForm = ({ formTitle, setStudents, ...args }) => {
  const [student, setStudent] = useState({
    name: args?.name || '',
    teacher: args?.teacher || '',
    grade: args?.grade || 0,
    firebaseKey: args?.firebaseKey || null
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.firebaseKey) {
      updateStudent(student.firebaseKey, student).then((response) => setStudents(response));
    } else {
      addStudent(student).then((response) => setStudents(response));
    }
  };
  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value
    }));
  };
  return (
    <>
      <div className="student-form">
        <form
          id="addStudentForm"
          autoComplete="off"
          onSubmit={handleSubmit}
          >
          <h2>{formTitle}</h2>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={student.name}
            onChange={handleInputChange}
          ></input>
          <label>Teacher: </label>
          <input
            name="teacher"
            type="text"
            placeholder="Teacher"
            value={student.teacher}
            onChange={handleInputChange}
          ></input>
          <label>Grade: </label>
          <input
            name="grade"
            type="number"
            placeholder="Grade"
            value={student.grade}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func.isRequired,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number,
  firebaseKey: PropTypes.string,
};

export default StudentForm;

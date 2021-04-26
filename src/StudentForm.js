import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StudentForm = ({ formTitle, handleSubmit }) => {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0,
  });
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
          onSubmit={(e) => handleSubmit(e, student)}
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
  handleSubmit: PropTypes.func.isRequired
};

export default StudentForm;

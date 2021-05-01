import React from 'react';
import PropTypes from 'prop-types';
import StudentForm from '../StudentForm';

function AddStudent({ setStudents }) {
  return (
  <>
    <StudentForm
    formTitle='Add Student'
    setStudents={setStudents}
    />
  <hr />
 </>
  );
}
AddStudent.propTypes = {
  setStudents: PropTypes.func.isRequired,
};
export default AddStudent;

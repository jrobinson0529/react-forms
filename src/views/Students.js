import React from 'react';
import PropTypes from 'prop-types';
import StudentCard from '../components/StudentCard';

function Students({ students, setStudents }) {
  return (
    <div className='App'>
      <div className='student-card-container d-flex flex-wrap'>
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          {...studentInfo}
          // firebaseKey={studentInfo.firebaseKey}
          // name={studentInfo.name}
          // grade={Number(studentInfo.grade)}
          // teacher={studentInfo.teacher}
          setStudents={setStudents}
          />
      ))}
      </div>
    </div>
  );
}
Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
};
export default Students;

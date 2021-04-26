import React, { useEffect, useState } from 'react';
import './App.scss';
import StudentForm from '../StudentForm';
import { addStudent, getStudents } from '../helpers/data/studentData';
import StudentCard from '../components/StudentCard';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  const handleSubmit = (e, student) => {
    e.preventDefault();
    addStudent(student).then(() => getStudents().then((response) => setStudents(response)));
  };
  return (
    <div className='App'>
      <StudentForm formTitle='Add Student' handleSubmit={handleSubmit} />
      <hr />
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          name={studentInfo.name}
          grade={Number(studentInfo.grade)}
          teacher={studentInfo.teacher}
          handleClick={() => console.warn(`${studentInfo.name}'s teacher is ${studentInfo.teacher}`)}
          />
      ))}
    </div>
  );
}

export default App;

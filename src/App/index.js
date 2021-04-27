import React, { useEffect, useState } from 'react';
import './App.scss';
import StudentForm from '../StudentForm';
import { getStudents } from '../helpers/data/studentData';
import StudentCard from '../components/StudentCard';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  return (
    <div className='App'>
      <StudentForm
        formTitle='Add Student'
        setStudents={setStudents}
        />
      <hr />
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

export default App;

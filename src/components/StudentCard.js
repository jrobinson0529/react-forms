import React, { useState } from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/studentData';
import StudentForm from '../StudentForm';

export default function StudentCard({ setStudents, ...student }) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteStudent(student.firebaseKey)
          .then((response) => setStudents(response));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };
  return (
    <>
      <Card
          body
          inverse
          style={{
            backgroundColor: '#333',
            borderColor: '#333',
            margin: '10px',
            width: '15em'
          }}
        >
          <CardTitle tag='h5'>{student.name}</CardTitle>
          <CardText>Grade: {student.grade}</CardText>
          <CardText>Teacher: {student.teacher}</CardText>
          <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
          <Button color='info' onClick={() => handleClick('edit')}>Edit</Button>
          {
            editing && <StudentForm
            formTitle='Edit Student'
            setStudents={setStudents}
            {...student}
          />
          }
        </Card>
    </>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  setStudents: PropTypes.func,
  firebaseKey: PropTypes.string.isRequired
};

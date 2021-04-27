import React from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteStudent } from '../helpers/data/studentData';

export default function StudentCard({
  name,
  grade,
  teacher,
  setStudents,
  firebaseKey
}) {
  const handleClick = () => {
    deleteStudent(firebaseKey)
      .then((response) => setStudents(response));
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
          <CardTitle tag='h5'>{name}</CardTitle>
          <CardText>Grade: {grade}</CardText>
          <CardText>Teacher: {teacher}</CardText>
          {<Button color='danger' onClick={handleClick}>Delete</Button>}
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

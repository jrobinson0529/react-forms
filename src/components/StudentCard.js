import React from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function StudentCard({
  name,
  grade,
  teacher,
  handleClick
}) {
  return (
    <>
      <Card
          body
          inverse
          style={{ backgroundColor: '#333', borderColor: '#333', margin: '10px' }}
        >
          <CardTitle tag='h5'>{name}</CardTitle>
          <CardText>Grade: {grade}</CardText>
          <CardText>Teacher: {teacher}</CardText>
          {handleClick ? <Button onClick={handleClick}>Print Student</Button> : ''}
        </Card>
    </>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

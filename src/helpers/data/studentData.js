import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;
const getStudents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/students.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addStudent = (studentObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/students.json`, studentObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/students/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Student Added', studentObject)));
    })
    .catch((error) => reject(error));
});

export { getStudents, addStudent };

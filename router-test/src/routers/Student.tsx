import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data.json"
import { useParams } from 'react-router-dom';

const Student = () => {
  const student = data.data.student;

  console.log(student);
  return (
    <div>
      <h1>학생명단</h1>
      {student.map((item)=>
        <h4 key={item.id}>
          <Link to={`/student/${item.id}`}>
            {item.name};
          </Link>
        </h4>
      )}
    </div>
  );
};

export default Student;
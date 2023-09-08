import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";

const exampleData = [
  {
    courseName: 'Web Development Fundamentals',
    creator: 'John Doe',
  },
  {
    courseName: 'React Masterclass',
    creator: 'Jane Smith',
  },
  {
    courseName: 'JavaScript Essentials',
    creator: 'Alice Johnson',
  },
];

const Course = () => {
  return (
    <div>
      <h1>Course Page</h1>
      {exampleData.map((data, index) => (
        <CourseCard
          key={index}
          courseName={data.courseName}
          creator={data.creator}
        />
      ))}
      <Link to="/login">login</Link>
      <Link to="/home">about</Link>
      <Link to="/course">contact</Link>
      <Link to="/startcourse">products</Link>
      <Footer></Footer>
    </div>
  );
};

export default Course;

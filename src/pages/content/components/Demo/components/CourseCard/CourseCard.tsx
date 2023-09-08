import React, { useState } from 'react';

const cardStyle: React.CSSProperties = {
  borderRadius: '10px',
  padding: '20px',
  border: '1px solid #ccc',
  backgroundColor: '#4D4D4D',
  transition: 'transform 0.3s',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: '30px',
  height: '70px', // Adjust the height as needed
  width: '400px', // Adjust the width as needed
};

const hoverCardStyle: React.CSSProperties = {
  transform: 'scale(1.03)',
};

const courseNameStyle: React.CSSProperties = {
  color: 'black',
  fontWeight: 600,
  fontSize: '20px', // Adjust the font size as needed
  marginBottom: '10px',
  fontFamily: 'Roboto, sans-serif',
};

const creatorStyle: React.CSSProperties = {
  color: 'rgba(0, 0, 0, 0.5)',
  fontWeight: 300,
  fontSize: '16px', // Adjust the font size as needed
  fontFamily: 'Roboto, sans-serif',
};

type Props = {
  courseName: string;
  creator: string;
};

const CourseCard: React.FC<Props> = ({ courseName, creator }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={isHovered ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={courseNameStyle}>{courseName}</h2>
      <span style={creatorStyle}>{creator}</span>
    </div>
  );
};

export default CourseCard;

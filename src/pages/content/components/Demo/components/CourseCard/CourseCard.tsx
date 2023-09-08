import React from 'react';

const cardStyle: React.CSSProperties = {
  borderRadius: '10px',
  padding: '20px',
  backgroundColor: 'white', /* So the text is easily readable */
  transition: 'transform 0.3s',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', /* A subtle shadow for added depth */
  marginBottom: '30px',
};

const hoverCardStyle: React.CSSProperties = {
  transform: 'scale(1.1)',
};

const courseNameStyle: React.CSSProperties = {
  color: 'black',
  fontWeight: 600, /* A heavier font-weight for modern style */
  fontSize: '24px',
  marginBottom: '10px',
  fontFamily: 'Roboto, sans-serif', /* Example of a modern font */
};

const creatorStyle: React.CSSProperties = {
  color: 'rgba(0, 0, 0, 0.5)', /* 50% opacity for lesser prominence */
  fontWeight: 300, /* Lighter font-weight */
  fontSize: '18px',
  fontFamily: 'Roboto, sans-serif',
};

type Props = {
  courseName: string;
  creator: string;
};

const CourseCard: React.FC<Props> = ({ courseName, creator }) => {
  return (
    <div
      style={cardStyle}
      onMouseEnter={() => (cardStyle.transform = "scale(1.1)")}
      onMouseLeave={() => (cardStyle.transform = "")}
    >
      <h2 style={courseNameStyle}>{courseName}</h2>
      <span style={creatorStyle}>{creator}</span>
    </div>
  );
};

export default CourseCard;

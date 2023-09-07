import React from 'react';
import styles from './CourseCard.module.css';

type Props = {
  courseName: string;
  creator: string;
};

const CourseCard: React.FC<Props> = ({ courseName, creator }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.courseName}>{courseName}</h2>
      <span className={styles.creator}>{creator}</span>
    </div>
  );
};

export default CourseCard;

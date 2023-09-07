import React from 'react';
import styles from './ProjectCard.module.css';

type Props = {
  name: string;
  tags: string[];
  isFree: boolean;
  price?: number;
};

const ProjectCard: React.FC<Props> = ({ name, tags, isFree, price }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.projectName}>{name}</h2>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.price}>
        {isFree ? "Free" : `$${price}`}
      </div>
    </div>
  );
};

export default ProjectCard;

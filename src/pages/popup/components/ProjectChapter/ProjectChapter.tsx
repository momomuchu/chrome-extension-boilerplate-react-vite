import React from 'react';
import styles from './ProjectChapter.module.css';

type Chapter = {
    title: string;
    description: string;
};

type Props = {
    chapters: Chapter[];
};

const ProjectChapter: React.FC<Props> = ({ chapters }) => {
    return (
        <div className={styles.container}>
            {chapters.map((chapter, index) => (
                <div key={index} className={styles.chapter}>
                    <h2 className={styles.title}>{chapter.title}</h2>
                    <p className={styles.description}>{chapter.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectChapter;

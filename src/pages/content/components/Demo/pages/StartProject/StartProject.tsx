import React from 'react';
import styles from './StartProject.module.css';

type Props = {
    appScreen: string;  // URL or path to the image showing the app screen
    projectName: string;
    projectDescription: string;
    tags: string[];
};

const StartProject: React.FC<Props> = ({ appScreen, projectName, projectDescription, tags }) => {
    return (
        <div className={styles.container}>
            <img src={appScreen} alt="App screen" className={styles.appScreen} />
            <h1 className={styles.projectName}>{projectName}</h1>
            <p className={styles.projectDescription}>{projectDescription}</p>
            <div className={styles.tags}>
                {tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>
            <button className={styles.startButton}>Start Project</button>
        </div>
    );
};

export default StartProject;

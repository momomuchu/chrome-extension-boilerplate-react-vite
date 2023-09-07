import React, { useState } from 'react';
import styles from './ChapterCard.module.css';

type Section = {
    title: string;
    tag: string;
};

type Props = {
    chapterName: string;
    sections: Section[];
};

const ChapterCard: React.FC<Props> = ({ chapterName, sections }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className={styles.chapterContainer}>
            <div className={styles.chapter} onClick={() => setDropdownOpen(!dropdownOpen)}>
                {chapterName}
            </div>
            {dropdownOpen && (
                <div className={styles.sections}>
                    {sections.map((section, index) => (
                        <div key={index} className={styles.section}>
                            {section.title} <span className={styles.tag}>{section.tag}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChapterCard;

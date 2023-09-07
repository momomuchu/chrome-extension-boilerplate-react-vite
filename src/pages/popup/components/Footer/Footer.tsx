import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <span>Our Website</span>
            <span>|</span>
            <span> License</span>
            <span>|</span>
            <span>Join Discord</span>
        </footer>
    );
};

export default Footer;

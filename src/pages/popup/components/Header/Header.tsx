import React, { useState } from 'react';
import styles from './Header.module.css';

type Props = {
    onLogout: () => void;
    profilePic: string;
};

const Header: React.FC<Props> = ({ onLogout, profilePic }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>YourLogoHere</div>
            <div className={styles.right}>
                <span className={styles.referring}>🎁</span>
                <img 
                    src={profilePic} 
                    alt="Profile" 
                    className={styles.profilePic} 
                    onClick={() => setDropdownOpen(!dropdownOpen)} 
                />
                {dropdownOpen && (
                    <div className={styles.dropdown}>
                        <button onClick={onLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

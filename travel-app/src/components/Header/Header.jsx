import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <div>Logo</div>
            <div>Searchbar</div>
            <div>Authorization</div>
        </div>
    )
}

export default Header;
import React from 'react';
import styles from './Header.module.scss'
import SelectLang from '../Select/SelectLang'

const Header = () => {
    return (
        <div className={styles.header}>
            <div>Logo</div>
            <div>Searchbar</div>
            <SelectLang />
        </div>
    )
}

export default Header;
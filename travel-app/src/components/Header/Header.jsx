import React from 'react';
import styles from './Header.module.scss'
import SelectLang from '../Select/SelectLang'
import LangContext from '../../App'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Link to={`/`} >
            <div className={styles.header}>
                <div>
                    <img src="./globe.svg" alt="Logo" className={styles.logo}/>
                </div>
                <div></div>
                <SelectLang />
            </div>
        </Link>

    )
}

export default Header;
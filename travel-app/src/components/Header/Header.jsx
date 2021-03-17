import React from 'react';
import styles from './Header.module.scss'
import SelectLang from '../Select/SelectLang'
import LangContext from '../../App'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
     
            <div className={styles.header}>
                <Link to={`/`} >
                {/* <div className={styles.logo} style={{
                    backgroundImage: "url(globe.svg)"
                }}>
                      </div> */}
                    <img src="./globe.svg" alt="Logo" className={styles.logo}/>
              
                </Link>
                <div></div>
                <SelectLang />
            </div>
       

    )
}

export default Header;
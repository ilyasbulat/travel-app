import React from 'react';
import styles from './Header.module.scss'
import SelectLang from '../Select/SelectLang'
import LangContext from '../../App'

const Header = () => {
    return (
        <div className={styles.header}>
            {/* <LangContext.Consumer>
                <div>Logo</div>
                <div>Searchbar</div>
                <SelectLang value={value}/>
            </LangContext.Consumer> */}
            <div>Logo</div>
            <div>Searchbar</div>
            <SelectLang />
        </div>
    )
}

export default Header;
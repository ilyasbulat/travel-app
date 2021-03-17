import styles from './Footer.module.scss'

const Footer = () => {

  return (
    <div className={styles.footer}>
        <div className={styles.left}>
            <a href="https://rs.school/js/">
                <img src="./rs-logo.svg" alt="rsschool" className={styles.logo}/>
            </a>
            <div className={styles.year}>2021</div>
        </div>
        <div className={styles.authors}>
            <a href="https://github.com/Kadamir24" className={styles.author}>Kadamir24</a>
            <a href="https://github.com/ilyasbulat" className={styles.author}>ilyasbulat</a>
            <a href="https://github.com/temir-cs" className={styles.author}>temir-cs</a>
            <a href="https://github.com/aitzhans" className={styles.author}>aitzhans</a>
        </div>
    </div>
  );
}

export default Footer;
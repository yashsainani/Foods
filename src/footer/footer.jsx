import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles['footer-section']}>
                <h1>BURGIRRR</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deserunt veniam. Lorem ipsum dolor sit amet consectetur.</p>
                <ul className={styles.nav}>
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
                <ul className={styles.social}>
                    <li className={styles.facebook}>
                        <i class="fa-brands fa-facebook"></i>
                    </li>
                    <li className={styles.insta}>
                        <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li className={styles.twitter}>
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li className={styles.github}>
                        <i class="fa-brands fa-github"></i>
                    </li>
                    <li className={styles.dribble}>
                        <i class="fa-brands fa-dribbble"></i>
                    </li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;
import Btn from "../button/button";
import styles from "./nav.module.css";

const Nav = ({bgColor}) => {
    return (
        <nav style={{backgroundColor: bgColor}} className={styles.nav}>
            <section className={styles['logo-section']}>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
                <h1 className={styles.logo}>GeekFoods</h1>
            </section>
            <ul className={styles.ul}>
                <li className={styles.home}>Home</li>
                <li className={styles.quote}>Quote</li>
                <li className={styles.restaurants}>Restaurants</li>
                <li className={styles.foods}>Foods</li>
                <li className={styles.contact}>Contact</li>
            </ul>
            <section className={styles.more}>
                <Btn className={styles.btn} text={'Get Started'} />
                <Btn className={styles.menu} text={'Menu'}/>
            </section>
        </nav>
    );
};

export default Nav;
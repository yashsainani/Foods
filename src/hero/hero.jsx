import Btn from '../button/button';
import styles from './hero.module.css';

const Hero = () => {
    return (
        <section className={styles["hero-section"]}>
            <section className={styles.info}>
                <h1 className={styles['first-heading']}>Let Us Find Your</h1>
                <h1 className={styles['second-heading']}>Forever Food</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam molestias obcaecati magnam. Quasi accusamus voluptatem ex, nobis delectus nihil, vero eos dicta asperiores porro obcaecati nulla, et reiciendis fugiat aspernatur!</p>
                <section className={styles['btn-section']}>
                    <Btn className={styles.btn1} text={'Search Now'} />
                    <Btn className={styles.btn2} text={'Know More'} />
                </section>
            </section>
        </section>
    );
};

export default Hero;
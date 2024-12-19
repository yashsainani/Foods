import Btn from '../button/button';
import styles from './imgComponent.module.css';

const ImgComponent = () => {
    return (
        <section className={styles.container}>
            <div className={styles['img-div']}>
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="home" className={styles.img} />
            </div>
            <div className={styles.info}>
                <h1 className={styles.heading}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi voluptatibus nihil doloribus sapiente unde.</h1>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, eveniet? Beatae quod repellendus quidem fugit, earum rem vitae ipsam fuga consequuntur aliquid eum sint iusto minima, eius magnam nulla cumque.</p>
                <Btn className={styles.btn} text={'Get In Touch'} />
            </div>
        </section>
    );
};

export default ImgComponent;
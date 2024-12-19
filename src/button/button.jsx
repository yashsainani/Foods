import styles from './button.module.css';

const Btn = ({className, text}) => {
    return <button type="button" className={`${styles.btn} ${className}`}>{text}</button>
};

export default Btn;
import styles from './commentsCard.module.css';

const CommentsCard = ({className, comment, img, user, post}) => {
    return (
        <section className={`${className} ${styles.container}`}>
            <div className={styles.comment}>
                <p>{comment}</p>
            </div>
            <div className={styles.info}>
                <img src={img} alt="user" />
                <div className={styles['user-info']}>
                    <p className={styles.user}>{user}</p>
                    <p className={styles.post}>{post}</p>
                </div>
            </div>
        </section>
    );
};

export default CommentsCard;
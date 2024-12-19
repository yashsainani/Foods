import Hero from '../hero/hero';
import ImgComponent from '../imgComponent/imgComponent';
import CommentsCard from '../commentsCard/commentsCard';
import Footer from '../footer/footer';
import styles from './home.module.css';

const data = [
    {
        comment : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aliquid amet odit unde adipisci, quisquam odio, nostrum quod laudantium illo itaque molestiae dolores excepturi. Earum enim rem quo nostrum quasi veniam molestias facilis! Corrupti autem quas nisi consectetur nesciunt provident.',
        img : 'https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80',
        name : 'Gladis Lennon',
        post : 'Head of SEO'
    },
    {
        comment : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, nisi libero! Modi maiores, molestias placeat soluta vitae nostrum quasi similique. Maxime non voluptatum quasi voluptates doloremque, pariatur accusantium aut repellat.',
        img : 'https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name : 'Jake karon',
        post : 'SDE-2'
    },
    {
        comment : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis illo, aut ipsum quas optio totam quis laborum temporibus repudiandae unde accusamus eos perferendis alias placeat sequi natus necessitatibus quasi odio? Accusamus esse, quasi cum aliquam exercitationem enim ea veritatis velit ipsam, illo hic, soluta amet totam placeat sit illum! Reiciendis deleniti est nobis corporis amet aliquam magni, placeat vitae ducimus.',
        img : 'https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name : 'Steffy Chris',
        post : 'HR'
    },
    {
        comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aspernatur autem tenetur hic sunt, vero mollitia? Odio aliquam debitis similique.',
        img : 'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name : 'Jacob Evans',
        post : 'Data Analyst'
    },
    {
        comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium non doloremque assumenda debitis ut tempora voluptatibus culpa, provident laborum blanditiis corporis consequatur obcaecati quae velit eos fuga minima sed! Vel minima repellat repellendus quisquam labore saepe earum laudantium voluptatibus.',
        img : 'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name : 'Bruce Wayne',
        post : 'SDE-2'
    },
    {
        comment : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eius, est dignissimos neque ratione aperiam sed ad illum animi saepe. Hic adipisci at facilis iste praesentium veniam debitis accusamus nostrum?',
        img : 'https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name : 'Devin Nelson',
        post : 'HR'
    }
];

const Home = () => {
    return (
        <section className={styles.home}>
            <Hero />
            <ImgComponent />
            <div className={styles['commentsCard-container']}>
                {
                    data.map((ele, idx) => <CommentsCard key={`${ele.name}_${idx}`} className={styles.commentCard} comment={ele.comment} img={ele.img} user={ele.name} post={ele.post} />)
                }
            </div>
            <Footer />
        </section>
    );
};

export default Home;
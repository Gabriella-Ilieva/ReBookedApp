import styles from './About.module.css'
import Logo from '../../assets/images/logo_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


function About() {
    return(
        <div className={styles.container}>
            <h2>About <img src={Logo} alt="Logo" width="150" height="35"/></h2>
            <p>Hi there! I'm Gabriella, the founder of Re-Booked. My journey with this platform began with a simple yet profound realization – the incredible potential that lies in the pages of a book and the positive change that can be fueled by a community of passionate readers.</p>
            <p>At Re-Booked, my mission is to create a community-driven platform that empowers individuals to make a positive impact through the sale and donation of used books. We believe in the transformative power of knowledge and aim to harness it for the greater good. By connecting book lovers with meaningful causes, we strive to build a world where every book sale contributes to positive change.</p>
            <p>My vision is a world where the love for books becomes a catalyst for social change. We envision a global community where individuals can easily share, sell, or gift their beloved books, knowing that each transaction supports a cause they are passionate about. Through this collective effort, we aspire to foster a culture of generosity, sustainability, and lifelong learning.</p>
            <h5><b>Platform Values:</b></h5>
            <p><b>Community Empowerment:</b> Fostering a sense of community where every book has the power to make a difference.</p>
            <p><b>Sustainability:</b> Promoting the eco-friendly practice of recycling books to reduce waste and carbon footprint.</p>
            <p><b>Transparency:</b> Ensuring openness and clarity in our operations, so users can trust that their contributions are making a meaningful impact.</p>
            <p><b>Inclusivity:</b> Building a diverse and inclusive platform that welcomes individuals from all walks of life.</p>
            <p><b>Social Impact:</b> Channeling the proceeds from book sales to support causes that address pressing social and environmental challenges."</p>
            <h5><b>At Re-Booked you can:</b></h5>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Sell your book to benefit a cause of your choice, directly mentioning the cause</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Give your book to a book lover in need</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Sell your book and put the money into doing something meaningful and good</p>
            <p><FontAwesomeIcon icon={faCircleCheck} /> Buy a book with mission</p>
        </div>
    );
}

export default About;
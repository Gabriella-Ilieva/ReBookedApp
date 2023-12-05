import Logo from '../../assets/images/logo_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <img src={Logo} alt="Logo" width="150" height="35"/>
      <p>Made with <FontAwesomeIcon icon={faHeart} className={styles.icon}/> by GABBY</p>
    </div>
  );
}

export default Footer;
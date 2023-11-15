import {Container, Navbar} from 'react-bootstrap'
import Logo from '../assets/images/Logo.png'
import styles from './Footer.module.css'


function Footer() {
return (
<div className={styles.footerContainer}>
  <div>
      <p>Made with love by Gabby</p>
  </div>
</div>
);
}

export default Footer;
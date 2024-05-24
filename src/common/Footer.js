import '../App.css';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className="footer-section">
            <div>
                <div className='footer-topic'>Contact Me</div>
                    <a href="mailto:kalyanikurkure@gmail.com" target="_blank" rel="noopener noreferrer">
                        <SiGmail size={30} style={{ color: '#D14836', margin: '10px' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/kalyani-kurkure-578972218/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{ color: '#0077B5', margin: '10px' }} />
                    </a>
            </div>
            <div>
                <br />
                <div className='footer-desc'>Developed by <Link to={'https://www.linkedin.com/in/rupal-jain16/'}>Rupal Jain</Link></div>
            </div>
        </div>
    )
}

export default Footer;
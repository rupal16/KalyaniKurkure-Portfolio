import '../App.css';
import { Link } from 'react-router-dom';

function Header () {
    return(
        <div className="header-section">
         <div className='header-left'>
            <Link to={'/'} className='header-name' style={{textDecoration:'none', color:'black'}}>Kalyani Sunil Kurkure</Link>
            <div className='header-title'>Student</div>
         </div>
         <div className='header-right'>
            <Link to={'/resume'} className='header-options' style={{textDecoration:'none', color:'black'}}>Resume</Link>
            <div className='vertical-div'></div>
            <Link to={'/projects'} className='header-options' style={{textDecoration:'none', color:'black'}}>Projects</Link>
            <div className='vertical-div'></div>
            <Link to={'/certifications'} className='header-options' style={{textDecoration:'none', color:'black'}}>Certifications</Link>
         </div>
        </div>
    )
}

export default Header;
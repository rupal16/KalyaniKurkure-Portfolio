import '../App.css';
import { Link } from 'react-router-dom';
import profile from '../images/profile.jpg';

const categories = [
    {
        title:'Resume',
        bg:'#C1DE6A',
        linkToPage:'/resume',
    },{
        title:'Projects',
        bg:'#F0C568',
        linkToPage:'/projects',
    },{
        title:'Certifications',
        bg:'#80D8DA',
        linkToPage:'/certifications',
    }
];

function Home(){
    return (
        <div className='home-section'>
            {/* <div className="home-pic"> */}
            <div className='home-section-top'>
                <img className="home-pic" src={profile} alt='profile img' />
                {/* </div> */}
                <div className='home-right'>
                    <div className='home-name'>Kalyani Sunil Kurkure</div>
                    <div className='home-subtitle'>A bit about me</div>
                    <div className='home-about'>I am Kalyani Sunil Kurkure. I am from Jalgaon, Maharashtra. I am currently pursuing PGDM Finance from N l dalmia Institute of management studies and research, Mumbai.
Graduated with a Bachelor of Management Studies in Finance from Wilson college, Mumbai.
I like to spend my free time sketching which enhances my concentration skills. I also like to sew various types of bags, preciously ran a micro scale business selling my hand made creations.
I am a self starter with strong interpersonal skills and always likes to explore new things by grabing opportunities to grow.</div>
                </div>
            </div>
            <div className='home-section-bottom'>
                {categories.map((category, index) => <Link to={category.linkToPage} className='home-category hover-effect' style={{backgroundColor:`${category.bg}`, textDecoration:'none', color:'black'}}>{category.title}</Link>)}
            </div>
        </div>
    )
}

export default Home;
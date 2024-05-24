import '../App.css';
import ResumePreview from './ResumePreview';

function Resume(){
    return (
        <div className='resume-section'>
            <div className='section-title'>Resume</div>
                    <ResumePreview />
            {/* <div className='resume-download'>
                <a href="/resume.pdf" download="Resume.pdf">
                <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Download Resume
                </button>
                </a>
            </div> */}
        </div>
    )
}

export default Resume;
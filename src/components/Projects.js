import '../App.css';
import { FaFileExcel, FaFilePdf, FaFileWord } from 'react-icons/fa';

const projects = [
    {
        title:'War’s Grip on Global Trade',
        description: 'An article related to the global war scenario and how it was impacting the global trade routes the economic losses that the world had to face for it, that got published in the college magazine',
        fileType: 'docx',
        fileUrl: '/Article-GMC.docx'
    },{
        title:'One pager company profile’',
        description:'A “One Pager Company Profile” That was made for “Coal India” taking into account various aspects such as PE ratio EV/EBITDA Ratio Net Profit Margin etc. Also stating the shareholding pattern and management remuneration etc. A really good option if someone wants a snapshot of the company’s performance',
        fileType: 'pdf',
        fileUrl: '/One pager Coal India Final.pdf'
    },{
        title:'An analysis on the working Capital Management and Dividend Policy of “Bharat Forge Limited based on Historical Data’',
        description:'Calculation and Interpretation of various factors such as Cost of Equity, Cost of Capital, Cost of Debt etc. and also the dividend policy and structure analysis of the company based on the historical data has been performed',
        fileType: 'xlsx',
        fileUrl: '/Bharat Forge.xlsx'
    },{
        title:'Analysis of Mutual Funds',
        description:'A full-fledged report on the entire Mutual Fund Industry of India based on fators such as History , Working of Mutual Fund , Types of Mutual Fund etc. has been made as the Final year Graduation Project.',
        fileType: 'pdf',
        fileUrl: '/Blackbook.pdf'
    }
];

const DownloadButton = ({ fileType, fileUrl }) => {
    const renderIcon = () => {
      switch (fileType) {
        case 'xlsx':
          return <FaFileExcel style={{ color: 'green', marginRight:'6px' }} />;
        case 'pdf':
          return <FaFilePdf style={{ color: 'red', marginRight:'6px' }} />;
        case 'docx':
          return <FaFileWord style={{ color: 'blue', marginRight:'6px' }} />;
        default:
          return null;
      }
    };
  
    return (
      <a href={fileUrl} download>
        <button className='button'>
          {renderIcon()}
          Download
        </button>
      </a>
    );
  };
  

function Projects(){
    return (
        <div className='project-section'>
            <div className='section-title'>Projects</div>
            <div className='projects-list'>
                {projects.map(project => <div className='project-card'>
                    <div className='project-card-title'>
                        <div className='project-title'>{project.title}</div>
                        <div className='projects-download-btn'>
                        <DownloadButton fileType={project.fileType} fileUrl={project.fileUrl} />
                        </div>
                    </div>
                        <div className='project-desc'>{project.description}</div>
                </div>)}
            </div>
        </div>
    )
}

export default Projects;
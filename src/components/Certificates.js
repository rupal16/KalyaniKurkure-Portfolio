import '../App.css';
import { FaFileExcel, FaFilePdf, FaFileWord } from 'react-icons/fa';

const certificates = [
    {
        title:'Financial and Equity Market Analyst',
        fileType: 'pdf',
        fileUrl: '/Financial and Equity Market Analyst.pdf'
    },{
        title:'Investment Banker Analysis',
        fileType: 'pdf',
        fileUrl: '/Investment Banking Analysis Certificate.pdf'
    }, {
        title:'Bloomberg Market Concepts',
        fileType: 'pdf',
        fileUrl: '/BMC.pdf'
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
          View Certificate
        </button>
      </a>
    );
  };

function Certificates(){
    return (
        <div className='cert-section'>
            <div className='section-title'>Certifications</div>
            <div>
                {certificates.map(certificate => <div className='cert-card'>
                    <div className='cert-title'>{certificate.title}</div>
                    <div className='cert-view-btn'>
                    <DownloadButton fileType={certificate.fileType} fileUrl={certificate.fileUrl} />
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Certificates;
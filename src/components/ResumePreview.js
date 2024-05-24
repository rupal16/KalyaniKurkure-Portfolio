// src/Resume.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

const ResumePreview = () => {
  return (
    <div >
        
      <div className='resume-card'>
        <div
            className='resume-preview'
            style={{
            // border: '1px solid rgba(0, 0, 0, 0.3)',
            
            }}
        >
            <p style={{display:'flex', justifyContent:'flex-end', marginRight:'1.75rem'}}> 
            <a href="/resume.pdf" download="KalyaniKurkure_Resume.pdf">
            <button className='button'>
                Download Resume
            </button>
            </a>
        </p>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl="/Resume.pdf" />
            </Worker>
        </div>
        
      </div>
    </div>
  );
};

export default ResumePreview;

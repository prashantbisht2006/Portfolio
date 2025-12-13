import React from 'react';
import windowWrapper from '../HOC/windowWrapper';
import Windowcontrol from '#components/windowcontrol'; 
import { Download } from 'lucide-react';
import { Document,Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();






const Resume = () => {
  return (
    <>
      <div id="window-header">
        <Windowcontrol target="resume" />
        <h2>Resume.pdf</h2>
        <a href="files/resume.pdf" download className='cursor-pointer' title="Download resume">
        <Download className='icon'/>
        </a>
      </div>
       <Document file="files/resume.pdf" >
        <Page pageNumber={1} renderTextLayer rendorAnnptationLayer/>
      </Document>
    </>
  );
};

const Resumewindow = windowWrapper(Resume, 'resume');

export default Resumewindow;

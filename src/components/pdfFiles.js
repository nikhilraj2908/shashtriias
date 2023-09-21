import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// import './Sample.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const PDFFiles = (props) => {
  const [file, setFile] = useState(props.file.file);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1)

  const onDocumentLoadSuccess = (pdf) => {
    setNumPages(pdf.numPages);
  }

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  const previousPage = () => { changePage(-1); }
  const nextPage = () => { changePage(+1); }

  console.log(pageNumber, numPages)
  return (
    <div className="Example__container__document">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            <Page pageNumber={pageNumber} />
        </Document>
        <div class="page-controls">
            <button class='pagebtn' disabled={pageNumber <= 1} onClick={previousPage} type="button">‹ Prev</button>
            <button class='pagebtn' disabled={pageNumber === numPages} onClick={nextPage} type="button">Next ›</button>
        </div>
    </div>
  );
}

export default PDFFiles

import React, { useEffect, useState } from 'react'
import InactivityDetector from '../Shared/InactivityDetector';
import Navbar from '../Shared/Navbar';
import { TextAnimation } from '../Shared/TextAnimation';
import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();


const FullBrochure = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        setPageNumber(1);
        setNumPages(null);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    function goToPreviousPage() {
        setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
    }

    function goToNextPage() {
        setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
    }
    return (
        <InactivityDetector>
            <Navbar />
            <div className="overflow-hidden">
                <div className="header py-[2vw]">
                    <TextAnimation el="h1" className='text-white text-[2.4vw] text-center font-bold' text={'Full Brochure'} />
                </div>
                <div className="content bg-second opacity-80 h-[calc(100vh-7.6vw)]">
                    <div className="flex flex-col justify-between items-start w-full">
                        <div className="container">
                            <div className="my-[2vw]">
                                <div className="text-white text-center text-[1vw] mb-[0.8vw]">
                                    Page {pageNumber} of {numPages}
                                </div>
                                <div className="flex flex-row justify-center items-center">
                                    <button className="text-white bg-main-400 hover:bg-main-300 focus:ring-4 focus:ring-main-400 font-medium rounded-lg text-[1vw] px-[1.2vw] py-[0.5vw] me-[2vw] focus:outline-none disabled:bg-main-100 cursor-pointer mr-[1vw]"
                                        disabled={pageNumber <= 1} onClick={goToPreviousPage}>
                                        Previous
                                    </button>
                                    <div className="doc h-[36.5vw] w-[45vw] bg-white">
                                        <Document
                                            className=""
                                            file={process.env.PUBLIC_URL + '/assets/ducting.pdf'}
                                            onLoadSuccess={onDocumentLoadSuccess}
                                        >
                                            <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                                        </Document>
                                    </div>
                                    <button className="text-white bg-main-400 hover:bg-main-300 focus:ring-4 focus:ring-main-400 font-medium rounded-lg text-[1vw] px-[1.2vw] py-[0.5vw] ms-[2vw] focus:outline-none disabled:bg-main-100 cursor-pointer"
                                        disabled={pageNumber >= numPages} onClick={goToNextPage}>
                                        Next
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </InactivityDetector>
    )
}

export default FullBrochure
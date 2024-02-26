import React, { useEffect, useState } from 'react'
import InactivityDetector from '../Shared/InactivityDetector';
import Navbar from '../Shared/Navbar';
import { TextAnimation } from '../Shared/TextAnimation';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
                <div className="content bg-second opacity-90 h-[calc(100vh-7.6vw)]">
                    <div className="flex flex-col justify-between items-start w-full">
                        <div className="container">
                            <div className="my-[2vw]">
                                <div className="flex flex-row justify-center items-center">
                                    <motion.div className="doc h-[37vw] w-full bg-white"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                    >
                                        <Document
                                            className=""
                                            file={process.env.PUBLIC_URL + '/assets/ducting.pdf'}
                                            onLoadSuccess={onDocumentLoadSuccess}
                                        >
                                            <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                                        </Document>
                                    </motion.div>
                                </div>
                                <motion.div className="flex justify-center items-center mt-[1.5vw]">
                                    <motion.button
                                        className="text-white bg-main hover:bg-main-300 focus:ring-4 focus:ring-main font-medium rounded-lg text-[1vw] px-[1.2vw] py-[0.5vw] me-[2vw] focus:outline-none disabled:bg-main-100 cursor-pointer mr-[1vw]"
                                        disabled={pageNumber <= 1} onClick={goToPreviousPage}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                    >
                                        Previous
                                    </motion.button>
                                    <motion.div className="text-white text-center text-[1vw] mx-[2vw]"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    >
                                        Page {pageNumber} of {numPages}
                                    </motion.div>
                                    <motion.button className="text-white bg-main hover:bg-main-300 focus:ring-4 focus:ring-main font-medium rounded-lg text-[1vw] px-[1.2vw] py-[0.5vw] ms-[2vw] focus:outline-none disabled:bg-main-100 cursor-pointer"
                                        disabled={pageNumber >= numPages} onClick={goToNextPage}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}    
                                    >
                                        Next
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </InactivityDetector>
    )
}

export default FullBrochure
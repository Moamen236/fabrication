import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();
const Home = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        setPageNumber(1);
        setNumPages(null);
    }, []);

    const handleClick = () => {
        setIsHeaderVisible(false);
    };
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
        <>
            <div className="py-[2.1vw]">
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="container">
                        <div className="content">
                            <motion.div className="icons mt-[2vw]"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: isHeaderVisible ? 1 : 0, y: isHeaderVisible ? 0 : 50 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <div className="grid grid-rows-2 grid-flow-col gap-y-6">
                                    <motion.div className="z-10 text-center justify-self-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1}}
                                        transition={{ delay: 1.3, duration: 0.5 }}
                                    >
                                        <Link to={'/why-fabric'} onClick={handleClick}>
                                            <div className="image w-[15vw] mx-auto">
                                                <motion.img src={process.env.PUBLIC_URL + '/assets/images/home/why.gif'} className='w-full' alt=""
                                                    whileTap={{ scale: 1.1 }}
                                                />
                                            </div>
                                            <h3 className="mt-3 text-[1.1vw] font-bold text-white">
                                                Why Fabric
                                            </h3>
                                        </Link>
                                    </motion.div>
                                    <motion.div className="z-10 text-center justify-self-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1}}
                                        transition={{ delay: 1.5, duration: 0.5 }}
                                    >
                                        <Link to={'/advantages-of-fabricAir'} onClick={handleClick}>
                                            <div className="image w-[15vw] mx-auto">
                                                <motion.img src={process.env.PUBLIC_URL + '/assets/images/home/advantages.gif'} className='w-full' alt=""
                                                    whileTap={{ scale: 1.1 }}
                                                />
                                            </div>
                                            <h3 className="mt-3 text-[1.1vw] font-bold text-white">
                                                Advantages of FabricAir<sup>®</sup>
                                            </h3>
                                        </Link>
                                    </motion.div>
                                    <div className="grid grid-row-subgrid row-span-3 justify-self-center self-center">
                                        <motion.div className="header"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: isHeaderVisible ? 1 : 0, y: isHeaderVisible ? 0 : 50 }}
                                            transition={{ delay: 1, duration: 0.5 }}
                                        >
                                            <motion.div className="image w-[20vw] mx-auto"
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.1, duration: 0.5 }}
                                            >
                                                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} className='w-full' alt="" />
                                            </motion.div>
                                            <motion.h1 className='text-white text-[1.5vw] text-center font-bold mt-[2vw]'
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.2, duration: 0.5 }}
                                            >
                                                FABRICAIR<sup>®</sup> DUCTING<br />
                                                Simplicity • Performance • Aesthetics
                                            </motion.h1>
                                        </motion.div>
                                    </div>
                                    <motion.div className="z-10 text-center justify-self-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.3, duration: 0.5 }}
                                    >
                                        <Link to={'/suspension-types'} onClick={handleClick}>
                                            <div className="image w-[15vw] mx-auto">
                                                <motion.img src={process.env.PUBLIC_URL + '/assets/images/home/suspension.gif'} className='w-full' alt=""
                                                    whileTap={{ scale: 1.1 }}
                                                />
                                            </div>
                                            <h3 className="mt-3 text-[1.1vw] font-bold text-white">
                                                Suspension Types
                                            </h3>
                                        </Link>
                                    </motion.div>
                                    <motion.div className="z-10 text-center justify-self-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1}}
                                        transition={{ delay: 1.5, duration: 0.5 }}
                                    >
                                        <Link to={'/dispersion-types'} onClick={handleClick}>
                                            <div className="image w-[15vw] mx-auto">
                                                <motion.img src={process.env.PUBLIC_URL + '/assets/images/home/dispersion.gif'} className='w-full' alt=""
                                                    whileTap={{ scale: 1.1 }}
                                                />
                                            </div>
                                            <h3 className="mt-3 text-[1.1vw] font-bold text-white">
                                                Dispersion Types
                                            </h3>
                                        </Link>
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="z-10 text-center justify-self-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                >
                                    <button data-modal-target="pdf-presentation" data-modal-toggle="pdf-presentation" >
                                        <div className="image w-[15vw] mx-auto">
                                            <motion.img
                                                src={process.env.PUBLIC_URL + '/assets/images/home/full-brochure.gif'} className='w-full' alt=""
                                                whileTap={{ scale: 1.1 }}
                                            />
                                        </div>
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pdf-presentation" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 max-w-screen-lg max-h-full w-full">
                    <div className="relative bg-white rounded-lg shadow flex flex-col justify-center items-center w-fit">
                        <div className="p-4 md:p-5 space-y-4">
                            <Document
                                file={process.env.PUBLIC_URL + '/assets/ducting.pdf'}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
                            </Document>
                            <div className='flex flex-row justify-between items-center'>
                                <button className="text-white bg-main-400 hover:bg-main-300 focus:ring-4 focus:ring-main-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none disabled:bg-main-100 cursor-pointer" 
                                    disabled={pageNumber <= 1} onClick={goToPreviousPage}>
                                    Previous
                                </button>
                                <span className="text-black">
                                    Page {pageNumber} of {numPages}
                                </span>
                                <button className="text-white bg-main-400 hover:bg-main-300 focus:ring-4 focus:ring-main-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none disabled:bg-main-100 cursor-pointer" 
                                    disabled={pageNumber >= numPages} onClick={goToNextPage}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                className='slide-in'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* <motion.div
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            /> */}
        </>
    )
}

export default Home
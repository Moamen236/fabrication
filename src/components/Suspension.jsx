import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { TextAnimation } from '../Shared/TextAnimation';
import Navbar from '../Shared/Navbar';

const Suspension = () => {
    const [activeTab, setActiveTab] = useState('styled-type-1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (
        <>
            <Navbar />
            <div className="overflow-hidden">
                <div className="header py-[2vw]">
                    <TextAnimation el="h1" className='text-white text-[2.4vw] text-center font-bold' text={'Suspension Types'} />
                </div>
                <div className="content bg-second opacity-80 h-[calc(100vh-7.6vw)]">
                    <div className="flex flex-col justify-between items-start w-full">
                        <div className="flex justify-between w-full my-[2vw]">
                            <div className="mb-4">
                                <ul className="-mb-px text-sm font-medium" id="default-styled-tab"
                                    role="tablist"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 11, '11A', 12, 13].map(tabNum => (
                                        <li className="me-2" key={`type-${tabNum}-tab`} role="presentation">
                                            <button
                                                className={`w-[15vw] inline-block p-[0.7vw] border-b-2 ${activeTab === `styled-type-${tabNum}` ? 'text-main-500 hover:text-main border-main-500 font-bold bg-white' : 'hover:text-white-600 hover:border-white-300'}`}
                                                id={`type-${tabNum}-styled-tab`}
                                                onClick={() => handleTabClick(`styled-type-${tabNum}`)}
                                                type="button" role="tab" aria-controls={`type-${tabNum}`} aria-selected={activeTab === `styled-type-${tabNum}`}
                                            >Type {tabNum}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="container">
                                <div id="default-styled-tab-content" className='w-full'>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 11, '11A', 12, 13].map(tabNum => (
                                        <div className={`p-4 rounded-lg ${activeTab === `styled-type-${tabNum}` ? 'block' : 'hidden'}`} id={`styled-type-${tabNum}`} role="tabpanel" aria-labelledby={`type-${tabNum}-tab`} key={`styled-type-${tabNum}`}>
                                            <div className="flex justify-center items-start w-full">
                                                <motion.img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/suspension/${tabNum}.png`} className="w-[25vw] mr-[5vw]"
                                                    initial={{ opacity: 0, x: -100 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                                <motion.img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/suspension/0${tabNum}.png`} className="w-[31vw]"
                                                    initial={{ opacity: 0, x: 100 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suspension
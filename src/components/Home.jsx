import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleClick = () => {
        setIsHeaderVisible(false);
    };
    return (
        <>
            <div className="pb-[2.1vw] h-screen">
                <div className="flex flex-row justify-center items-center w-full">
                    <div className="container">
                        <div className="content">
                            <motion.div className="header"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isHeaderVisible ? 1 : 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <div className="image w-[20vw] mx-auto absolute top-0 right-[50%] translate-x-[50%] z-10">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} className='w-full' alt="" />
                                </div>
                                <h1 className='text-white text-[1.5vw] text-center font-bold absolute top-[8vw] right-[50%] translate-x-[50%] z-10'>
                                    FABRICAIR<sup>®</sup> DUCTING<br />
                                    Simplicity • Performance • Aesthetics
                                </h1>
                            </motion.div>
                            <div className="icons mt-[12vw]">
                                <div className="grid grid-rows-2 grid-flow-col gap-y-6">
                                    <motion.div className="z-10 text-center justify-self-center"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: isHeaderVisible ? 1 : 0, x: isHeaderVisible ? 0 : -50 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
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
                                    <motion.div className="z-10 text-center justify-self-center"
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: isHeaderVisible ? 1 : 0, x: isHeaderVisible ? 0 : -50 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                    >
                                        <Link to={'/fabric-types'} onClick={handleClick}>
                                            <div className="image w-[15vw] mx-auto">
                                                <motion.img src={process.env.PUBLIC_URL + '/assets/images/home/fabric-types.gif'} className='w-full' alt=""
                                                    whileTap={{ scale: 1.1 }}
                                                />
                                            </div>
                                            <h3 className="mt-3 text-[1.1vw] font-bold text-white">
                                                Fabric Types
                                            </h3>
                                        </Link>
                                    </motion.div>
                                    <div className="grid grid-row-subgrid row-span-3 justify-self-center self-center">
                                        <motion.div className="z-10 text-center justify-self-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
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
                                    </div>
                                    <motion.div className="z-10 text-center justify-self-center"
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: isHeaderVisible ? 1 : 0, x: isHeaderVisible ? 0 : 50 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
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
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: isHeaderVisible ? 1 : 0, x: isHeaderVisible ? 0 : 50 }}
                                        transition={{ delay: 0.7, duration: 0.5 }}
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
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <Link to={'/full-brochure'} onClick={handleClick}>
                                        <div className="image w-[16.2vw] mx-auto">
                                            <motion.img
                                                src={process.env.PUBLIC_URL + '/assets/images/home/full-brochure.gif'} className='w-full' alt=""
                                                whileTap={{ scale: 1.1 }}
                                            />
                                        </div>
                                    </Link>
                                </motion.div>
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
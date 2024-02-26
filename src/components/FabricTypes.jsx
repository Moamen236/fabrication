import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimation } from '../Shared/TextAnimation';
import Navbar from '../Shared/Navbar';
import InactivityDetector from '../Shared/InactivityDetector';


const FabricTypes = () => {
    return (
        <InactivityDetector>
            <Navbar />
            <div className="overflow-hidden">
                <div className="header py-[2vw]">
                    <TextAnimation el="h1" className='text-white text-[2.4vw] text-center font-bold' text={'Fabric Types'} />
                </div>
                <div className="content bg-second opacity-90 h-[calc(100vh-7.6vw)]">
                    <div className="flex flex-col justify-between items-start w-full">
                        <div className="container px-[8vw]">
                            <div className="grid grid-rows-2 grid-flow-col gap-x-5 gap-y-8 justify-center my-[2vw]">
                                <motion.div className="flex flex-col px-[2vw] justify-self-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                >
                                    <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                    >
                                        FabricAir<sup>®</sup> <span className='text-main font-bold'>Glass 220</span>
                                    </motion.h3>
                                    <motion.div
                                        className='mt-[0.8vw]'
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7, duration: 0.5 }}
                                    >
                                        <p className="mb-[0.8vw] text-gray-100">
                                            FabricAir<sup>®</sup> Glass 220 is woven with non-combustible glass fibers, class
                                            M0 / A2, making it ideal in areas with strict fi re rating requirements. The
                                            working temperature range goes from -40<sup>°</sup>C to +200<sup>°</sup>C [-40<sup>°</sup>F to 392<sup>°</sup>F].
                                            The material cannot be machine washed.
                                        </p>
                                        <p className="mb-[0.8vw] text-gray-100">
                                            The fabric is available in standard colors.
                                        </p>
                                        <p>
                                            All FabricAir<sup>®</sup> Glass 220 variants come with a 1-year warranty
                                        </p>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="flex flex-col px-[2vw] justify-self-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9, duration: 0.5 }}
                                    >
                                        FabricAir<sup>®</sup> <span className='text-main font-bold'>Lite</span>
                                    </motion.h3>
                                    <motion.div
                                        className='mt-[0.8vw]'
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <p className='mb-[0.8vw] text-gray-100'>
                                            FabricAir<sup>®</sup> Lite is a lightweight non-permeable Oeko-Tex 100 certifi ed
                                            fabric series that offers anti-microbial, fl ame retardant and anti-static
                                            options, making these fabric variants ideally suited in areas of strict
                                            hygiene. Due to the nature of the fabric, FabFlow<sup>™</sup> and long directional
                                            throw models using nozzles or jets are not an option.
                                        </p>
                                        <p className='mb-[0.8vw] text-gray-100'>
                                            FabricAir<sup>®</sup> Lite fabrics are machine washable and retain their
                                            dimensions after washing (max. 0.5% shrinkage).
                                        </p>
                                        <p className='mb-[0.8vw] text-gray-100'>
                                            The fabric is available in standard colors
                                        </p>
                                        <p>
                                            All FabricAir<sup>®</sup> Lite variants come with a 3-year warranty
                                        </p>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="flex flex-col px-[2vw] justify-self-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                >
                                    <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.3, duration: 0.5 }}
                                    >
                                        FabricAir<sup>™</sup> <span className='text-main font-bold'>Combi</span>
                                    </motion.h3>
                                    <motion.div
                                        className='mt-[0.8vw]'
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4, duration: 0.5 }}
                                    >
                                        <p className='mb-[0.8vw] text-gray-100'>
                                            FabricAir<sup>®</sup> Combi is available as permeable, non-permeable and fl ame
                                            retardant fabrics. All fabric variants are exceptionally strong and durable
                                        </p>
                                        <p className='mb-[0.8vw] text-gray-100'>
                                            FabricAir<sup>®</sup> Combi is Oeko-Tex 100 certifi ed. The fabric is machine
                                            washable and retains its dimensions after washing (max. 0.5%
                                            shrinkage). The permeability is uniform (max. 5% variation).
                                        </p>
                                        <p className='mb-[0.8vw] text-gray-100'>
                                            FabricAir<sup>®</sup> Combi 80 and Combi 90 are supplied with an anti-microbial
                                            treatment, which is specially developed for areas with strict hygiene
                                            requirements.
                                        </p>
                                        <p>
                                            The fabric is supplied in standard colors, with the option of surface print
                                            and other custom graphic prints.
                                        </p>
                                    </motion.div>
                                </motion.div>
                                <motion.div className="flex flex-col px-[2vw] justify-self-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.6, duration: 0.5 }}
                                >
                                    <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.7, duration: 0.5 }}
                                    >
                                        FabricAir<sup>®</sup> <span className='text-main font-bold'>Poly</span>
                                    </motion.h3>
                                    <motion.div
                                        className='mt-[0.8vw]'
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.8, duration: 0.5 }}
                                    >
                                        <p className='mb-[0.8vw] text-gray-100'>
                                            FabricAir<sup>®</sup> Poly is a cost-effective, non-permeable fabric available in
                                            white only. It is ideal in heavy industrial applications for distributing
                                            isothermal or heated air via OriFlow<sup>™</sup>.
                                        </p>
                                        <p>
                                            FabricAir<sup>®</sup> Poly comes with a 1-year warranty.
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                        <motion.img
                            src={process.env.PUBLIC_URL + '/assets/images/shape-1.png'}
                            className='absolute left-0 top-[25vw] w-[22vw] rotate-90'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        />
                        <motion.img
                            src={process.env.PUBLIC_URL + '/assets/images/shape-2.png'}
                            className='absolute right-0 bottom-0 w-[35vw]'
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        </InactivityDetector>
    )
}

export default FabricTypes
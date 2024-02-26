import React from 'react';
import Navbar from '../Shared/Navbar';
import { motion } from 'framer-motion';
import { TextAnimation } from '../Shared/TextAnimation';
import InactivityDetector from '../Shared/InactivityDetector';

const Dispersion = () => {
  return (
    <InactivityDetector>
      <Navbar />
      <div className="overflow-hidden">
        <div className="header py-[2vw]">
          <TextAnimation el="h1" className='text-white text-[2.4vw] text-center font-bold' text={'Dispersion Types'} />
        </div>
        <div className="content bg-second opacity-90 h-[calc(100vh-7.6vw)]">
          <div className="flex flex-col justify-between items-start w-full">
            <div className="container">
              <div className="grid grid-rows-2 grid-flow-col gap-5 justify-center my-[2vw]">
                <motion.div className="flex flex-col items-center px-[2vw] text-center justify-self-center mt-[1vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="image w-[10vw] mx-auto">
                    <motion.img src={process.env.PUBLIC_URL + '/assets/images/dispersion/FabFlow.gif'} className='w-full' />
                  </div>
                  <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    FabFlow<sup>™</sup>
                  </motion.h3>
                  <motion.p
                    className='mt-[0.8vw]'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >The air is distributed through the entire surface of the fabric.</motion.p>
                </motion.div>
                <motion.div className="flex flex-col items-center px-[2vw] text-center justify-self-center mt-[1vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="image w-[10vw] mx-auto">
                    <motion.img src={process.env.PUBLIC_URL + '/assets/images/dispersion/MicroFlow.gif'} className='w-full' />
                  </div>
                  <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    MicroFlow<sup>™</sup>
                  </motion.h3>
                  <motion.p
                    className='mt-[0.8vw]'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >The air is distributed through micro-perforations</motion.p>
                </motion.div>
                <motion.div className="flex flex-col items-center px-[2vw] text-center justify-self-center mt-[1vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="image w-[10vw] mx-auto">
                    <motion.img src={process.env.PUBLIC_URL + '/assets/images/dispersion/PerfoFlow.gif'} className='w-full' />
                  </div>
                  <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                  >
                    PerfoFlow<sup>™</sup>
                  </motion.h3>
                  <motion.p
                    className='mt-[0.8vw]'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >The air is distributed through small orifices.</motion.p>
                </motion.div>
                <motion.div className="flex flex-col items-center px-[2vw] text-center justify-self-center mt-[1vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  <div className="image w-[10vw] mx-auto">
                    <motion.img src={process.env.PUBLIC_URL + '/assets/images/dispersion/SonicFlow.gif'} className='w-full' />
                  </div>
                  <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                  >
                    SonicFlow<sup>™</sup>
                  </motion.h3>
                  <motion.p
                    className='mt-[0.8vw]'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >The air is distributed through lengthwise rows of small orifices.</motion.p>
                </motion.div>
                <motion.div className="flex flex-col items-center px-[2vw] text-center justify-self-center mt-[1vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  <div className="image w-[10vw] mx-auto">
                    <motion.img src={process.env.PUBLIC_URL + '/assets/images/dispersion/OriFlow.gif'} className='w-full' />
                  </div>
                  <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 0.5 }}
                  >
                    OriFlow<sup>™</sup>
                  </motion.h3>
                  <motion.p
                    className='mt-[0.8vw]'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                  >The air is distributed through large orifices.</motion.p>
                </motion.div>
                <motion.div className="flex flex-col items-center px-[2vw] text-center justify-self-center mt-[1vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                >
                  <div className="image w-[10vw] mx-auto">
                    <motion.img src={process.env.PUBLIC_URL + '/assets/images/dispersion/NozzFlow.gif'} className='w-full' />
                  </div>
                  <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                  >
                    NozzFlow<sup>™</sup>
                  </motion.h3>
                  <motion.p
                    className='mt-[0.8vw]'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6, duration: 0.5 }}
                  >The air is distributed through venturi shaped plastic nozzles with excellent discharge coefficients</motion.p>
                </motion.div>
                <motion.div className="flex flex-col items-center px-[2vw] text-center justify-self-center mt-[1vw]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.5 }}
                >
                  <div className="image w-[10vw] mx-auto">
                    <motion.img src={process.env.PUBLIC_URL + '/assets/images/dispersion/JetFlow.gif'} className='w-full' />
                  </div>
                  <motion.h3 className="mt-[1.5vw] text-[1.1vw] font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 0.5 }}
                  >
                    JetFlow<sup>™</sup>
                  </motion.h3>
                  <motion.p
                    className='mt-[0.8vw]'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.1, duration: 0.5 }}
                  >The air is distributed through jets, which provide exceptionally long throws for large spaces.</motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InactivityDetector>
  )
}

export default Dispersion
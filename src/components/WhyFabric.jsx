import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimation } from '../Shared/TextAnimation';
import Navbar from '../Shared/Navbar';
import InactivityDetector from '../Shared/InactivityDetector';

function WhyFabric() {
  return (
    <InactivityDetector>
      <Navbar />
      <div className="overflow-hidden">
        <div className="header py-[2vw]">
          <TextAnimation el="h1" className='text-white text-[2.4vw] text-center font-bold' text={'Why Fabric'} />
        </div>
        <div className="content bg-second opacity-90 h-[calc(100vh-7.6vw)]">
          <div className="flex flex-col justify-between items-start w-full">
            <div className="container">
              <div className="flex flex-row justify-between items-center my-[2vw]">
                <div className="image">
                  <motion.img
                    src={process.env.PUBLIC_URL + '/assets/images/why-fabric/footer.png'} className='w-[50vw]'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </div>
                <div className="text">
                  <div className="pl-[3vw]">
                    <motion.p
                      className='mb-[0.8vw]'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      Anywhere you can use exposed sheet metal ducting, you achieve savings and design advantages by switching to fabric ducting.
                    </motion.p>
                    <motion.p
                      className='mb-[0.8vw]'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      The versatility and fl exibility of a FabricAir<sup>®</sup> Dispersion System is greater than that of a conventional metal solution.
                    </motion.p>
                    <motion.p
                      className='mb-[0.8vw]'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      The technology does not require balancing, and the need for dampers is minimal.
                    </motion.p>
                    <motion.p
                      className='mb-[0.3vw]'
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                    >
                      <b> The technical properties of a FabricAir<sup>®</sup> Dispersion System are unrivaled:</b>
                    </motion.p>
                    <ul className="list-disc list-inside">
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                      >No condensation problems</motion.li>
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      >Even air distribution</motion.li>
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                      >Fireproof materials </motion.li>
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                      >Excellent sound-technical properties</motion.li>
                      <motion.li
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.7, duration: 0.5 }}
                      >Hygienic and easy to maintain</motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <motion.img
              src={process.env.PUBLIC_URL + '/assets/images/why-fabric/head.png'}
              className='w-full absolute bottom-0'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </InactivityDetector>
  )
}

export default WhyFabric
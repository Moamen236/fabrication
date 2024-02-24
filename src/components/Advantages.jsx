import React from 'react';
import { motion } from 'framer-motion';
import { TextAnimation } from '../Shared/TextAnimation';
import Navbar from '../Shared/Navbar';

const Advantages = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <div className="header py-[2vw]">
          <TextAnimation el="h1" className='text-white text-[2.4vw] text-center font-bold' text={'Advantages of FabricAir<sup>®</sup>'} />
        </div>
        <div className="content bg-second opacity-80 h-[calc(100vh-7.6vw)]">
          <div className="flex flex-col justify-between items-start w-full">
            <div className="container">
              <div className="flex flex-row justify-between items-center my-[2vw]">
                <div className="image">
                  <motion.img
                    src={process.env.PUBLIC_URL + '/assets/images/advantages/SaveUp.gif'} className='w-[80vw]'
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </div>
                <div className="text">
                  <div className="pl-[3vw]">
                    <div className="mb-[1.4vw]">
                      <motion.h5
                        className='text-[1.2vw] text-main-400 mb-[0.4vw]'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >Draft-free, even air distribution</motion.h5>
                      <motion.p
                        className='mb-[1.4vw]'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        FabricAir<sup>®</sup> technology ensures even air distribution with no uncomfortable
                        drafts . The customized design takes all relevant room dimensions and
                        requirements into consideration to create the optimal solution .
                      </motion.p>
                    </div>
                    <div className="mb-[1.4vw]">
                      <motion.h5
                        className='text-[1.2vw] text-main-400 mb-[0.4vw]'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                      >Fast & easy installation</motion.h5>
                      <motion.p
                        className='mb-[1.4vw]'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        Installing a FabricAir<sup>®</sup> Dispersion System is 4 to 5 times quicker than
                        installing conventional metal solutions . No special tools are needed; the
                        ducts are designed and made to measure, weigh significantly less and do
                        not require balancing .
                      </motion.p>
                    </div>
                    <div className="mb-[1.4vw]">
                      <motion.h5
                        className='text-[1.2vw] text-main-400 mb-[0.4vw]'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >Best lead times on the market</motion.h5>
                      <motion.p
                        className='mb-[1.4vw]'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                      >
                        Optimized design and production processes ensure that the air dispersion
                        solution typically arrives on site in 2–3 weeks from the time the order is
                        released
                      </motion.p>
                    </div>
                    <div className="mb-[1.4vw]">
                      <motion.h5
                        className='text-[1.2vw] text-main-400 mb-[0.4vw]'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >Energy efficient solution</motion.h5>
                      <motion.p
                        className='mb-[1.4vw]'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                      >
                        Using FabricAir<sup>®</sup> technology saves up to 40 % on the running costs of
                        a ventilation system due to the precision of the airflow and the lower
                        pressure loss
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Advantages
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <motion.div
                className="fixed top-8 -left-[0.5vw] z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <img src={process.env.PUBLIC_URL + '/assets/images/flag.gif'} className="w-[6vw]" />
            </motion.div>

            <Link to={'/'}>
                <motion.div
                    className="fixed top-0 right-0 z-20 bg-second p-[0.7vw] flex justify-center items-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <img src={process.env.PUBLIC_URL + '/assets/images/home.png'} className="w-[2vw]" />
                </motion.div>
            </Link >
        </>
    )
}

export default Navbar
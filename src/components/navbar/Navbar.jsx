import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { link: "Home", path: "home" },
  { link: "About Us", path: "about" },
  { link: "Contact Us", path: "contact" },
];

const Navbar = () => {
  return (
    <motion.div
      className='fixed top-0 z-50 bg-white shadow-md w-full'
      initial={{
        y: -200,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: 'easeInOut',
        delay: 1.3,
        duration: 0.8,
      }}
    >
      <div className='flex justify-between text-xl'>
        <div className='py-3 font-bold px-16 cursor-pointer'>
          HearMe-Out
        </div>
        <div>
          <ul className='flex space-x-8 py-3 px-16'>
            {navItems.map((item, index) => (
              <li key={index} className='cursor-pointer hover:scale-105 font-semibold'>
                <a href={`#${item.path}`}>{item.link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;

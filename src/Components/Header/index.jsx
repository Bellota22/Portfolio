import React from 'react'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { Link } from 'react-scroll'

function Header() {
  return (
    <>
    <div className='flex flex-col items-center h-screen gap-y-20 justify-around' >
        <div className='text-[20px] flex flex-col items-center  text-black'>
          Hi! I'm
          <p className='font-semibold'>
            Gabriel Angel Villanueva Vega, 
          </p>
          fullstack developer
        </div>
        <div className='flex gap-4' >
          <a
            target='_blank'
            className='text-[40px] cursor-pointer'
            href='https://github.com/Bellota22'> <FaGithub/>
            </a>
          <a
            target='_blank'
            className='text-[40px] cursor-pointer'
            href='https://www.linkedin.com/in/gabvill/'> <FaLinkedin/>
            </a>
        </div>

          <Link
            to='portfolio'
            smooth={true}
            spy={true}
            duration={500}
            className='mb-4 text-[20px] flex rounded items-center justify-center w-48 h-24 border border-black cursor-pointer hover:bg-white/50 '
            >Keep going!</Link>
    </div>

    </>
    )
}

export default Header
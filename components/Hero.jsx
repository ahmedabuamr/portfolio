import Link from 'next/link'
import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'

export default function Hero() {
  return (
    <div className='w-full h-screen text-center'>
      <div className=' max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-3 text-2xl md:text-5xl text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Ahmed</span></h1>
          <h1 className='py-3 text-2xl md:text-5xl text-gray-700'>A Front-End Developer</h1>
          <p className='py-3  text-gray-500 max-w-[80%] md:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex justify-between items-center max-w-[330px] m-auto pt-4'>
            <Link href="https://www.linkedin.com/in/ahmed-abu-amr-5252a3159/">
              <a target="_blank" >
                <div className='p-6 shadow-lg shadow-gray-400 rounded-full cursor-pointer hover:scale-110 duration-500'>
                  <AiFillLinkedin className=' text-xl md:text-3xl text-[#007bb5]' />
                </div>
              </a>
            </Link>

            <Link href="https://github.com/ahmedabuamr">
              <a target="_blank">
                <div className='p-6 shadow-lg shadow-gray-400 rounded-full cursor-pointer hover:scale-110 duration-500'>
                  <AiFillGithub className=' text-xl md:text-3xl' />
                </div>
              </a>
            </Link>

            <Link href="mailto:ahmed.n.abuamr@gmail.com">
              <a target="_blank">
                <div className='p-6 shadow-lg shadow-gray-400 rounded-full cursor-pointer hover:scale-110 duration-500'>
                  <AiOutlineMail className=' text-xl md:text-3xl text-gray-500' />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

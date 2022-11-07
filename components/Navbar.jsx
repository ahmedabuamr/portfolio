import React from 'react'
import Logo from '../public/assets/navLogo.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose, AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'

export default function Navbar() {
  const [nav, setNav] = React.useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className=' fixed bg-[#ecf0f3] w-full h-20 shadow-xl z-[100]' >
      <div className=' flex justify-between items-center w-full h-full px-4 md:px-12 '>
        <Image src={Logo} alt="..." width={100} height={70} />
        <div>
          <ul className=' hidden md:flex items-center'>
            <Link href='/'>
              <li className='ml-8 uppercase text-sm hover:border-b'>home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-8 uppercase text-sm hover:border-b'>about</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-8 uppercase text-sm hover:border-b'>skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-8 uppercase text-sm hover:border-b'>projects</li>
            </Link>
            <Link href='https://drive.google.com/file/d/13N2i-4OyHMncjhMpoRfGsZqETEZoqiXY/view?usp=sharing'>
              <a target="_blank">
                <li className='ml-8 text-white bg-blue-500 px-4 py-1 rounded-md'>Resume</li>
              </a>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className=' block md:hidden cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={nav ? ' fixed top-0 left-0 w-full h-screen  bg-black/70' : ""}>
        <div
          className={nav ? " fixed w-[70%] left-0 top-0 h-screen bg-white  p-6 ease-in duration-500" :
            " fixed  left-[-100%] top-0  p-10 ease-in duration-500"}>

          <div className=' flex justify-between items-center w-full'>
            <Image src={Logo} alt="..." width={85} height={60} />

            <div onClick={handleNav} className=' p-3 shadow-lg shadow-gray-300 rounded-full cursor-pointer'>
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className='my-4 border-b border-gray-300'>
            <p className="w-[%87] text-gray-500 text-sm py-4"> I&#39;m focused on building responsive front-end web applications
            integrating back-end technologies.</p>
          </div>
          <div>
            <ul className=' flex flex-col'>
              <Link href='/'>
                <li className='p-3 uppercase text-xs hover:border-b'>home</li>
              </Link>

              <Link href='/'>
                <li className='p-3 uppercase text-xs hover:border-b'>About</li>
              </Link>

              <Link href='/'>
                <li className='p-3 uppercase text-xs hover:border-b'>skills</li>
              </Link>

              <Link href='/'>
                <li className='p-3 uppercase text-xs hover:border-b'>projects</li>
              </Link>

              <Link href='https://drive.google.com/file/d/13N2i-4OyHMncjhMpoRfGsZqETEZoqiXY/view?usp=sharing'>
                <a target="_blank" className='mt-2'>
                  <li className=' p-3 inline-block text-white text-xs bg-blue-500 px-4 py-2 rounded-md'>Resume</li>
                </a>
              </Link>

            </ul>
          </div>

          <div className='pt-10'>
            <p className=' py-4 uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
            <div className=' flex justify-between items-center'>
              <Link href="https://www.linkedin.com/in/ahmed-abu-amr-5252a3159/">
                <a target="_blank" >
                  <div className=' shadow-lg shadow-gray-300 p-3 rounded-full cursor-pointer'>
                    <AiFillLinkedin className=' text-xl  text-[#007bb5]' />
                  </div>
                </a>
              </Link>

              <Link href="https://github.com/ahmedabuamr">
                <a target="_blank">
                  <div className=' shadow-lg shadow-gray-300 p-3 rounded-full cursor-pointer'>
                    <AiFillGithub className=' text-x' />
                  </div>
                </a>
              </Link>

              <Link href="mailto:ahmed.n.abuamr@gmail.com">
                <a target="_blank">
                  <div className=' shadow-lg shadow-gray-300 p-3 rounded-full cursor-pointer'>
                    <AiOutlineMail className=' text-xl  text-gray-500' />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

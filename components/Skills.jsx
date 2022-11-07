import React from 'react'
import Image from 'next/image'
import Html from '../public/assets/skills/html.png'
export default function Skills() {
    return (
        <div id = "skills" className='w-full lg:h-screen px-4'>
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className='text-[#5651e5] uppercase font-bold tracking-widest text-xl py-4'>Skills</p>
                <h2 className='py-2'>What I Can Do</h2>
                <div className=' py-4 grid lg:grid-cols-4 md:grid-cols-2 gap-8'>

                    <div className='p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Html}
                                    width="64"
                                    height="64"
                                    alt="..."
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Html</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src= '/../public/assets/skills/css.png'
                                    width="64"
                                    height="64"
                                    alt="..."
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Css</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                     src= '/../public/assets/skills/react.png'
                                    width="64"
                                    height="64"
                                    alt="..."
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src= '/../public/assets/skills/firebase.png'
                                    width="64"
                                    height="64"
                                    alt="..."
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src= '/../public/assets/skills/javascript.png'
                                    width="64"
                                    height="64"
                                    alt="..."
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src= '/../public/assets/skills/shopify.png'
                                    width="64"
                                    height="64"
                                    alt="..."
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Shopify</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src= '/../public/assets/skills/nextjs.png'
                                    width="64"
                                    height="64"
                                    alt="..."
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Nextjs</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300'>
                        <div className=' grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src= '/../public/assets/skills/tailwind.png'
                                    width="64"
                                    height="64"
                                    alt="..."
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

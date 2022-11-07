import React from 'react'
import about from '../public/assets/about.jpg'
import Image from 'next/image'
export default function About() {
    return (
        <div id='about' className='w-full md:h-screen px-4 p-2 flex items-center'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className=' col-span-2'>
                    <p className='text-[#5651e5] uppercase font-bold tracking-widest text-xl py-4'>About</p>
                    <h2 className='py-2'>Who I Am</h2>
                    <p className='py-4 text-gray-600'>I specialize in building  responsive front-end UI applications
                        that connect with API’s and other backend technologies. I’m
                        passionate about learning new technologies and understand there is
                        more than one way to accomplish a task. Though I am most proficient
                        in building front-end applications using HTML, CSS, Javascript, and
                        React, I am a quick learner and can pick up new tech stacks as
                        needed. I believe that being a great developer is not using one
                        specific language, but choosing the best tool for the job.
                    </p>
                    <p className='text-gray-600'>I started web developement in 2016 managing multiple e-commerce
                        websites on CMS platforms such as WordPress, BigCommerce, and
                        Shopify. I have experience working directly with clients and taking
                        mock wireframes all the way to deployed applications. In my spare
                        time I run Code Commerce, I teach web
                        developement and various front-end technologies.</p>
                </div>
                <div className='image'>
                    <Image className=' rounded-xl' src={about} width={"400"} height="500" alt="...." />
                </div>
            </div>
        </div>
    )
}

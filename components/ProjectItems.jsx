import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function ProjectItems({image, title, info,url}) {
    return (
        <div className=' relative rounded-xl flex items-center justify-center group shadow-lg w-full h-auto hover:bg-blue-900/70'>
            <Image className=' object-cover rounded-xl group-hover:opacity-10' src={image} alt='/' width="700" height="400" />
            <div className=' hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className=' text-2xl text-center tracking-widest text-white'>{title}</h3>
                <p className=' text-white text-center pt-2 pb-4'>{info}</p>
                <Link href={url}>
                    <a target="_blank">
                      <p className='py-3 bg-white text-gray-700 font-bold text-lg text-center rounded-xl cursor-pointer'>More</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

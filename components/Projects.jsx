import React from 'react'

import food from '../public/assets/projects/food.PNG'
import netflix from '../public/assets/projects/netflix.jpg'
import sinbad from '../public/assets/projects/sinbad.jpg'
import gam from '../public/assets/projects/gam.PNG'
import ProjectItems from './ProjectItems'

export default function Projects() {
    return (
        <div id="projects" className=' w-full'>
            <div className=' max-w-[1240px] mx-auto pb-16 px-4'>
                <p className='text-[#5651e5] font-bold uppercase tracking-widest text-xl '>Projects</p>
                <h2 className='py-4'>What I Can Do</h2>

                <div className=' grid md:grid-cols-2 gap-8 mt-4'>
                    <ProjectItems
                        image={netflix}
                        title="Netflix"
                        info="React - Tailwind" 
                        url ="https://netfilx-app.netlify.app/"
                        />

                    <ProjectItems
                        image={food}
                        title="Food Delivery"
                        info="React" 
                        url="https://delivery-food12.netlify.app/"
                        />


                    <ProjectItems
                        image={sinbad}
                        title="Ecommerce"
                        info="React - Redux"
                        url="https://www.sinbado.com/"
                         />

                    <ProjectItems
                        image={gam}
                        title="Gym Trainer"
                        info="Html - Css - React" 
                        url="https://gym-trainer.netlify.app/"
                        />
                </div>
            </div>
        </div>
    )
}

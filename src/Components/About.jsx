import React from 'react'

import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'

const About = () => {
  return (

    <div name='about' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold  text-gray-300'>About</p> 

        <div className='flex flex-column  p-8 justify-center items-center w-full '>
            <div className='max-w-[1000px]  gap-1 w-full grid sm:grid-cols-2 px-30'>
                <div className=''>
                <img className='w-5/6' src={img1} alt='' />
                </div>
                <div className='w-full'>
                    <p>I'm an aspiring front-end developer, transitioning from a background in medicine to pursue my passion for crafting captivating digital experiences. With a foundation rooted in problem-solving and attention to detail, I'm dedicated to mastering the art of web development. Each project fuels my drive to innovate, learn, and contribute meaningfully to the evolving world of technology.</p>
                </div>
            </div>
        </div>
        
        <div className='flex flex-column  p-8 justify-center items-center w-full '>
            <div className='max-w-[1000px]  gap-1 w-full grid sm:grid-cols-2 px-30'>
                <div className='w-5/6'>
                    <p>As a former medical doctor, I graduated from  University of Sri Jayewardenepura, Faculty of Medical Sciences(Sri Lanka), with a dedication to providing exceptional healthcare. My journey led me to Colombo South Teaching Hospital, where I gained invaluable experience in patient care, diagnosis, and treatment. Though I've transitioned from clinical practice, my background as a medical professional continues to inform my approach to problem-solving, attention to detail, and commitment to excellence in every endeavor.</p>
                </div>
                <div className=''>
                <img className='w-full' src={img2} alt='' />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

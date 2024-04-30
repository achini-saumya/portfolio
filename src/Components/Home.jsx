import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen  bg-[#0a192f]'>

        
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-300'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Achini Wanasinghe</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#9fa7c0]'>I'm a Front-End Developer</h2>
            

            <div>
                <button className='text-white group border-2 px-6 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 '/>
                </span> 
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default Home;

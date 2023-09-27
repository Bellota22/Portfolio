import React from 'react'

function SelfDescription() {
  return (
        <div id="portfolio" className=" flex-col flex items-center justify-center w-full h-screen bg-white gap-y-4">
            <div className='mt-8 w-full flex items-center justify-center '  >
                <img className='rounded w-[170px]' src='../../../me.jpeg' alt="" />
            </div>
            <h1 className='m-8 font-light text-center text-[28px]' >
                AI Engineer, sportsman, and learning enthusiast.
            </h1>
            <p className='ml-8 mr-8 text-center' >
            I am a seasoned full-stack developer with a diverse skill set including React, Fast API, Django, JavaScript, Python, and proficiency in Google Cloud Services. I have a proven track record of crafting innovative products and robust MVPs, particularly in the realms of chatbots and cutting-edge artificial intelligence.  
            </p>
           
            <a
                className='mb-10 rounded flex justify-center items-center w-48 h-24 border border-black cursor-pointer hover:bg-black/50'
                href='../../../public/CV_Gabriel_Villanueva.pdf' download='CV_Gabriel_Villanueva.pdf'>
                Download CV
            </a>

            
      
        </div>  
    )
}

export default SelfDescription
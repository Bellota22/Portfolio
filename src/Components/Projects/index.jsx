import React from 'react'
import chatbotImage from '../../../public/chatbot_image.png'
import todoImage from '../../../public/todo.png'
import ecommerce from '../../../public/ecommerce.png'
import { FaGithub } from "react-icons/fa";


function Projects() {
  return (

    <div className='mt-6 w-[full] h-[1350px] flex flex-col items-center ' >
          <h1 className='mb-6' >Projects</h1>
          <p className='border-t-2 border-black' >Clients and personal projects</p>
          <div className='grid grid-cols-1 w-full justify-center' >
          
            <div className='mt-24 flex flex-col items-center justify-center w-full p-4 h-[280px]'>
              <img
               className='border  object-contain h-[180px]'
               src={chatbotImage} 
               alt="chatbot image" /> 
              <h1 className='mt-4 font-semibold' >Virtual Assistant</h1>
              <p className='text-center' >This assistant was built to help sell virtual courses and is powered by speech, prices, and course names. </p>
              <a
                target='_blank'
                href='https://github.com/Bellota22/VirtualSalesAssistant/tree/master'
                className='m-1' ><FaGithub className='text-[20px]'/></a>

              <a
                target='_blank'
                href='https://loriette-frontend-2tv4bvelta-uc.a.run.app/'
                className='mt-4 p-2 rounded border border-black w-[120px] flex justify-center cursor-pointer'>
                See project
              </a>
            </div>
          

            <div className='mt-24 flex flex-col items-center justify-center w-full p-4 h-[280px]'>
              <img
               className='border object-contain h-[180px]'
               src={todoImage} 
               alt="Todo Image" />
              <h1 className='mt-4 font-semibold' >Todo App</h1>
              <p className='text-center' >This app was built to improve your  productivity taking notes of your daily tasks </p>
              <a
                target="_blank"
                href='https://github.com/Bellota22/TodoAppReact'
                className='m-1' ><FaGithub className='text-[20px]'/></a>
              <a
                target="_blank"
                href='https://superlative-kitten-766cfc.netlify.app'
                className='mt-4 p-2 rounded border border-black w-[120px] flex justify-center cursor-pointer'>
                See project
              </a>
            </div>
          

            <div className='mt-24 flex flex-col items-center justify-center w-full p-4 h-[280px]'>
              <img
               className='border object-contain h-[180px]'
               src={ecommerce} 
               alt="Todo Image" />
              <h1 className='mt-4 font-semibold' >E-commerce </h1>
              <p className='text-center' >Dynamic e-commerce platform showcasing seamless user experience, modern design, and robust functionality. Elevate your online business presence </p>
              <a
                target="_blank"
                href='https://github.com/Bellota22/Ecommerce-React-Vite-TailwindCSS'
                className='m-1' ><FaGithub className='text-[20px]'/></a>
              <a
                target="_blank"
                href='https://cheerful-fenglisu-f49ebc.netlify.app'
                className='mt-4 p-2 rounded border border-black w-[120px] flex justify-center cursor-pointer'>
                See project
              </a>
            </div>

          </div>

        </div>
)
}

export default Projects
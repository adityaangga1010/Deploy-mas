import React from 'react'
import Tailwind from '../img/tailwind.svg'
import React1 from '../img/react.svg'
import Laravel1 from '../img/laravel.svg'
import Figma1 from '../img/figma.svg'
import Flutter from '../img/flutter.svg'
import Next from '../img/Next'

const Services = () => {
  return (
    <div className='mt-20'>
      <div className=" container mx-auto">
        <div className=" block font-DMSans">
          <h1 className=' text-center text-xs font-bold text-[#AAAEAE] tracking-[8px]'>SERVICES</h1>
          <h1 className=' text-center mt-3 font-bold text-3xl text-[#434343] dark:text-[#D4D2D8]'>What <span className=' text-[#9E6AF3]'>can i do ?</span></h1>
        </div>
        <div className=" pt-14">
          <div className=" block md:grid md:grid-cols-2 md:md:gap-x-64 md:gap-y-20 lg:px-24 px-4">
            <div className=" md:relative md:w-full">
              <div className=" md:justify-start flex justify-center">
                <div className=" bg-[#fff] dark:bg-[#181123] w-12 h-12 rounded-lg shadow-lg dark:shadow-black flex justify-center items-center">
                  <img src={Tailwind}/>
                </div>
              </div>
              <div className=" mt-6 px-11 md:px-0 mb-1">
                <h1 className=' md:absolute md:top-2 md:ml-20 text-center font-bold text-2xl text-[#434343] dark:text-[#D4D2D8]'>Tailwind CSS</h1>
                <h1 className=' md:text-start text-center mt-2 text-[#AAAEAE] text-xl'> Responsif Design, Fast to application, Darkmode version, Expert utility class.</h1>
              </div>
            </div>
            <div className=" md:relative md:w-full mt-16 md:mt-0">
              <div className=" md:justify-start flex justify-center">
                <div className=" bg-[#fff] dark:bg-[#181123] w-12 h-12 rounded-lg shadow-lg dark:shadow-black flex justify-center items-center">
                  <img src={React1}/>
                </div>
              </div>
              <div className=" mt-6 px-11 md:px-0 mb-1">
                <h1 className=' md:absolute md:top-2 md:ml-20 text-center font-bold text-2xl text-[#434343] dark:text-[#D4D2D8]'>React JS</h1>
                <h1 className=' md:text-start text-center mt-2 text-[#AAAEAE] text-xl'>Reusable Component, State Management, React router, Fetching data API.</h1>
              </div>
            </div>
            <div className=" md:relative md:w-full mt-16 md:mt-0">
              <div className=" md:justify-start flex justify-center">
                <div className=" bg-[#fff] dark:bg-[#181123] w-12 h-12 rounded-lg shadow-lg dark:shadow-black flex justify-center items-center">
                  <img src={Laravel1}/>
                </div>
              </div>
              <div className=" mt-6 px-11 md:px-0 mb-1">
                <h1 className=' md:absolute md:top-2 md:ml-20 text-center font-bold text-2xl text-[#434343] dark:text-[#D4D2D8]'>Laravel</h1>
                <h1 className=' md:text-start text-center mt-2 text-[#AAAEAE] text-xl'>Object Oriented Programming, Model View Controller, Database, Relation.</h1>
              </div>
            </div>
            <div className=" md:relative md:w-full mt-16 md:mt-0">
              <div className=" md:justify-start flex justify-center">
                <div className=" bg-[#fff] dark:bg-[#181123] w-12 h-12 rounded-lg shadow-lg dark:shadow-black flex justify-center items-center">
                  <img src={Figma1}/>
                </div>
              </div>
              <div className=" mt-6 px-11 md:px-0 mb-1">
                <h1 className=' md:absolute md:top-2 md:ml-20 text-center font-bold text-2xl text-[#434343] dark:text-[#D4D2D8]'>Figma</h1>
                <h1 className=' md:text-start text-center mt-2 text-[#AAAEAE] text-xl'>Wireframing, User Flow, Landing page, Mobile Design App, Web Design App.</h1>
              </div>
            </div>
            <div className=" md:relative md:w-full mt-16 md:mt-0">
              <div className=" md:justify-start flex justify-center">
                <div className=" bg-[#fff] dark:bg-[#181123] w-12 h-12 rounded-lg shadow-lg dark:shadow-black flex justify-center items-center">
                  <img src={Flutter}/>
                </div>
              </div>
              <div className=" mt-6 px-11 md:px-0 mb-1">
                <h1 className=' md:absolute md:top-2 md:ml-20 text-center font-bold text-2xl text-[#434343] dark:text-[#D4D2D8]'>Flutter</h1>
                <h1 className=' md:text-start text-center mt-2 text-[#AAAEAE] text-xl'>Slicing UI, Responsif UI, UI Fleksible, Tools Artificial Intelligence, Fast Development.</h1>
              </div>
            </div>
            <div className=" md:relative md:w-full mt-16 md:mt-0">
              <div className=" md:justify-start flex justify-center">
                <div className=" bg-[#fff] dark:bg-[#181123] w-12 h-12 rounded-lg shadow-lg dark:shadow-black flex justify-center items-center">
                    <Next />      
                </div>
              </div>
              <div className=" mt-6 px-11 md:px-0 mb-1">
                <h1 className=' md:absolute md:top-2 md:ml-20 text-center font-bold text-2xl text-[#434343] dark:text-[#D4D2D8]'>Next.js</h1>
                <h1 className=' md:text-start text-center mt-2 text-[#AAAEAE] text-xl'>Server Side Rendering, Built-in CSS Support, Layout Component, State Management/</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
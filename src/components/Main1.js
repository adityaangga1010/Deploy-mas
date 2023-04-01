import React from 'react'
import User from '../img/User.png'
import Gambar2 from '../img/gambar2.svg'
import Gambar3 from '../img/gambar3.svg'

const Main1 = () => {
    return (
        <div className=' pt-20 md:pt-32 xl:pt-32 2xl:pt-36'>
            <div className=" container mx-auto">
                <div className=" block md:flex md:justify-between md:items-center">
                    <div className=" px-4 lg:pl-24 font-DMSans">
                        <div className=" text-2xl lg:text-3xl xl:text-4xl font-bold text-[#434343] dark:text-[#D4D2D8]">
                            <h1>Angga Is A <span className='text-[#9E6AF3]'>Web Designer</span></h1>
                            <h1>And <span className=' text-[#9E6AF3]'>Front-end <span className=' block md:inline'>Developer</span></span></h1>
                        </div>
                        <div className=" pt-4 max-w-[264px] lg:max-w-[368px] xl:max-w-[400px]">
                            <div className=" text-[#AAAEAE]">Hi, i'm Aditya Angga Kistanto from Indonesia. I am a junior Front End Developer and Web Designer with 6 months experience and I'm still learning and exploring.</div>
                        </div>
                        <a href="#mycontact"><div className=" pt-5 ">
                            <button className=' font-bold border border-[#9E6AF3] py-2 px-4 rounded-[4px] text-[#9E6AF3] text-sm z-10 relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#9E6AF3] before:transition-transform before:duration-300 hover:text-white dark:hover:text-[#181123] before:hover:scale-y-100 before:rounded-[4px]'>Contact Me !!</button>
                        </div></a>
                    </div>
                    <div className=" mt-20 md:mt-10 md:mr-24 flex justify-center">
                        <div className=" font-DMSans relative">
                            <img className=' sticky z-10 w-[250x] md:w-[356px] md:h-[274px] h-[250px]' src={User} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main1
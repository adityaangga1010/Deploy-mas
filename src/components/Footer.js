import React from 'react'
import Logo from '../img/logo.svg'
import Instagram from '../img/Instagram'
import Linkedin from '../img/Linkedin'
import Facebook from '../img/Facebook'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className=' mt-16 md:mt-20 bg-[#AAAEAE] w-full bg-opacity-[.07]'>
            <div className=" container mx-auto">
                <div className=" px-4 lg:px-24 py-10">
                    <div className=" flex justify-between items-center ">
                        <NavLink to= '/'><div className="flex font-Firacode gap-2">
                            <img src={Logo}/>
                            <h1 className=' text-[#434343] dark:text-[#D4D2D8] font-bold'>Angga.</h1>
                        </div></NavLink>
                        <div className=" md:flex gap-9 font-DMSans hidden">
                            <NavLink to='/' className=' text-[#AAAEAE] font-bold text-xs'>home</NavLink>
                            <NavLink to='/project' className=' text-[#AAAEAE] font-bold text-xs'>project</NavLink>
                            <NavLink className=' text-[#AAAEAE] font-bold text-xs'>resume</NavLink>
                        </div>
                        <div className=" flex items-center font-DMSans gap-5 ">
                            <a className=' group' href=" https://www.instagram.com/aditya_angga_202/" target='_blank'>
                                <Instagram />
                            </a>
                            <a className=' group' href=" https://www.linkedin.com/in/aditya-angga-kistanto-b8b531207/" target='_blank'>
                                <Linkedin />
                            </a>
                            <a className=' group' href=" https://web.facebook.com/aditya.angga.353803" target='_blank'>
                                <Facebook />
                            </a>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center pt-5 gap-9 font-DMSans md:hidden">
                        <NavLink to='/' className=' text-[#AAAEAE] font-bold text-xs'>home</NavLink>
                        <NavLink to='/project' className=' text-[#AAAEAE] font-bold text-xs'>project</NavLink>
                        <NavLink className=' text-[#AAAEAE] font-bold text-xs'>resume</NavLink>
                    </div>
                    <div className=" flex py-5">
                        <span className=' rounded-full w-full border-t border-[#AAAEAE] border-opacity-20'></span>
                    </div>
                    <div className=" flex justify-center font-DMSans">
                        <h1 className=' text-[#AAAEAE] text-xs'>© 2023 Aditya Angga Kistanto - All Right Reserved</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
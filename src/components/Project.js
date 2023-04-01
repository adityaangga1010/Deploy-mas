import React from 'react'
import Mokeup1 from '../img/mokeup1.png'
import Mokeup2 from '../img/mokeup2.png'
import Mokeup3 from '../img/mokeup3.png'
import Mok4 from '../img/mokeup4.png'
import { NavLink } from 'react-router-dom'
import Card0 from '../components/card/Card0'

const Project = () => {
    return (
        <div className=' mt-20'>
            <div className=" container mx-auto font-DMSans">
                <div className=" block ">
                    <h1 className=' text-center text-xs font-bold text-[#AAAEAE] tracking-[8px]'>WORKS</h1>
                    <h1 className=' text-center mt-3 font-bold text-3xl text-[#434343] dark:text-[#D4D2D8]'>Featured <span className=' text-[#9E6AF3]'>Project</span></h1>
                </div>

                <div className=" pt-14 px-4 lg:px-24">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Card0
                        title="Form Login Mobile App"
                        list="UI/UX Design"
                        link="/project/form-login"
                        image={Mokeup1}/>
                        <Card0
                        title="Dashboard Admin"
                        list="UI/UX Design"
                        link="/project/dashboard-admin"
                        image={Mokeup3}/>
                        <Card0
                        title="Landing Page School"
                        list="UI/UX Design"
                        link="/project/landing-page"
                        image={Mokeup2}/>
                        <Card0
                        title="Community Complaints"
                        list="Laravel & TailwindCSS"
                        link="/project/pengaduan"
                        image={Mok4}/>
                    </div>
                </div>
                <NavLink to='/project'><div className=" flex justify-center pt-14 px-4 lg:px-24">
                    <button className=' font-bold border text-xs xl:text-sm bg-[#9E6AF3] border-[#9E6AF3] px-5 py-3 rounded-md text-[#fff] dark:text-[#181123] z-10 relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-bottom before:scale-y-0 before:bg-[#fff] dark:before:bg-[#181123] before:transition-transform before:duration-300 dark:hover:text-[#9E6AF3] hover:text-[#9E6AF3] before:hover:scale-y-100 before:rounded-md'>View More {'>'}</button>
                </div></NavLink>
            </div>
        </div>
    )
}

export default Project
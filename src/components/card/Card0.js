import React from 'react'
import { NavLink } from 'react-router-dom'

const Card0 = (project) => {
    return (
        <div className="  w-full aspect-[3/4] md:aspect-video rounded-xl relative overflow-hidden group">
            <div className="absolute flex-col flex justify-center items-center gap-7 inset-0 z-10 transition-opacity opacity-0 bg-gradient-to-bl from-[#473f63a5] to-[#0c0c20cc] group-hover:opacity-100">
                <h5 className=' text-[#fff] dark:text-[#D4D2D8] font-bold px-4 text-2xl text-center'>{project.title}</h5>
                <h6 className=' font-semibold text-[#fff] dark:text-[#D4D2D8]'>{project.list}</h6>
                <NavLink to={project.link}><button className=' font-bold border text-xs xl:text-sm bg-[#9E6AF3] border-[#9E6AF3] px-5 py-3 rounded-md text-[#fff] dark:text-[#D4D2D8] z-10 relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-bottom before:scale-y-0 before:bg-[#fff] before:opacity-5 before:transition-transform before:duration-300 hover:text-[#fff] before:hover:scale-y-100 before:rounded-md'>View Project</button></NavLink>
            </div>
            <img className=' h-full w-full object-cover scale-100 group-hover:scale-110 duration-500 ease-in-out' srcSet={project.image}/>
        </div>
    )
}

export default Card0
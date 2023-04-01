import React from 'react'
import Nav from '../components/Nav'
import Index from '../components/Proj/Index'
import Footer from '../components/Footer'

// gsap
import gsap from 'gsap';

const Project = () => {
    let tl = new gsap.timeline();
    return (
        <div className=' scrollbar duration-700 ease-in-out scrollbar-hidden'>
            <Nav timeline = {tl}/>
            <Index />
            <Footer />
        </div>
    )
}

export default Project
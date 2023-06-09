import React from 'react'
import Nav from '../components/Nav'
import Index from '../components/Proj/Index'
import Footer from '../components/Footer'
// gsap
import gsap from 'gsap';

const Project = () => {
    let tl = new gsap.timeline();
    return (
        <div className=' scrollbar scrollbar-hidden duration-700 ease-in-out scroll-smooth'>
            <Nav timeline = {tl}/>
            <Index />
            <Footer />
        </div>
    )
}

export default Project
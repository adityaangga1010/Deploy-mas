import React from 'react'
import Main1 from '../components/Main1'
import Nav from '../components/Nav'
import Services from '../components/Services'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
// gsap
import {gsap} from 'gsap'

const Home = () => {
    let tl = new gsap.timeline();
    return (
        <div className=' scrollbar scrollbar-hidden duration-700 ease-in-out scroll-smooth'>
            <Nav timeline = {tl}/>
            <Main1 />
            <Services />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
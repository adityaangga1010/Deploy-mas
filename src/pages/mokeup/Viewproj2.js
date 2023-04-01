import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Card1 from '../../components/card/Card1'
import Mokeup2 from '../../img/mokeup2.png'
// gsap
import {gsap} from 'gsap'

const Viewproj2 = () => {
    let tl = new gsap.timeline();
    return (
        <div className=' scrollbar scrollbar-hidden duration-700 ease-in-out scroll-smooth '>
            <Nav timeline = {tl}/>
                <Card1 
                title="LandingPage School"
                date="January 2022"
                tools="Figma"
                description="Training Aplication Landing Page(SMP AL-IRSYAD)"
                image={Mokeup2}
                />
            <Footer/>
        </div>
    )
}

export default Viewproj2
import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Card1 from '../../components/card/Card1'
import Mokeup1 from '../../img/mokeup1.png'
// gsap
import {gsap} from 'gsap'

const Viewproj1 = () => {
    let tl = new gsap.timeline();
    return (
        <div className=' scrollbar scrollbar-hidden duration-700 ease-in-out scroll-smooth '>
            <Nav timeline = {tl}/>
                <Card1 
                title="Form Login Mobile App"
                date="December 2022"
                tools="Figma"
                description="Training Form Login Mobile App(PKL PT FAN INTEK)"
                image={Mokeup1}/>
            <Footer/>
        </div>
    )
}

export default Viewproj1
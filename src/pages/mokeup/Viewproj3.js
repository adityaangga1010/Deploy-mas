import React from 'react'
import Mokeup3 from '../../img/mokeup3.png'
import Card1 from '../../components/card/Card1'

// gsap
import { gsap } from 'gsap'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const Viewproj3 = () => {
    let tl = new gsap.timeline();
    return (
        <div className=' scrollbar scrollbar-hidden duration-700 ease-in-out scroll-smooth'>
            <Nav timeline = {tl}/>
                <Card1
                title="Dashboard Admin"
                date="December 2022"
                tools="Figma"
                description="Training Dashboard Admin(PKL PT FAN INTEK)"
                image={Mokeup3}/>
            <Footer/>
        </div>
    )
}

export default Viewproj3
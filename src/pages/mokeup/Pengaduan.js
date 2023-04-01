import React from 'react'
import Nav from '../../components/Nav';
import Mokeup4 from '../../img/mokeup4.png'
import Footer from '../../components/Footer';
import Card1 from '../../components/card/Card1';
// gsap
import gsap from 'gsap'

const Pengaduan = () => {
    let tl = new gsap.timeline();
    return (
        <div className=' scrollbar scrollbar-hidden duration-700 ease-in-out scroll-smooth'>
            <Nav timeline = {tl}/>
                <Card1
                title="Community Complaints"
                date="March 2023"
                tools="Vscode & Figma"
                description="This is a public complaint application system (UJIKOM SMK WIKRAMA BOGOR)"
                image={Mokeup4}/>
            <Footer/>
        </div>
    )
}

export default Pengaduan
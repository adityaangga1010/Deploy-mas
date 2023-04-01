import React from 'react'
import LogoD from '../img/logoD.svg'
import Logo from '../img/logo.svg'
import { useState, useRef, useEffect } from 'react'
import {BiMoon} from 'react-icons/bi'
import {BsSun} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Darkmode from './Darkmode/Darkmode'

const Nav = ({timeline}) => {

    // Darkmode
    const [nextTheme, setTheme] = Darkmode();

    // NavScroll
    window.onscroll = () =>{
        const header = document.querySelector('header')
        const FixNav = header.offsetTop;

        if(window.pageYOffset > FixNav){
            header.classList.add('navbar-fixed')
        }else{
            header.classList.remove('navbar-fixed')
        }
    }

    // hamburger
    const [ishamburger, setBurger] = useState('hamburger-class')
    const [navmenu, setNavMenu] = useState('navmenu-class navmenu-active')
    const [menuClick, setMenuClick] = useState(false)

    const updateburger = () => {
        if(!menuClick){
            setBurger('hamburger-active hamburger-class')
            setNavMenu('navmenu-active')
        }else{
            setBurger('hamburger-back hamburger-class')
            setNavMenu('navmenu-class')
        }
        setMenuClick(!menuClick)
    }
    
    // gsap
    let logoRef = useRef();
    let hamburgerRef = useRef();
    let nav1Ref = useRef();
    let nav2Ref = useRef();
    let nav3Ref = useRef();
    let nav4Ref = useRef();
    
    useEffect(() => {
        timeline.from(logoRef,1, {
            opacity: 0,
            y: -50,
            ease: 'power3.inOut'
        })

        timeline.from(hamburgerRef,1, {
            opacity: 0,
            y: -50,
            ease: 'back'
        })

        timeline.from([nav1Ref, nav2Ref, nav3Ref, nav4Ref], 1,{
            opacity: 0,
            y: -50,
            stagger: {
                amount: .4
            },
            ease: 'back'
        },"-=1");
        
    }, [])
    
    // Link active
    const activeLink = ' text-[#434343] dark:text-[#D4D2D8]'
    const normalLink = ''

    return (
        <header className=" absolute w-full py-[10px] lg:py-5">
            <div className=" container mx-auto">
                <div className=" flex justify-between items-center relative">
                    <div className=" pl-4 lg:pl-24 font-Firacode">
                        <NavLink to='/' className=" flex items-center" ref={el => logoRef = el}>
                            <img className='hidden' src={LogoD} />
                            <img className=' flex w-4 h-4 md:w-5 md:h-5' src={Logo}/>
                            <span className=' ml-[8px] text-base md:text-xl font-bold text-[#434343] dark:text-[#D4D2D8] '>Angga.</span>
                        </NavLink>
                    </div>
                    <div className=" flex items-center lg:pr-24">
                        <button type='button' onClick={updateburger} className={ishamburger} ref={el => hamburgerRef = el}>
                            <span className='hamburger-menu duration-300 ease-in-out origin-top-left'></span>
                            <span className='hamburger-menu duration-300 ease-in-out'></span>
                            <span className='hamburger-menu duration-300 ease-in-out origin-bottom-left'></span>
                        </button>
                    
                        <nav className={navmenu}>
                            <ul className=' block md:flex md:items-center font-DMSans'>
                                <li ref={el => nav1Ref = el}>
                                    <a className='text-[#AAAEAE] text-xs font-light md:text-base md:font-semibold md:mr-8 mx-2 hover:text-[#434343] dark:hover:text-[#D4D2D8]'><NavLink to='/' className= {({ isActive}) => (isActive ? activeLink : normalLink)}>home</NavLink></a>                                
                                </li>
                                <li ref={el => nav2Ref = el}>
                                    <a className='text-[#AAAEAE] text-xs font-light md:text-base md:font-semibold md:mr-8 mx-2 hover:text-[#434343] dark:hover:text-[#D4D2D8]'><NavLink to='/project' className= {({ isActive}) => (isActive ? activeLink : normalLink)}>project</NavLink></a>                                
                                </li>
                                <li ref={el => nav3Ref = el}>
                                    <a className='text-[#AAAEAE] text-xs font-light md:text-base md:font-semibold md:mr-8 mx-2 hover:text-[#434343] dark:hover:text-[#D4D2D8]'><NavLink>resume</NavLink></a>                                
                                </li>
                                <li ref={el => nav4Ref = el}>
                                    <button onClick={()=> setTheme(nextTheme)}>
                                        <span className='dark:hidden flex max-w-[12px] md:max-w-[16px] mt-2 cursor-pointer text-[#AAAEAE] md:mr-4 lg:mr-0 mx-2 hover:text-[#434343]'><BiMoon/></span>
                                        <span className='dark:flex hidden max-w-[12px] md:max-w-[16px] mt-2 cursor-pointer text-[#AAAEAE] md:mr-4 lg:mr-0 mx-2 hover:text-[#D4D2D8]'><BsSun/></span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav
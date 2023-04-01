import React from 'react'
import Gambar1 from '../img/gambar1.png'
import Gambar2 from '../img/gambar2.svg'
import Gambar3 from '../img/gambar3.svg'
import { useRef, useEffect } from 'react'

const Main = ({timeline}) => {
    let mainRef1 = useRef(null);
    let mainRef2 = useRef(null);
    let mainRef3 = useRef(null);

    // image
    let imageref1 = useRef(null);
    let imageref2 = useRef(null);
    let imageref3 = useRef(null);
    // let imageref4 = useRef(null);

    useEffect(() => {
        timeline.from([mainRef1, mainRef2, mainRef3],2, {
            opacity: 0,
            y: '100',
            skewY: 10,
            stagger: {
                amount: .4
            },
            ease: 'power3'
        })
        timeline.from(imageref2, 1.2,{
            opacity: 0,
            y: 1200,
            ease: 'power3.inOut'
        },"-=1")
        .from(imageref2, 2, {
            scale:1.6,
            ease: 'power3.inOut'
        },"-=1.2")
        // 
        timeline.from(imageref1, 1.2,{
            opacity: 0,
            y: 1200,
            ease: 'power3.inOut'
        },"-=1")
        .from(imageref1, 2, {
            scale:1.6,
            ease: 'power3.inOut'
        }, "-=1.5")
        // 
        timeline.from(imageref3, 1.2,{
            opacity: 0,
            y: 1200,
            ease: 'power3.inOut'
        },"-=1")
        .from(imageref3, 2, {
            scale:1.6,
            ease: 'power3.inOut'
        },"-=1.5")
    }, [])

    return (
        <div className='pt-20 md:pt-32 xl:pt-32 2xl:pt-36'>
            <div className="container mx-auto">
                <div className=" block md:flex md:justify-between md:items-center">
                    <div className=" flex px-4 lg:px-24 font-DMSans">
                        <div className=" block">
                            <div className=' text-[#434343] font-bold text-2xl sm:text-3xl md:text-2xl xl:text-4xl' ref={el =>mainRef1 =el}>
                                <h1>Angga Is A <span className=' text-[#9E6AF3]'>Web Designer</span><span className=' block'>And <span className=' text-[#9E6AF3]'>Front-end Developer</span></span></h1>
                            </div>
                            <h2 className='text-[#AAAEAE] text-base pt-6 max-w-[210px] sm:max-w-[260px] xl:max-w-md' ref={el => mainRef2 =el}>Hi, i'm Aditya Angga Kistanto from Indonesia. I am a junior Front End Developer and Web Designer with 6 months experience and I'm still learning and exploring.</h2>
                            <div className="  flex items-center pt-8 max-w-screen-xl" ref={el =>mainRef3 = el}>
                                <button className=' overflow-hidden border border-[#9E6AF3] rounded-md px-6 py-2 relative text-[#9E6AF3] z-0 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#9E6AF3] before:transition-transform before:duration-300 hover:text-white before:hover:scale-y-105'>Contact Me !!</button>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center lg:pr-24 mt-52 md:-mt-1 lg:-mt-11 xl:mt-9">
                        <div className="block">
                            <div className=" px-6 relative z-0">
                                {/* <img className='absolute left-0 px-6 md:top-12 lg:top-32' src={Gambar2} ref={el => imageref2 = el}/>
                                <img className='absolute right-0 bottom-0 px-6 z-20' src={Gambar3} ref={el => imageref3 = el}/>
                                <img className='sticky -mt-32 z-0 md:z-10' src={Gambar1} ref={el => imageref1 = el}/> */}

                                <img className='absolute left-0 px-6 md:top-32' src={Gambar2} />
                                <img className='absolute right-0 bottom-0 px-6 z-20' src={Gambar3} />
                                <img className='sticky -mt-36 z-10' src={Gambar1} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
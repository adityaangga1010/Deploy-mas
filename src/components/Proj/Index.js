import React from 'react'
import Mokeup1 from '../../img/mokeup1.png'
import Mokeup2 from '../../img/mokeup2.png'
import Mokeup3 from '../../img/mokeup3.png'
import Mokeup4 from '../../img/mokeup4.png'
import Card0 from '../card/Card0'


const Index = () => {
    return (
        <div className='pt-20 md:pt-32 xl:pt-32 2xl:pt-36'>
            <div className=" container mx-auto">
                <div className=" px-4 lg:px-24">
                    <div className=" font-DMSans">
                        <h1 className=' text-3xl md:text-5xl md:leading-[70px] font-bold text-[#434343] dark:text-[#D4D2D8]'>The project that i made <span className=' block text-[#9E6AF3]'>with creativity</span></h1>
                    </div>
                    <div className=" pt-14  ">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Card0
                        title="Form Login Mobile App"
                        list="UI/UX Design"
                        link="/project/form-login"
                        image={Mokeup1}/>
                        <Card0
                        title="Dashboard Admin"
                        list="UI/UX Design"
                        link="/project/dashboard-admin"
                        image={Mokeup3}/>
                        <Card0
                        title="Landing Page School"
                        list="UI/UX Design"
                        link="/project/landing-page"
                        image={Mokeup2}/>
                        <Card0
                        title="Community Complaints"
                        list="Laravel & TailwindCSS"
                        link="/project/pengaduan"
                        image={Mokeup4}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
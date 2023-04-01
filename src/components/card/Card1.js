import React from 'react'

const Card1 = (props) => {
    return (
        <div className=' pt-20 md:pt-32 xl:pt-32 2xl:pt-36'>
            <div className=" container mx-auto font-DMSans">
                <div className=" px-4 lg:px-24">
                    <div className=" flex flex-col md:flex-row md:gap-20">
                        <div className=" flex-1 flex-col">
                            <div className=" mb-6">
                                <h1 className=' md:pt-20 text-[#434343] font-bold text-3xl md:text-5xl dark:text-[#D4D2D8]'>{props.title}</h1>
                            </div>
                        </div>
                        <div className=" flex-1 flex-col mb-14">
                            <div className=" flex flex-col mb-6 gap-2">
                                <h2 className='text-[#AAAEAE] dark:opacity-80'>Date</h2>
                                <span className=' text-[#434343] opacity-80 dark:text-[#D4D2D8]'>{props.date}</span>
                            </div>
                            <div className=" flex flex-col mb-6 gap-2">
                                <h2 className='text-[#AAAEAE] dark:opacity-80'>Tools</h2>
                                <span className=' text-[#434343] opacity-80 dark:text-[#D4D2D8]'>{props.tools}</span>
                            </div>
                            <div className=" flex flex-col mb-6 gap-2">
                                <h2 className='text-[#AAAEAE] dark:opacity-80'>Description</h2>
                                <span className=' text-[#434343] opacity-80 dark:text-[#D4D2D8]'>{props.description}</span>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                        <img src={props.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1
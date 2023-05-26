import React from 'react'
import Email from '../img/Email'
import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'
import Send from '../img/Send'
import Close from '../img/Close'

const Contact = () => {
    let [isOpen, setIsOpen] = useState(false)
    let [isOpen2, setIsOpen2] = useState(false)

    // 1
    function closeModal (){
        setIsOpen(false)
    }
    function openModal (){
        setIsOpen(true)
    }

    // 2
    function closeModal2 (){
        setIsOpen2(false)
    }
    function openModal2 (){
        setIsOpen2(true)
    }

    return (
        <div className=' mt-20 ' id='mycontact'>
            <div className=" container mx-auto">
                <div className=" font-DMSans px-4 lg:px-24">
                    <div className=" w-full rounded-xl bg-[#fff] drop-shadow-3xl dark:bg-[#181123] dark:drop-shadow-4xl">
                        <div className=" block py-8 md:px-9 md:py-12">
                            <div className=" md:flex md:justify-between md:items-center">
                                <div className=" flex justify-center md:justify-start">
                                    <h1 className=' text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#9E6AF3]'>Interested working with me?</h1>
                                </div>
                                <div className=" flex justify-center pt-7 md:pt-0 gap-2 xl:gap-3">
                                    <button className=" flex items-center border border-[#9E6AF3] rounded-md " onClick={openModal}>
                                        <h1 className=' px-5 py-3 xl:py-4 text-[#9E6AF3] text-xs xl:text-sm font-bold overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top before:scale-y-0 before:bg-[#9E6AF3] before:transition-transform before:duration-300 dark:hover:text-[#181123] hover:text-white before:hover:scale-y-100 before:rounded-md relative'>Let’s  Start It</h1>
                                    </button>
                                    
                                    <button onClick={openModal2} className=" flex items-center bg-[#9E6AF3] border border-[#9E6AF3] rounded-md px-5 py-3 xl:py-4 gap-1 z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-top before:scale-y-0 dark:before:bg-[#181123] before:bg-[#fff] before:transition-transform before:duration-300 before:hover:scale-y-100 before:rounded-md relative group">
                                        <Email />
                                        <h1 className=' dark:text-[#181123] text-[#fff] text-xs xl:text-sm font-bold group-hover:text-[#9E6AF3]'>Email Me</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* 1 */}
                        <Transition show={isOpen} >
                            <Dialog className="relative z-[99999]" onClose={closeModal}>
                                <Transition.Child
                                    enter="ease-out duration-1000"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                <div className="fixed inset-0 bg-black bg-opacity-70 "/>
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="  w-full max-w-2xl transform overflow-hidden rounded-[20px] bg-white dark:bg-[#181123] p-12 text-left align-middle transition-all sm:py-16 sm:px-20 opacity-100 scale-100">
                                                <button onClick={closeModal}><Close /></button>
                                                <div className=" flex flex-col gap-8">
                                                    <h3 className=' text-4xl font-bold text-[#434343] dark:text-[#D4D2D8]'>My Location In Google Maps</h3>
                                                    <div className=" flex flex-col gap-2">
                                                        <p className=' italic leading-relaxed text-justify text-sm text-[#AAAEAE]'><span className='not-italic text-[#9E6AF3] font-bold'>Work ethic?</span> Ultimately, you are solely responsible for your successes and failures. The sooner you realize it, accept it, and integrate it into your work ethic, the more successful you will begin to be. As long as you blame others for not being where you want to be, you will always fail.</p>
                                                        <p className=' text-sm text-[#AAAEAE]'><span className=' text-[#9E6AF3] font-bold'> Where do I live?</span> I am from Indonesia, more precisely in the city of Bogor.</p>
                                                    </div>
                                                    <iframe className=' rounded-md w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7926.348568367933!2d106.80829414192499!3d-6.625262023475929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5ff1f8cee2b%3A0xc70fa940bc879307!2sLawanggintung%2C%20Kec.%20Bogor%20Sel.%2C%20Kota%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1685060070834!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>

                        {/* 2 */}
                        <Transition show={isOpen2} >
                            <Dialog className="relative z-[99999]" onClose={closeModal2}>
                                <Transition.Child
                                    enter="ease-out duration-1000"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                <div className="fixed inset-0 bg-black bg-opacity-70 "/>
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="  w-full max-w-2xl transform overflow-hidden rounded-[20px] bg-white dark:bg-[#181123] p-12 text-left align-middle transition-all sm:py-16 sm:px-20 opacity-100 scale-100">
                                                <button onClick={closeModal2}><Close /></button>
                                                <h3 className=' mb-2 text-4xl font-bold text-[#434343] dark:text-[#D4D2D8]'>Let's collaborate and create something</h3>
                                                <p className=' mb-8 text-sm text-[#AAAEAE]'> Don't hesitate to message me, I will reply to your message as soon as possible. Usually, I take time to respond and replying the message, I will fast respond at work hours GMT+7.</p>
                                                <form>
                                                    <div className=" mb-8 sm:mb-10 flex flex-col sm:gap-6 gap-4">
                                                        <input className=' w-full text-[#434343] dark:text-[#D4D2D8] border-b border-[#AAAEAE] dark:border-[#434343] bg-transparent placeholder:text-[#AAAEAE] focus:border-[#434343] dark:focus:border-[#525252] focus:border-opacity-60 focus:outline-none transition-colors py-3.5' placeholder='Your Name' />
                                                        <input className=' w-full text-[#434343] dark:text-[#D4D2D8] border-b border-[#AAAEAE] dark:border-[#434343] bg-transparent placeholder:text-[#AAAEAE] focus:border-[#434343] dark:focus:border-[#525252] focus:border-opacity-60 focus:outline-none transition-colors py-3.5' placeholder='Your Email' />
                                                        <textarea className='w-full text-[#434343] dark:text-[#D4D2D8] border-b border-[#AAAEAE] dark:border-[#434343] bg-transparent placeholder:text-[#AAAEAE] focus:border-[#434343] dark:focus:border-[#525252] focus:border-opacity-60 focus:outline-none transition-colors py-3.5' placeholder=' Please Enter Your Message...'/>
                                                    </div>
                                                    <div className=" flex justify-center items-center">
                                                        <button className=' flex items-center bg-[#9E6AF3] border border-[#9E6AF3] rounded-md px-5 py-3 gap-3 z-10 overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:-z-10 before:h-full before:w-full before:origin-bottom before:scale-y-0 dark:before:bg-[#181123] before:bg-[#fff] before:transition-transform before:duration-300 before:hover:scale-y-100 before:rounded-md relative group'>
                                                            <h1 className=' dark:text-[#181123] text-[#fff] text-xs xl:text-sm font-bold group-hover:text-[#9E6AF3]'>Send Message</h1>
                                                            <h1><Send /></h1>
                                                        </button>
                                                    </div>
                                                </form>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
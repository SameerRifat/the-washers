"use client"
import Image from 'next/image'
import React from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import { useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import SectionHeading from '@/components/SectionHeading';

const contactInfo = [
    {
        icon: WhatsAppIcon,
        title: 'WhatsApp',
        subTitle: '+971 55 792 4200'
    },
    {
        icon: LocalPhoneOutlinedIcon,
        title: 'Call',
        subTitle: '800 939'
    },
    {
        icon: EmailOutlinedIcon,
        title: 'Email Address',
        subTitle: 'info@thewashers.com'
    }
]

const Contact = () => {
    const xsUp = useMediaQuery('(min-width:500px)');
    const mdUp = useMediaQuery('(min-width:768px)');

    return (
        <div className=''>
            <div className='w-full h-[50vh] xl:h-[75vh] bg-[url(/3.png)] bg-no-repeat pt-[70px] overflow-hidden'>
                {/* <div className= absolute top-[60%] left-[50%] flex items-center gap-5 '>
                    <span className='border-2 border-white p-3 rounded-full '>
                        <LocalPhoneOutlinedIcon className='text-white font-extrabold' fontSize='large' />
                    </span>
                    <span className='border-2 border-white p-3 rounded-full'>
                        <EmailOutlinedIcon className='text-white font-extrabold' fontSize='large' />
                    </span>
                    <span className='border-2 border-white p-3 rounded-full'>
                        <FmdGoodIcon className='text-white font-extrabold' fontSize='large' />
                    </span>
                    <span className='border-2 border-white p-3 rounded-full'>
                        <ChatIcon className='text-white font-extrabold' fontSize='large' />
                    </span>
                </div> */}
                <div className='grid grid-cols-1 xs:grid-cols-2 gap-y-5 sm:gap-0 lg:gap-10 w-[90%] max-w-[1600px] mx-auto h-full'>
                    <div className='flex justify-center xs:justify-start lg:justify-center items-center'>
                        <div className='w-[150px] xs:w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-fit lg:h-[175px]'>
                            <video
                                width="100%"
                                height="100%"
                                // controls
                                autoPlay
                                loop={true}
                                // poster="/echoCartPoster.png"
                                // style={{ maxWidth: '100%', width: '100%', height: 'auto', display: 'block', margin: 'auto' }}
                                className='rounded-[1rem] sm:rounded-[2.7rem] lg:rounded-[3rem] mr-auto'
                            >
                                <source src="/contact4.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='flex justify-end lg:justify-center items-center relative overflow-hidden'>
                        <Image
                            src='/contact-us1.png'
                            alt="banner"
                            width={250}
                            height={500}
                            quality={95}
                            priority={true}
                            className='max-w-full mt-auto w-[230px] sm:w-[270px] md:w-[280px] xxl:w-[60%] h-fit ml-auto lg:ml-0'
                        />
                        <span className='border-2 border-white p-2.5 lg:p-3 rounded-full absolute top-[50px] left-[80px] xs:left-[100px] sm:left-[80px] md:left-[120px]'>
                            <LocalPhoneOutlinedIcon className='text-white font-extrabold' fontSize={mdUp ? 'large' : xsUp ? 'medium' : 'small'} />
                        </span>
                        <span className='border-2 border-white p-2.5 lg:p-3 rounded-full absolute top-[120px] left-[20px] xs:left-[40px] sm:left-[20px] md:left-[50px]'>
                            <EmailOutlinedIcon className='text-white font-extrabold' fontSize={mdUp ? 'large' : xsUp ? 'medium' : 'small'} />
                        </span>
                        <span className='border-2 border-white p-2.5 lg:p-3 rounded-full absolute top-[200px] left-[0px] xs:left-[12px] sm:left-0 md:left-[10px]'>
                            <ChatIcon className='text-white font-extrabold' fontSize={mdUp ? 'large' : xsUp ? 'medium' : 'small'} />
                        </span>
                        <span className='border-2 border-white p-2.5 lg:p-3 rounded-full absolute top-[280px] left-[10px] xs:left-[40px] sm:left-[10px] lg:left-[60px]'>
                            <FmdGoodIcon className='text-white font-extrabold' fontSize={mdUp ? 'large' : xsUp ? 'medium' : 'small'} />
                        </span>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h2 className='font-extrabold text-3xl text-center'>Contact Us</h2>
                <div className='w-24 h-1 lg:h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto'></div>
                <div className='bg-gradient-to-r from-blue-50 to-green-50 shadow-sm py-10 mt-5'>
                    <div className='w-[90%] mx-auto max-w-[1600px] flex flex-wrap gap-y-10'>
                        {contactInfo.map((item, ind) => {
                            return (
                                <div className='flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3'>
                                    <span className='bg-gradient-to-r from-blue-600 to-green-500 mx-auto p-1 rounded-full'>
                                        <span className='border-2 border-white p-1 rounded-full w-14 h-14 flex justify-center items-center'>
                                            <item.icon
                                                // className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'
                                                className='text-white'
                                                fontSize='large'
                                            />
                                        </span>
                                    </span>
                                    <h3 className='uppercase font-bold text-lg'>{item.title}</h3>
                                    <p>{item.subTitle}</p>
                                </div>
                            )
                        })}
                        <div className='w-full sm:w-1/2 md:w-full text-center'>
                            <div className='inline-block p-1  bg-gradient-to-r from-blue-600 to-green-500 rounded-full'>
                                <span className='border-2 border-white p-1 rounded-full w-14 h-14 flex justify-center items-center'>
                                    <FmdGoodIcon
                                        // className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'
                                        className='text-white'
                                        fontSize='large'
                                    />
                                </span>
                            </div>
                            <h3 className='uppercase font-bold text-lg mt-3'>Our Location</h3>
                            <div className='flex flex-col gap-1 items-center mt-2'>
                                <span>TheWashers</span>
                                <span>Cleaning Service</span>
                                <span>P.O Box 283252 – 149,</span>
                                <span>Al Hamsah A Building</span>
                                <span>Al Karama, Dubai,</span>
                                <span>United Arab Emirates.</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className='text-center mt-10'>
                        <div className='inline-block p-1  bg-gradient-to-r from-blue-600 to-green-500 rounded-full'>
                            <span className='border-2 border-white p-1 rounded-full w-14 h-14 flex justify-center items-center'>
                                <FmdGoodIcon
                                    // className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'
                                    className='text-white'
                                    fontSize='large'
                                />
                            </span>
                        </div>
                        <h3 className='uppercase font-bold text-lg mt-3'>Our Location</h3>
                        <div className='flex flex-col gap-1 items-center mt-2'>
                            <span>TheWashers</span>
                            <span>Cleaning Service</span>
                            <span>P.O Box 283252 – 149,</span>
                            <span>Al Hamsah A Building</span>
                            <span>Al Karama, Dubai,</span>
                            <span>United Arab Emirates.</span>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='w-[90%] mx-auto max-w-[1600px] flex flex-col gap-10'>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28875.717604923306!2d55.402924712370705!3d25.221268647257517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f60bde888939f%3A0x2245c09926a8f686!2sMirdif%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1703154940262!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className='flex justify-center'>
                    <div className='py-6 px-4 sm:p-6 w-[40rem] max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-md mb-10'>
                        <SectionHeading>Request A Callback</SectionHeading>
                        <form className="flex flex-col gap-3"
                        // action={async (FormData) => {
                        //     const { data, error } = await sendEmail(FormData)
                        //     if (data?.error) {
                        //         toast.error(data.error.message)
                        //         return;
                        //     }
                        //     toast.success("Email sent successfully")
                        // }}
                        >
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Name<span className='text-orange-500'>*</span></label>
                                <input
                                    className="h-12 p-2 bg-white border border-black/20 rounded-sm focus:outline-none"
                                    name="senderEmail"
                                    type="email"
                                    placeholder="Your Name"
                                    required
                                    maxLength={500}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Email<span className='text-orange-500'>*</span></label>
                                <input
                                    className="h-12 p-2 bg-white border border-black/20 rounded-sm focus:outline-none"
                                    name="senderEmail"
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    maxLength={500}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Phone<span className='text-orange-500'>*</span></label>
                                <input
                                    className="h-12 p-2 bg-white border border-black/20 rounded-sm focus:outline-none"
                                    name="senderEmail"
                                    type="email"
                                    placeholder="Your Phone Number"
                                    required
                                    maxLength={500}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Subject<span className='text-orange-500'>*</span></label>
                                <input
                                    className="h-12 p-2 bg-white border border-black/20 rounded-sm focus:outline-none"
                                    name="senderEmail"
                                    type="email"
                                    placeholder="Your Subject"
                                    required
                                    maxLength={500}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-semibold'>Message</label>
                                <textarea
                                    placeholder="Your message"
                                    name="message"
                                    className="h-52 p-2 bg-white border border-black/20 rounded-sm focus:outline-none"
                                    required
                                    maxLength={5000}
                                ></textarea>
                            </div>
                            {/* <SendBtn /> */}
                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
                            >
                                Submit{" "}
                                <SendIcon className="text-base opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
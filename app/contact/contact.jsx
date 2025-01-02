"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SectionHeading from '@/components/SectionHeading';
import SendBtn from '@/components/SendBtn';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

const contactInfo = [
    {
        icon: WhatsAppIcon,
        title: 'WhatsApp',
        subTitle: '+971 55 792 4200',
        link: 'https://wa.me/971557924200' // WhatsApp link
    },
    {
        icon: LocalPhoneOutlinedIcon,
        title: 'Call',
        subTitle: '+971 55 792 4200',
        link: 'tel:+971557924200' // Phone call link
    },
    {
        icon: EmailOutlinedIcon,
        title: 'Email Address',
        subTitle: 'info@thewashersuae.com',
        link: 'mailto:info@thewashersuae.com' // Email link
    }
]

const Contact = () => {
    const xsUp = useMediaQuery('(min-width:500px)');
    const mdUp = useMediaQuery('(min-width:768px)');
    const formRef = useRef(null)

    return (
        <div className=''>
            <div className='w-full h-[45vh] xs:h-[50vh] xl:h-[70vh] bg-[url(/3.png)] bg-cover bg-no-repeat pt-[70px] overflow-hidden'>
                <div className='flex justify-between xs:grid xs:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-5 sm:gap-0 lg:gap-10 w-[90%] max-w-[1600px] mx-auto h-full'>
                    <div className='hidden md:flex justify-start lg:justify-center items-center'>
                        <div className='w-[150px] xs:w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-fit lg:h-[175px]'>
                            <video
                                width="100%"
                                height="100%"
                                autoPlay
                                loop={true}
                                className='rounded-[1rem] sm:rounded-[2.7rem] lg:rounded-[3rem] mr-auto'
                            >
                                <source src="/contact4.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-end overflow-hidden 2xl:col-span-2'>
                        {/* aspect ratio */}
                        <div className='aspect-[900/900] h-[90%]'>
                            <Image
                                src='/contact-new.png'
                                alt="banner"
                                width={900}
                                height={900}
                                quality={95}
                                priority={true}
                                className='!w-full !h-full object-cover !mt-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h2 className='font-extrabold text-3xl text-center'>Contact Us</h2>
                <div className='w-24 h-1 lg:h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full'></div>
                <div className='bg-gradient-to-r from-blue-50 to-green-50 shadow-sm py-10 mt-5'>
                    <div className='w-[90%] mx-auto max-w-[1600px] flex flex-wrap gap-y-10'>
                        {contactInfo.map((item, ind) => {
                            return (
                                <div className='flex flex-col gap-2 items-center w-full sm:w-1/2 md:w-1/3' key={ind}>
                                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center gap-2'>
                                        <div className='bg-gradient-to-r from-blue-600 to-green-500 mx-auto p-1 rounded-full w-fit'>
                                            <div className='border-2 border-white p-1 rounded-full w-14 h-14 flex justify-center items-center'>
                                                <item.icon
                                                    className='text-white'
                                                    fontSize='large'
                                                />
                                            </div>
                                        </div>
                                        <h3 className='uppercase font-bold text-lg'>{item.title}</h3>
                                        <p>{item.subTitle}</p>
                                    </Link>
                                </div>
                            )
                        })}
                        <div className='w-full sm:w-1/2 md:w-full text-center'>
                            <div className='inline-block p-1  bg-gradient-to-r from-blue-600 to-green-500 rounded-full'>
                                <span className='border-2 border-white p-1 rounded-full w-14 h-14 flex justify-center items-center'>
                                    <FmdGoodIcon
                                        className='text-white'
                                        fontSize='large'
                                    />
                                </span>
                            </div>
                            <h3 className='uppercase font-bold text-lg mt-3'>Our Location</h3>
                            <div className='flex flex-col gap-1 items-center mt-2'>
                                <span>TheWashers</span>
                                <span>Cleaning Service</span>
                                {/* <span>P.O Box 283252 – 149,</span> */}
                                <span>Al Taawun St - Al Mamzar -</span>
                                {/* <span>Al Karama, Dubai,</span> */}
                                <span>Sharjah - United Arab Emirates</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[100%] sm:w-[90%] mx-auto max-w-[1600px] my-10'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14427.592491215973!2d55.3692564!3d25.3076267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b0064b6a1d5%3A0x1822fee99499159!2sThe%20Washers!5e0!3m2!1sen!2s!4v1704221685671!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className='w-[90%] mx-auto max-w-[1600px] flex flex-col'>
                <div className='flex justify-center'>
                    <div className='py-6 px-4 sm:p-6 w-[40rem] max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-md mb-10'>
                        <SectionHeading>Request A Callback</SectionHeading>
                        <form
                            ref={formRef}
                            className="flex flex-col gap-3"
                            action={async (FormData) => {
                                const { data, error } = await sendEmail(FormData)
                                if (data?.error) {
                                    toast.error(data.error.message)
                                    return;
                                }
                                toast.success("Email sent successfully")

                                if (formRef.current) {
                                    formRef.current.reset();
                                }
                            }}
                        >
                            <div className='flex flex-col gap-1'>
                                <label className='font-medium'>Name<span className='text-orange-500'>*</span></label>
                                <input
                                    className="h-12 p-2 bg-white border border-black/20 rounded-sm focus:outline-none placeholder:text-xs"
                                    name="senderName"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    maxLength={50}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-medium'>Email<span className='text-orange-500'>*</span></label>
                                <input
                                    className="h-12 p-2 bg-white border border-black/20 rounded-sm focus:outline-none placeholder:text-xs"
                                    name="senderEmail"
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    maxLength={50}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-medium'>Phone<span className='text-orange-500'>*</span></label>
                                <input
                                    className="h-12 p-2 bg-white border border-black/20 rounded-sm focus:outline-none placeholder:text-xs"
                                    name="senderPhone"
                                    type="text"
                                    placeholder="Your Phone Number"
                                    required
                                    maxLength={20}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-medium'>Subject<span className='text-orange-500'>*</span></label>
                                <input
                                    className="h-12 p-2 bg-white border border-black/20 rounded-sm focus:outline-none placeholder:text-xs"
                                    name="subject"
                                    type="text"
                                    placeholder="Your Subject"
                                    required
                                    maxLength={500}
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='font-medium'>Message</label>
                                <textarea
                                    placeholder="Your message"
                                    name="message"
                                    className="h-52 p-2 bg-white border border-black/20 rounded-sm focus:outline-none placeholder:text-xs"
                                    required
                                    maxLength={5000}
                                ></textarea>
                            </div>
                            <SendBtn />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'
import icon from '../assets/android-chrome-512x512.png'
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook} from "react-icons/ai";

function Header() {
    return (
        <div className='md:flex py-4' >
            <div className='flex w-full mx-8 h-20 my-4 '>
                <img alt='icon' src={icon}/>
                <h1 className='flex items-center px-8 text-3xl font-bold text-customBlue1'>Blue Hutch</h1>
            </div>
            <div className='flex py-5 md:py-10 gap-6 md:pr-16 px-6 justify-center'>
                <a href='https://www.instagram.com/blue.hutch/' target="_blank"  className='pr-5'><AiOutlineInstagram size={30} color='#98FF98'/></a>
                <a href='https://www.linkedin.com/posts/blue-hutch_startuplife-entrepreneur-startups-activity-7252830772212969472-PiFK?utm_source=share&utm_medium=member_desktop' target="_blank" className='pr-5'><AiOutlineLinkedin size={30} color='#98FF98'/></a>
                <a href='mailto:bluehutch01@gmail.com' target="_blank" className='pr-5'><AiOutlineMail size={30} color='#98FF98'/></a>
                <a href='https://www.youtube.com/@BlueHutch-d2u' target="_blank" className='pr-5'><AiOutlineYoutube size={30} color='#98FF98'/></a>
                <a href='https://www.facebook.com/profile.php?id=61566925032505' target="_blank" className='pr-5'>  <AiOutlineFacebook size={30} color='#98FF98'/></a>  
            </div>
        </div>
        
    )
}

export default Header

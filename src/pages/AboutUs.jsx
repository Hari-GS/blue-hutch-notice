import React from 'react'
import myPic from '../assets/edited for bh hari.png'
import deepanPic from '../assets/edited for bh deepan.png'
import SameerPic from '../assets/sameer2.png'
import premPic from '../assets/prem2.png'

function AboutUs() {
    return (
        <div className='md:px-5 md:py-16 py-32'>
        <div>
            <div className='md:text-[#DBFF5E] text-white text-center text-2xl md:text-3xl'>
               
                <div className='md:text-white text-[#DBFF5E] pt-2'>We're still under development, but fully functional with our current features.</div>          
            </div>
            <div className='text-white  md:py-10 py-7 bg-customBlue1 my-16 mx-3 md:mx-10 rounded-3xl bg-gradient-to-r from-forGradient  to-customBlue1 px-4 md:px-8'>
                <div className='pb-5'>
                    IMPORTANT : We Need Web developers & Web Designers to work in your free time!
                </div>
                <div>
                    The deal here is we will get projects from clients, after that based on your profile and interview performance, we will create a team and assign the project. you will be led and helped by our skilled tech leads to complete the project. you can do this in part time. Team head can pick your own team, tech stack and design. Once the discussion happened between us and clients with your design and approved, you will decide your deadline and submit to us. after you successfully completed within deadline and met the client's expectations, we will provide 75 percent of the development fee to you, either you could be a team or single developer. Based on successful completion and client satisfaction, you will get a rating. High rating will make you get more and more projects often. it’s just a one service, we will add more and more products and services in our platform in future. You can contribute to them all in your free time and get paid. Sounds good? Then do join by contacting the mobile number +91 6369312803 (WhatsApp preferred) or Email bluehutch01@gmail.com . See you there!
<br/><br/>
Regards,<br/>
Hari and Team
                </div>
            </div>    
        </div>
        <div className='md:px-20 md:pb-10 pb-10 px-4'>
            <div className="text-center" >
                <h1 className='text-white w-28 text-3xl border-b-4 pb-2 border-customBlue1 text-center '>Admins</h1>            
            </div>
            <div className='md:flex justify-between'>
            <div className=' text-white border-[#DBFF5E] border-2 py-7 my-10 md:w-1/5 flex flex-col rounded-3xl items-center justify-center'>
                <img className='w-24 h-24 rounded-full  object-cover' src={myPic}/>
                <div className='px-4 text-center'>
                    <h3 className='py-3'>Hariharan G</h3>
                    <p className='py-3'>B.E (CS Engineering) Graduate
                    From P.R. Engineering College, Thanjavur, TN, India.</p>
                </div>
                <div>

                </div>
            </div>
            <div className=' text-white border-[#DBFF5E] border-2 py-7 my-10 md:w-1/5 flex flex-col rounded-3xl items-center justify-center'>
                <img className='w-24 h-24 rounded-full object-cover ' src={deepanPic}/>
                <div className='px-4 text-center'>
                    <h3 className='py-3'> Deepan Raj K </h3>
                    <p className='py-3'>B.E (CS Engineering) Graduate
                    From P.R. Engineering College, Thanjavur, TN, India.</p>
                </div>
                <div>

                </div>
            </div>
            <div className=' text-white border-[#DBFF5E] border-2 py-7 my-10 md:w-1/5 flex flex-col rounded-3xl items-center justify-center'>
                <img className='w-24 h-24 rounded-full object-cover ' src={premPic}/>
                <div className='px-4 text-center'>
                    <h3 className='py-3'> Prem M</h3>
                    <p className='py-3'>B.E (CS Engineering) Graduate
                    From Anjalai Ammal Engineering College, Thiruvarur, TN, India.</p>
                </div>
               
            </div>
            <div className=' text-white border-[#DBFF5E] border-2 py-7 my-10 md:w-1/5 flex flex-col rounded-3xl items-center justify-center'>
                <img className='w-24 h-24 rounded-full object-cover ' src={SameerPic}/>
                <div className='px-4 text-center'>
                    <h3 className='py-3'>Sameer Ahamed A</h3>
                    <p className='py-3'>BCA Graduate From Annai College of arts and science, Kumbakonam, Thanjavur, TN, India</p>
                </div>
                
            </div>
           
          
            
            
            
            </div>
           
        </div>
        </div>
    )
}

export default AboutUs

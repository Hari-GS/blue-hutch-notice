import React from 'react'
import myPic from '../assets/photo_1_2024-10-20_06-38-44.jpg'
import deepanPic from '../assets/photo_2_2024-10-19_15-44-15.jpg'
import SameerPic from '../assets/photo_1_2024-10-19_15-44-15.jpg'
import premPic from '../assets/photo_1_2024-10-19_17-26-24.jpg'

function AboutUs() {
    return (
        <div className='md:px-20 md:pb-10 pb-10 px-4'>
            <div >
                <h1 className='text-white text-3xl border-b-4 w-32 pb-2 border-customBlue1'>About Us</h1>            
            </div>
            <div className='md:flex justify-between'>
            <div className=' text-white border-milkyGreen border-2 py-7 my-10 md:w-1/6 flex flex-col rounded-3xl items-center justify-center'>
                <img className='w-24 h-24 rounded-full  object-cover' src={myPic}/>
                <div className='px-4 text-center'>
                    <h3 className='py-3'>Hariharan G</h3>
                    <p className='py-3'>Founder/CEO  – Technical & Operations Lead</p>
                    <p className='py-3'>B.E (CS Engineering) Graduate
                    From P.R. Engineering College, Thanjavur, TN, India.</p>
                </div>
                <div>

                </div>
            </div>
            <div className=' text-white border-milkyGreen border-2 py-7 my-10 md:w-1/6 flex flex-col rounded-3xl items-center justify-center'>
                <img className='w-24 h-24 rounded-full object-cover ' src={deepanPic}/>
                <div className='px-4 text-center'>
                    <h3 className='py-3'> Deepan Raj K </h3>
                    <p className='py-3'>Project Manager & Designer Coordinator</p>
                    <p className='py-3'>B.E (CS Engineering) Graduate
                    From P.R. Engineering College, Thanjavur, TN, India.</p>
                </div>
                <div>

                </div>
            </div>
            <div className=' text-white border-milkyGreen border-2 py-7 my-10 md:w-1/6 flex flex-col rounded-3xl items-center justify-center'>
                <img className='w-24 h-24 rounded-full object-cover ' src={premPic}/>
                <div className='px-4 text-center'>
                    <h3 className='py-3'> Prem M</h3>
                    <p className='py-3'>Marketing & Community Manager</p>
                    <p className='py-3'>B.E (CS Engineering) Graduate
                    From Anjalai Ammal Engineering College, Thiruvarur, TN, India.</p>
                </div>
               
            </div>
            <div className=' text-white border-milkyGreen border-2 py-7 my-10 md:w-1/6 flex flex-col rounded-3xl items-center justify-center'>
                <img className='w-24 h-24 rounded-full object-cover ' src={SameerPic}/>
                <div className='px-4 text-center'>
                    <h3 className='py-3'>Sameer Ahamed A</h3>
                    <p className='py-3'>Sales & Client Relationship Manager</p>
                    <p className='py-3'>BCA Graduate From Annai College of arts and science, Kumbakonam, Thanjavur, TN, India</p>
                </div>
                
            </div>
           
          
            
            
            
            </div>
           
        </div>
    )
}

export default AboutUs

import React from 'react'
import dhGif from '../assets/new duo image.gif';

function WebsitesAd() {
    return (
        <div className='text-[#03346E] md:px-5 px-3 md:py-14 py-32 bg-[#6EACDA]'>
        <div className='flex md:flex-row flex-col justify-between'>
            
            <div className='md:w-1/2 md:mx-10 bg-[#03346E] text-white pt-10 rounded-2xl px-3'>
                <div className="text-lg font-bold">Custom Websites / Web Applications</div>
                <p className='pt-4'>- We build custom websites and web apps based on your unique needs. Each project is handled personally by our developer duo, Hari and Deepan. </p>
                <p>- Whether you have specific ideas or aren't sure what you need, we can help by researching your industry and offering the best solutions. </p>
                <p>- Right now, we're focused on building our reputation and trust rather than making big profits. That’s why we’re offering our services at much lower rates than the market price.</p>
                <p>- This is a great chance to get an affordable website and boost your online presence, helping you attract more customers.</p>
                <p>- Get in touch with us by phone or email to discuss your project and place your order!</p>
            </div>
            <div>
                <div className="flex justify-center md:pt-0 pt-14 md:pr-48 ">
                    <img 
                    src={dhGif} 
                    alt="Animated Reliability" 
                    className="h-52 mt-3 rounded-xl" 
                    />
                </div>
                <p className="text-[24px] text-[#03346E] mt-8 md:pr-48 text-center font-bold">Hari & Deepan<br/><h5 className="text-[#03346E]">The Developer Duo You'll Ever Need</h5><br/><p className="md:text-[17px] text-base">For Orders : <br/>+91 6369312803 - WhatsApp preferred<br/>Email : bluehutch01@gmail.com</p></p>    
            </div>
        
            
        </div>
        <h3 className='md:mt-16 md:py-5 md:ml-[470px] md:w-1/3 bg-[#30f49b] text-center text-[#03346E] rounded-xl mt-6 glow-effect'>
            Current Offer : Up to 50% off for Now
        </h3>

        </div>
    )
}

export default WebsitesAd

import React from 'react'
import websiteimg1 from "../assets/tour-website-home-page.jpg";
import websiteimg2 from "../assets/Em-games-homepage.png"

function PastWorks() {

    const config={
        projects: [
            {
                image: websiteimg2,
                title:'Embedded Games Web Application (Client Mr.Paarthi - USA)',
                line1: '- Developed a full-stack web application featuring 10+ embedded games, complete with user authentication, interactive like button, and a comment section that supports over 500 active users. ',
                line2: '- Designed with dynamic, responsive elements, increasing user engagement by 40%. Integrated a scalable backend to handle up to 1,000 concurrent users, ensuring a seamless gaming experience.',
                // line3: '- Integrated a robust booking engine, reducing booking time by 40% and enhancing user satisfaction. Optimized the application for scalability, handling up to 10,000 concurrent users.',
                gitlink:"https://github.com/Hari-GS/e-com.git",
                gitlinksText:"https://github.com/Hari-GS/e-com.git",
                gitlink2: "https://github.com/Hari-GS/tour-app-api.git",
                gitlinksText2 : "https://github.com/Hari-GS/tour-app-api.git",
                techstack: "HTML | CSS | JavaScript | Java Springboot | MongoDB" ,
                livelink: "",
                livelinktext: "",
                demoVideoText: "",
                demoVideoLink: "",
                liveLinkLabel : '',
                demoLabel : '',
                demoClicker : '',
                addInfos : 'Mr.Paarthi (USA) | Delivered - Nov/2024'
            },
            {
                image: websiteimg1,
                title:'Voyage Planner : Travel Booking System (Client Mr.Natarajan - TN, India)',
                line1: '- Designed a tour travel Web App',
                line2: '- Allows users to book tour trips conveniently, complete with a sign-in option for a personalized experience.',
                line3: '- Integrated a robust booking engine, reducing booking time by 40% and enhancing user satisfaction. Optimized the application for scalability, handling up to 10,000 concurrent users.',
                gitlink:"https://github.com/Hari-GS/e-com.git",
                gitlinksText:"https://github.com/Hari-GS/e-com.git",
                gitlink2: "https://github.com/Hari-GS/tour-app-api.git",
                gitlinksText2 : "https://github.com/Hari-GS/tour-app-api.git",
                techstack: "React js | Java Springboot | MongoDB",
                addInfos : 'Mr.Natarajan - (TN, India) | Delivered - Nov/2024'
            }
            
        ]
    }

    return (
        <div id='projects' className='flex flex-col md:pt-7 md:pb-28 py-12 md:px-5 px-2 justify-center  text-white bg-[#6EACDA]'>
            <div className='w-full'>
                <div className='flex flex-col md:py-7 pt-16 md:px-12 px-24'>
                    <h1 className='md:text-4xl text-xl md:border-b-4 border-b-2 border-[#03346E] mb-5 md:w-[305px] w-[150px] font-bold text-[#03346E] md:pb-2 pb-0 md:text-left text-center '>Our Past Works</h1>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex flex-col md:px-10 gap-5'>
                    {config.projects.map((projects , index) => (
                        <div key={index} className='rounded-2xl md:px-10 px-3 md:py-5 py-3 flex md:flex-row flex-col gap-5 bg-[#03346E]'>
                                <div>
                                <img className='w-full md:w-[1000px] rounded-lg md:p-3' src={projects.image} alt={`${projects.title} image`} />
                                </div>
                                
                                <div>
                                    <h1 className="text-center text-xl font-bold pb-3 md:p-3">{projects.title}</h1>
                                        {/* <div className='flex justify-center'>
                                            <a className='btn' target='_blank' href={projects.link}>View Project</a>
                                        </div> */}
                                    <p>{projects.line1}</p>
                                    <p>{projects.line2}</p>
                                    <p>{projects.line3}</p>
                                    <p className='font-bold'>Tech Stack :</p>
                                    <p>{projects.techstack}</p>
                                    
                                    <p className='font-bold'>{projects.demoLabel}<a className='hover:text-amber-200 font-normal text-[#6EACDA]' target='_blank'  href={projects.demoVideoLink}>{projects.demoClicker}</a></p>
                                    <p className='font-bold'>{projects.liveLinkLabel}<a className='hover:text-amber-200 font-normal text-[#6EACDA]' target='_blank' href={projects.livelink}>{projects.livelinktext}</a></p>
                                    <p>For Client : {projects.addInfos}</p>
                                </div>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default PastWorks

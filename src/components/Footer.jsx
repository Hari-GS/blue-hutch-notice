import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#493628] text-[#E4E0E1] px-6 pt-10 pb-3">
            <div className="text-center mb-3">
                <h1 className="text-3xl font-bold">Blue Hutch</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center text-center mb-5">
                <div className="flex space-x-6">
                    <a target='_blank' href="mailto:bluehutch01@gmail.com">
                        <i className="fa-solid fa-envelope text-[#E4E0E1] text-3xl hover:text-teal-500"></i>
                    </a>

                    <a target='_blank' href="https://www.facebook.com/profile.php?id=61566925032505">
                        <i className="fa-brands fa-facebook-square text-[#E4E0E1] text-3xl hover:text-teal-500"></i>
                    </a>
                    <a target='_blank' href="https://www.instagram.com/blue.hutch/">
                        <i className="fa-brands fa-instagram-square text-[#E4E0E1] text-3xl hover:text-teal-500"></i>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/posts/blue-hutch_startuplife-entrepreneur-startups-activity-7252830772212969472-PiFK?utm_source=share&utm_medium=member_desktop">
                        <i className="fa-brands fa-linkedin text-[#E4E0E1] text-3xl hover:text-teal-500"></i>
                    </a>
                    <a target='_blank' href="https://www.youtube.com/@BlueHutch-d2u">
                        <i className="fa-brands fa-youtube text-[#E4E0E1] text-3xl hover:text-teal-500"></i>
                    </a>
                </div>
            </div>
            <div className="text-center">
                <p className="text-sm">&copy; 2024 Blue Hutch. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;

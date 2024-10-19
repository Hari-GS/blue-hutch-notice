import React from 'react'

function Footer() {
    return (
        <div className='bg-milkyGreen flex flex-col items-center justify-center py-8'>
            
            <h2 className='text-customBlue2 text-3xl border-b-4 w-30 pb-2 border-customBlue2'>Contact</h2>         
            <p className='text-center font-medium'> {/* Added space-y-2 for vertical padding */}
                <p className='py-3'>Email ID - bluehutch01@gmail.com</p>

                <p className='pb-3'>WhatsApp - +91 6369312803 , +91 9597439871 </p>
              
                <p className='pb-3'>Facebook - Blue Hutch</p>
                 
                <p className='pb-3'>YouTube - Blue Hutch | @BlueHutch-d2u</p>
            
                <p>LinkedIn - Blue Hutch</p>
            </p>
        </div>
    )
}

export default Footer

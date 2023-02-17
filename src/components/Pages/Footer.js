import React from 'react'
import '../css/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        {/* <div className='card'> */}
            <div className='row1'>
                <div className='left_section1'>
                    <h1>DeGods</h1>
                    <p>DeGods is a digital art collection and global community of creators, developers, entrepreneurs, athletes, artists, experimenters and innovators.</p>
                </div>
                <div className='right_section1'>
                    <h1>FOOLOW US</h1>
                    <div className='icons'>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-telegram"></i>
                    </div>
                </div>
            </div>
            <div className='row2'>
                <div className='left_section'>Terms and Conditions</div>
                <div className='right_section'>Copyright 2023. Made with ♥ by Solswipe</div>
            </div>
        {/* </div> */}

    </div>
  )
}

export default Footer
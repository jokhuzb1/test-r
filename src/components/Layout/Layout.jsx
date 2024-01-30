import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
export default function Layout({children}) {
  return (
    <div>
        <div className='bg-black text-white font-extralight text-xs flex justify-between px-12 py-1'>
            <div >
                <span ><FontAwesomeIcon className='icon' icon={faPhone}/> +123456789</span>
                <span><FontAwesomeIcon className='icon' icon={faLocationDot}/>Ukraine, Kyiv, Khreshchatyk 1</span>
                <span><FontAwesomeIcon className='icon' icon={faClock}/>All week 24/7</span>
            </div>
            <div>
                <FontAwesomeIcon className='icon'  icon={faFacebook}/>
                <FontAwesomeIcon className='icon' icon={faTwitter}/>
                <FontAwesomeIcon className='icon' icon={faInstagram}/>
                <FontAwesomeIcon className='icon' icon={faPinterest}/>
            </div>
        </div>
        <Navbar />
        {children}
        <Footer/>
        </div>
  )
}

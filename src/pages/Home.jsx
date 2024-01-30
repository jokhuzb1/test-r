import React from 'react'
import HeadImgCard from '../components/HeadImgCard'
import bag from '../assets/img/bag.jpg';
import main from '../assets/img/main.jpg';
import men from '../assets/img/men.jpg';
import women from '../assets/img/women.jpg';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import Servicer from '../components/Servicer';
export default function Home() {
  return (
    <div>
        <div className='grid grid-cols-2 m-20 gap-10 font-Leauge overflow-hidden'>
        <section>
            <HeadImgCard img={main} category='misto brand' title='banner'/>
        </section>
        <section className='grid grid-cols-2 gap-5 auto-fit'>
            <HeadImgCard img={men} category='Men'/>
            <HeadImgCard img={women} category='Women'/>
            <HeadImgCard className='w-full'img={bag} category='accessories'/>
        </section>
    </div>
    <div className='flex justify-around'>
    <Servicer icon={faTruck} title="free shipping" description="On all UA order or order above $100"/>
    <Servicer icon={faRecycle} title="30 DAYS RETURN" description="Simply return it within 30 days for an exchange"/>
    <Servicer icon={faInfo} title="SUPPORT 24/7" description="Contact us 24 hours a day, 7 days a week"/>
    </div>
  </div>
    
  )
}

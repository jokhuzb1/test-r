import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatePage } from '../features/pages/pagesSlice';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  const dispatch = useDispatch();
  const page = useSelector((state)=> state.pages.value)
  return (
    <nav className='grid grid-cols-3 gap-4 m-4  font-Leauge leading-3 text-md '>
      <div  >
        <span className='col-1 flex justify-center text-4xl'
        
        onClick={()=>dispatch(updatePage('home'))}>MiSto</span>
        </div>
      <ul className='flex justify-around items-center gap-5 col-2 text-base font-thin'>
        <li onClick={()=>dispatch(updatePage('about'))}>About Us</li>
        <li onClick={()=>dispatch(updatePage('women'))}>Women</li>
        <li onClick={()=>dispatch(updatePage('men'))}>Men</li>
        <li onClick={()=>dispatch(updatePage('electronic'))}>Electronic</li>
        <li onClick={()=>dispatch(updatePage('jewelery'))}>Jewelery</li>
        <li onClick={()=>dispatch(updatePage('contact'))}> Contact</li>
      </ul>
      <ul className='flex col-1 justify-center '>
        <li><FontAwesomeIcon className='mr-2' icon={faMagnifyingGlass}/></li>
        <li><FontAwesomeIcon className='mr-2' icon={faGlobe}/></li>
        <li><FontAwesomeIcon  icon={faShoppingBag}/></li>
      </ul>
    </nav>
  )
}

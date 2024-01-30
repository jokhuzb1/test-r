import { useState } from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Jewelery from './pages/Jewelery'
import Electronic from './pages/Electronic'
import Contact from './pages/Contact'
import { useSelector } from 'react-redux'
function App() {

  const currentPage = useSelector((state)=>state.pages.value)
  const pages = {
    'home':<Home/>,
    'women':<Women/>,
    'men':<Men/>,
    'electronic':<Electronic/>,
    'jewelery':<Jewelery/>,
    'contact':<Contact/>,
    'about':<About/>,
  }
  return (
    <div className='font-Leauge'>
      <Layout >
        {pages[currentPage]}
      </Layout>
    </div>
  )
}

export default App

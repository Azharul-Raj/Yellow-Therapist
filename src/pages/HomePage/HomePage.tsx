import {Router,Route,BrowserRouter} from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Hero from './sections/Hero'
import Header from '../../components/Header'

export default function HomePage() {
  return (
    <>
      {/* <Nav/> */}
      <Header/>
      <div className="hidden md:block">

      <Hero/>
      </div>
    </>
  )
}

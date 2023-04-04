import {Router,Route,BrowserRouter} from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Hero from './sections/Hero'

export default function HomePage() {
  return (
    <>
      <Nav/>
      <div className="hidden md:block">

      <Hero/>
      </div>
    </>
  )
}

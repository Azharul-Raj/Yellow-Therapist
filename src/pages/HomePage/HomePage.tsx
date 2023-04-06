import {Router,Route,BrowserRouter} from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Hero from './sections/Hero'
import Slider from './sections/Slider'
import WhySection from './sections/WhySection/WhySection'

export default function HomePage() {
  return (
    <>
      <Slider/>
    <Hero/>
    <WhySection/>
    </>
  )
}

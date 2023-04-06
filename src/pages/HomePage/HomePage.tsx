import {Router,Route,BrowserRouter} from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Hero from './sections/Hero'
import Slider from './sections/Slider'
import WhySection from './sections/WhySection/WhySection'
import Sponsors from './sections/Sponsors'
import Pricing from './sections/Pricing'

export default function HomePage() {
  return (
    <>
      <Slider/>
    <Hero/>
    <WhySection/>
    <Pricing/>
    <Sponsors/>
    </>
  )
}

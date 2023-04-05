import {Router,Route,BrowserRouter} from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Hero from './sections/Hero'
import Slider from './sections/Slider'

export default function HomePage() {
  return (
    <>
    {/* <Hero/> */}
      <Slider/>
    </>
  )
}

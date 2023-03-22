import {Router,Route,BrowserRouter} from 'react-router-dom'
import Nav from '../../components/Nav'
import Hero from './sections/Hero'

export default function HomePage() {
  return (
    <>
      <Nav/>
      <Hero/>
    </>
  )
}

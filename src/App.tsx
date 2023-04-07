import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import HomePage from './pages/HomePage/HomePage';
import Main from './layout/Main/Main';
import Products from './pages/Products/Products';
import { useEffect, useState } from 'react';
import BookSpinner from './components/spinners/BookSpinner/BookSpinner';

function App() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setLoading(false)
  },[])
  if(loading){
    return <BookSpinner/>
  }
  return (
   <Routes>
      <Route path='/' element={<Main/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
      </Route>
   </Routes>
  )
}

export default App

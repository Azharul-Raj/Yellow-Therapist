import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import HomePage from './pages/HomePage/HomePage';
import Main from './layout/Main/Main';

function App() {

  return (
   <Routes>
      <Route path='/' element={<Main/>}>
        <Route path='/' element={<HomePage/>}/>
      </Route>
   </Routes>
  )
}

export default App

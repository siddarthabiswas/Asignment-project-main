import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Statistics from './Components/Statistics/Statistics';
import Application from './Components/Application/Application';
import Blog from './Components/Blog/Blog';
import Navbar from './Components/Home/Navbar/Navbar';
import Jobdetails from './Components/Jobdetails/Jobdetails';
import Applyjob from './Components/Applyjob/Applyjob';
import AppliedJob from './Components/AppliedJob/AppliedJob';
import FutureJob from './Components/FutureJob/FutureJob';
import Chat from './Components/Chat/Chat';


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Statistics></Statistics>}></Route>
        <Route path='/apply' element={<Application></Application>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/jobdetls' element={<Jobdetails></Jobdetails>}></Route>
        <Route path='/applyjob' element={<Applyjob></Applyjob>}></Route>
        <Route path='/appliedJob' element={<AppliedJob></AppliedJob>}></Route>
        <Route path='/apply' element={<FutureJob></FutureJob>}></Route>
        <Route path='/static' element={<Chat></Chat>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

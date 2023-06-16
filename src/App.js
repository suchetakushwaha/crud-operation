
import './App.css';
import Contact from './Contact';
import About from './component/About';

import Home from './component/Home';
import Navbar from './component/Layout/Navbar';
import {BrowserRouter,Route,Routes}  from "react-router-dom"
import PageNotfound from './component/PageNotfound';
import AddUser from './component/AddUser';
import { useEffect } from 'react';

function App() {



  useEffect(()=>{

     const items =localStorage.getItem('items');
   
     if(!items){
    
        localStorage.setItem("items",JSON.stringify([]))
     }

  },[])



  return (
    <div className="App">
 <Navbar/>
<BrowserRouter>
<Routes>
  <Route  path ="/home" element = {<Home/>}></Route>
  {/* <Route path ="/about" element = { <About/>}></Route>
  <Route path ="/contact" element = { <Contact/>}></Route> */}
  <Route index element = {<AddUser/>}></Route>
  {/* <Route path ="*" element = { <PageNotfound/>}></Route> */}
</Routes>
</BrowserRouter>
 
    </div>
  );
}

export default App;

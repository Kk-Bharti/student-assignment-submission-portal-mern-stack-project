import './App.css';
import Header from './Header';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Contact from './Contact';
import Assignment from './Component/Assignment'
import Footer from './Component/Footer';
import Dashbord from './Component/Dashbord';
import About from './Component/About'
import Register from './Register'



function App() {
  return (
    <>
   <Header></Header>
   
    <Routes>
    
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashbord/>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/abute' element={<About></About>}></Route>
      {/* //<Route path='/register' element={<Register></Register>}></Route> */}
      
    </Routes>
    <Footer></Footer>
   
   
   
   
   </>
  );
}

export default App;

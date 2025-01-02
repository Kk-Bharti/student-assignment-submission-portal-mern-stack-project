// import React, {useState , useEffect} from 'react'
// import axios from "axios"
// import config from "./config.json"
// import './index.css';
// import background from './background.png'
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const navigate =useNavigate()

//   const [formData, setFormData] = useState({
//     fullName: '',
//     remail: '',
//     upassword:'',
//     confirmPassword:''
//   });

//   const [email, setemail]= useState({})
//   const [password,setpassword]= useState({})

  



//   const handleChange = ((e) => {
   

//     const {name,value}=e.target
//         setFormData({...formData,[name]:value})
      
//   });

  
  

//   const handleSubmit = async (e) => {
  
//         e.preventDefault();
//         console.log(formData);
    
//         const result =axios.post("http://localhost:5000/register", {
//             formData,
//           })
//           .then((response) =>{
//              console.log(response)
//             //  console.log(result)
//              navigate("/")
             
//             })
//           .catch((err) => console.log(err));
//         alert("User Registered Successfully");
        
    
//   };

  
//   const loginData = {
//     email: email,
//    password: password
//   };

// console.log(loginData)
//  const loginsubmoit =(async(e)=>{

            
//               e.preventDefault();
            
//               // try {
//               //   const response = await axios.post("http://localhost:5000/api/login", loginData);
//               //   console.log('Login successful:', response.data); // Log response data for debugging
            
//               //   // Handle successful login based on your application logic (e.g., redirect, store token)
//               //   alert("Login successful!");
//               //   navigate("/Dashboard"); // Replace with your desired redirect path
//               // } catch (error) {
//               //   console.error('Login error:', error); // Log the error for debugging
//               //   alert("Login failed. Please check your credentials or try again later."); // Informative error message
//               // }

//               try {
//                       const response = await axios.post('http://localhost:5000/api/login', loginData);
//                       console.log('Login successful:', response.data);
//                       alert('Login successful!');
//                       navigate('/Dashboard');
//                     } catch (error) {
//                       console.error('Login error:', error);
//                       alert('Login failed. Please check your credentials.');
//                     }
//  })

 
  


//   const [showModal, setShowModal] = useState(false);

//     const toggleModal = (e) => {
//       e.preventDefault()
//         setShowModal(!showModal);
//     };
//   return (
    
// <>
// <div id='body'>
//   <div  class="row justify-content-center ">
//     <div class="col-md-6">
//       <div id='loginpage'class="card">
//         <div class="card-header">
//           Login
//         </div>
//         <div class="card-body">
//           <form onSubmit={loginsubmoit} method='post'>
//             <div class="mb-3">
//               <label for="email" class="form-label">Email address</label>
//               <input type="email" onChange={((e)=>setemail(e.target.value))} name="email" class="form-control" id="email" aria-describedby="emailHelp"/>
//             </div>
//             <div class="mb-3">
//               <label for="password" class="form-label">Password</label>
//               <input type="password" onChange={((e)=>setpassword(e.target.value))} name="password" class="form-control"  id="password"/>
//             </div>
//             <input type='radio' name='btn' id='student' value='student'/> <label for='student'>student</label>&nbsp; | &nbsp;
//             <input type='radio'name='btn' value='Teacher' id='teacher' /> <label for='teacher'>Teacher</label>&nbsp; | &nbsp;
//             <input type='radio' name='btn' value='Admin' id='admin' /> <label for='admin'> Admin</label>&nbsp;&nbsp;&nbsp;&nbsp;
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <br/>
//             <br/>
//             <button type="submit" id="login" class="btn btn-primary ">Login</button>
//             <span> Don't have an account? <Link to="/register" onClick={toggleModal}  >Sign up</Link></span>
//           </form>
//         </div>
//       </div>
//     </div>
//             {/* <button onClick={toggleModal} className="open-modal-button">
//                 Open Registration Form
//             </button> */}
//   </div>






// {/* <div className="App">
            

//             {showModal && (
//                 <div className="modal-overlay">
//                     <div className="modal-container">
//                         <h1>Register</h1>
//                         <form onSubmit={handleSubmit} method="post">
//                             <div className="form-group">
//                                 <label htmlFor="name">Full Name</label>
//                                 <input type="text" id="name" name="fullName" onChange={handleChange} placeholder="Enter your full name" required />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email Address</label>
//                                 <input type="email" id="remail" name="remail" onChange={handleChange} placeholder="Enter your email" required />
//                             </div>
                           
//                             <div className="form-group">
//                                 <label htmlFor="password">Password</label>
//                                 <input type="password" id="upassword" name="upassword" onChange={handleChange} placeholder="Create a password" required />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="confirm-password" >Confirm Password</label>
//                                 <input
//                                     type="password"
//                                     id="confirmPassword"
//                                     onChange={handleChange}
//                                     name="confirmPassword"
//                                     placeholder="Confirm your password"
//                                     required
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <button type="submit">Register</button>
//                             </div>
//                             <div class="form-group">
//                 <p>Already have an account? <a href="#">Login here</a></p>
//             </div>
//                         </form>
//                         <button onClick={toggleModal} className="close-modal-button">
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div> */}

//         </div>
// </>
//   )
// }

// export default Login



// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import './index.css';

// // function Login() {
// //   const navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });

// //   const [loginData, setLoginData] = useState({
// //     username: '',
// //     password: ''
// //   });

// //   const [showModal, setShowModal] = useState(false);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name in formData) {
// //       setFormData({ ...formData, [name]: value });
// //     } else {
// //       setLoginData({ ...loginData, [name]: value });
// //     }
// //   };

// //   const handleRegisterSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post('http://localhost:5000/register', formData);
// //       alert('User Registered Successfully');
// //       setShowModal(false);
// //     } catch (error) {
// //       console.error('Registration error:', error);
// //       alert('Registration failed. Please try again.');
// //     }
// //   };

// //   const handleLoginSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/login', loginData);
// //       console.log('Login successful:', response.data);
// //       alert('Login successful!');
// //       navigate('/Dashboard');
// //     } catch (error) {
// //       console.error('Login error:', error);
// //       alert('Login failed. Please check your credentials.');
// //     }
// //   };

// //   const toggleModal = () => setShowModal(!showModal);

// //   return (
// //     <div id="body">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <div id="loginpage" className="card">
// //             <div className="card-header">Login</div>
// //             <div className="card-body">
// //               <form onSubmit={handleLoginSubmit}>
// //                 <div className="mb-3">
// //                   <label htmlFor="username" className="form-label">Email address</label>
// //                   <input
// //                     type="email"
// //                     name="username"
// //                     className="form-control"
// //                     id="username"
// //                     value={loginData.username}
// //                     onChange={handleInputChange}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="mb-3">
// //                   <label htmlFor="password" className="form-label">Password</label>
// //                   <input
// //                     type="password"
// //                     name="password"
// //                     className="form-control"
// //                     id="password"
// //                     value={loginData.password}
// //                     onChange={handleInputChange}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="mb-3">
// //                   <input type="radio" name="role" value="student" id="student" /> <label htmlFor="student">Student</label>&nbsp; | &nbsp;
// //                   <input type="radio" name="role" value="teacher" id="teacher" /> <label htmlFor="teacher">Teacher</label>&nbsp; | &nbsp;
// //                   <input type="radio" name="role" value="admin" id="admin" /> <label htmlFor="admin">Admin</label>
// //                 </div>
// //                 <button type="submit" id="login" className="btn btn-primary">Login</button>
// //                 <span> Don't have an account? <a href="#" onClick={toggleModal}>Sign up</a></span>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {showModal && (
// //         <div className="modal-overlay">
// //           <div className="modal-container">
// //             <h1>Register</h1>
// //             <form onSubmit={handleRegisterSubmit}>
// //               <div className="form-group">
// //                 <label htmlFor="fullName">Full Name</label>
// //                 <input
// //                   type="text"
// //                   id="fullName"
// //                   name="fullName"
// //                   value={formData.fullName}
// //                   onChange={handleInputChange}
// //                   placeholder="Enter your full name"
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="email">Email Address</label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleInputChange}
// //                   placeholder="Enter your email"
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="password">Password</label>
// //                 <input
// //                   type="password"
// //                   id="password"
// //                   name="password"
// //                   value={formData.password}
// //                   onChange={handleInputChange}
// //                   placeholder="Create a password"
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="confirmPassword">Confirm Password</label>
// //                 <input
// //                   type="password"
// //                   id="confirmPassword"
// //                   name="confirmPassword"
// //                   value={formData.confirmPassword}
// //                   onChange={handleInputChange}
// //                   placeholder="Confirm your password"
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <button type="submit" className="btn btn-primary">Register</button>
// //               </div>
// //               <p>Already have an account? <a href="#" onClick={toggleModal}>Login here</a></p>
// //             </form>
// //             <button onClick={toggleModal} className="close-modal-button">Close</button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Login;


// LoginPage.js
import React, { useState , useEffect } from 'react';
import './indext.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios"

const LoginPage = () => {
  const navigate = useNavigate()
  const [pdata , setpdata] = useState([])
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
console.log(formData)
  const handleSubmit = async(e) => {
    e.preventDefault();
   // console.log('Login Data:', formData);
    //alert('Login Successful!');
    //setFormData({ email: '', password: '' });
    // try {
    //          const response = await axios.post('http://localhost:5000/api/login', formData);
    //          console.log('Login successful:', response.data);
    //          //alert('Login successful!');
    //          navigate('/Dashboard');
    //         } catch (error) {
             
    //          console.error('Login error:', error);
    //          alert('Login failed. Please check your credentials.');
    //        }

    if(pdata.email == formData.email && pdata.password == formData.password){
      alert("Login successfull")
      navigate("/Dashboard")
    }
    else(
      alert("login failed . please try again")
      
    )
  };

   const fetchProduct= async ()=>{
   
        try{
        const response= await axios.get('http://localhost:5000/api/getAllproduct')
        setpdata(response.data)
        
        
        
        }
        catch(error){
            console.error("Error fetching product:",error)
        }
    }
    useEffect(()=>{
                 
        fetchProduct()
        
    },[])
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button id='loginbut' type="submit">Login</button>
        </form>
        <p className="register-link">Don't have an account? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;

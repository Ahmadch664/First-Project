
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import imageavater from './assets/img_avatar2.png'
import './login.css'
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Login = ()=>{
const [email,setEmail] = useState()
const [password,setPassword] = useState()



const emailChange =(event)=>{
    setEmail(event.target.value);
};

const passwordChange =(event)=>{
    setPassword(event.target.value);
};


const SaveHandler = async(event) =>{
    event.preventDefault()
    const login = {
        email:email,
        password:password,
        
    }
        const response = await fetch('http://localhost:8000/login/data', {
            method:'POST',
            body:JSON.stringify({login:login}),
            headers:{'Content-Type':'application/json'},
        })
        const result= await response.json()
        toast.success(result.message)
};
    return (
<form onSubmit={SaveHandler}>
    <div className='Maibbody_'>
    <div className='Body_'>
    <div className='imgcontainer'>
        <img className='Avaterimg-' src={imageavater}/>
    </div>

    <h1 className='Name_'>login</h1>
    
    <div className='Labelemail-'>
        <label >Email</label>
    </div>
    <div className='input-icon'>
        <input onChange={emailChange} required className='input_login' type='text' placeholder='Enter your email' />
         <FaRegCircleUser className='emailicon-' />
    </div>
    <div className='Labelpassword-'>
        <label >Password</label>
    </div>
   <div className='input-icon'>
     <input onChange={passwordChange} required className='input_login' type='password' placeholder='Enter your password'/>
    <MdOutlinePassword className='passwordicon' />
   </div>
    <div className='forpassword-'>
       <div className='checkbox-'>
        <input type='checkbox'/>
       </div>
      <div className='conrem-'>
          <a href='#'>Remember me?</a>
      </div >
      <div className='passwordfor-'>
        <a href='#'>Don't forget Password!</a>
     </div>
    </div>
     
    <button className='btn'>Login</button>
   <div className='reacticon-'>
     <FcGoogle  className='icongoole-'/>
    <FaFacebook  className='iconfacebook-'/>
    <FaSquareXTwitter className='iconX' />
   </div>
   <div className='forlink_'>
    <Link to='/Project2'>Back to Project Page?</Link>
    <Link to='/'>Back to Home Page?</Link>
   </div>
</div>
 
</div>
</form>




    ) ;
};
export default Login 
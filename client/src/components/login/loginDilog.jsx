import { useState,useContext } from 'react'
import './login.css'
import { authenticateSignup,authenticateLogin } from '../../service/api';
import {DataContext} from '../../context/dataProvider'
// import { set } from 'mongoose';
const accountInitialValue={
    login:{
        view:'login',
        heading:'Login',
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile number to get started"
    }
}
const signupInitialValues={
    firstname:"",
    lastname:"",
    username:"",
    password:"",
    email:"",
    phone:""
}
const loginInitialValue={
    username:'',
    password:''
}
const LoginDialog=({open,setOpen})=>{
    const[account,toggleaccount]=useState(accountInitialValue.login)
   const [signup,setSignUp]=useState(signupInitialValues);
   const [login,setLogin]=useState(loginInitialValue);
   const [error,setError]=useState(false);
   const {setAccount}=useContext(DataContext);

   const cancel_login=()=>{
    document.getElementById("login-btn").classList.remove("login-none");
    toggleaccount(accountInitialValue.login);
    setError(false);
   }
   
   
   const toggleSignUp=()=>{
    toggleaccount(accountInitialValue.signup)
   }
  
  
  
   const onInputChange=(e)=>{
    setSignUp({...signup,[e.target.name]:e.target.value})
    console.log(e.target.value)
   }
   
   
   const signUpUser=async()=>{
    let response = await authenticateSignup(signup);
    if(!response) return;
    cancel_login();
    setAccount(signup.firstname)
   }

   const onValueChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
   }
   
   const loginUser=async()=>{
    let response = await authenticateLogin(login)
    console.log(response)
    if (response.status === 200){
        cancel_login();
        setAccount(response.data.data.firstname)
    }
    else{
        setError(true);
    }
   }
   
   
    return(
        <div class="login-btn" id="login-btn">
            <div className="login-page">
            <div className="left-login">
                <h2>{account.heading}</h2>
                <p>{account.subHeading}</p>
                <h1>Smart <span>S</span>tore</h1>
            </div>
            {
                account.view === 'login' ?
            <div className="right-login">
                <input type="text" placeholder='Enter Username' name='username' onChange={(e)=>onValueChange(e)}/>
                { error && <p class="error">Please enter valid username or password</p>}
                <input type="text" placeholder='Enter Password' name='password' onChange={(e)=>onValueChange(e)}/>
                <p class="term">By continuing, you agree to Smart Store's Terms of Use and Privacy Policy.</p>
                <button class="btn-login" onClick={()=>loginUser()}>Login</button>
                <p>OR</p>
                <button>Request OTP</button>
                <p class="new-login" onClick={()=>toggleSignUp()}>New to Flipkart? Create an account</p>
            </div>
            :
            <div className="right-login">
                <input type="text" name="firstname" placeholder='Enter First Name' onChange={(e)=>onInputChange(e)}/>
                <input type="text" name="lastname" placeholder='Enter Last Name' onChange={(e)=>onInputChange(e)}/>
                <input type="text" name="username" placeholder='Enter Username' onChange={(e)=>onInputChange(e)}/>
                <input type="text" name="password" placeholder='Enter Password' onChange={(e)=>onInputChange(e)}/>
                <input type="text" name="email" placeholder='Enter Email' onChange={(e)=>onInputChange(e)}/>
                <input type="text" name="phone" placeholder='Enter Mobile Number' onChange={(e)=>onInputChange(e)}/>

                <button class="btn-login" onClick={()=>signUpUser()}>Continue</button>
            </div>
}
            </div>
            <h1 id="cancel-login" onClick={()=>cancel_login()}><i class="fa fa-close"></i></h1>
        </div>
    )
}

export default LoginDialog;
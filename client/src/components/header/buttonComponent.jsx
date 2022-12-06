import {useContext } from 'react';
import './css/header.css'
import LoginDialog from '../login/loginDilog';
import { DataContext } from '../../context/dataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
const ButtonsHead=()=>{
    
    const openDialog =()=>{
        document.getElementById("login-btn").classList.toggle("login-none")
    }
    

    const {account,setAccount}=useContext(DataContext)
    return(
           
        <div class="buttons" id="buttons">
            
            {
                account ? <Profile account={account +  " ☟"} setAccount={setAccount}/>:
                <button onClick={()=>openDialog()}>Login</button>
                
            }
            <p>Become a Seller</p>
            <p>More &#9759;</p>
            <Link style={{textDecoration:"none",color:'white'}} to="/cart"><i class="fa fa-shopping-bag"></i>Cart</Link>
            <LoginDialog/>
        </div>
       
    );
}
export default ButtonsHead;
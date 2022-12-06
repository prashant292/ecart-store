import './css/header.css'
const Profile=({account,setAccount})=>{
    const logout=()=>{
        document.getElementById("logout").style.display="block";
    }
    const logout_account=()=>{
        setAccount('')
    }
    return(
        <>
        <div>
        <p onClick={()=>logout()}>{account}</p>
        <div id="logout" onClick={()=>logout_account()} >
            <p ><span><i class="fa fa-power-off"></i> </span> <span>Logout</span></p>
        </div>
        </div>
         
        </>
    )
}
export default Profile;
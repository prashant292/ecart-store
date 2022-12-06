
import './css/header.css';
import Search from './search';
import ButtonsHead from './buttonComponent';
import { Link } from 'react-router-dom';
const Header=()=>{
   
        
    
    return(
        <Link to="/" class="header" style={{textDecoration:'none'}}>
            <div class="logo">
            
                <h2>Ecart <span>S</span>tore<p>fast order</p></h2>
                
            </div>
            <Search/>
            <ButtonsHead />
        </Link>
    );
}
export default Header;
import './css/home.css'
import { navData } from '../constants/data';
const Navbar=()=>{
    return(
        <div class="nav">
            {
                navData.map(data =>(
                    <div class="nav_item">
                        <img src={data.url} alt="nav" />
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Navbar;
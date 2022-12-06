import './css/home.css'
import { imageURL } from "../constants/data"
const Midsection=()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
        <>
        <div class="midsection">
            {
                imageURL.map(image=>(
                    <img src={image} alt="imagescrll" />
                ))
            }
        </div>
        <img class="side-img" src={url} alt="" style={{width:'100%', height:'200px'}} />
        </>
    )
}
export default Midsection;
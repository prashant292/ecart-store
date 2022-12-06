import './css/home.css'
import Slide from "./slide";
const Midslide =({products,title,timer})=>{
    return(
    <div class="midslide">
        <div class="mid-slide">
        <Slide products={products} title={title} timer={timer}/>
        </div>
        <div class="mid">
        <img class="mid-img" src="https://img.freepik.com/free-vector/super-deal-banner-template-design_87202-1098.jpg?auto=format&h=200" alt="" />
        </div>
    </div>
    )
}
export default Midslide;
import './css/home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    } 
  };
const Slide=({products,title,timer})=>{
    return(
      <div class="product-div">
        <div class="timer">
        <div class="count-down">
        <h2>{title}</h2>
        {
          timer &&
          <div>
            <img src="https://png.pngtree.com/png-vector/20191218/ourmid/pngtree-alarm-clock-icon-alarm-clock-that-sounds-loudly-in-the-morning-png-image_2091522.jpg" alt="" style={{width:26}}/>
            <Countdown date={Date.now()+ 4.68e+7}/>
            </div>
        }
           
        </div>
        <button>View All</button>
            
            
        </div>
        <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        customTransition="all 0.5s"
    
        >
            {
                products.map(product=>(
                  <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                  <div class="products">
                    <img src={product.url} alt="banner" class="prdt-img"/>
                    <p className="desc">{product.title.shortTitle}</p>
                    <p class="discount">{product.discount}</p>
                    <p class="tagline">{product.tagline}</p>
                    </div>
                    </Link>
                ))
            }
        </Carousel>
        </div>
    );
};
export default Slide;
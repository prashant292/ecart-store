import './css/home.css'
import Navbar from './navbar';
import Banner from './banner';
import Slide from './slide'

import { getProducts } from '../../redux/actions/productAction';
// import { getProducts } from "../server/controller/product-controller";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import Midslide from './midslide';
import Midsection from './midsection';

const Home=()=>{
  const {products}= useSelector(state => state.getProducts)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
    return(
        <div class="home">
          <Navbar/>
          <div class="bg">
          <Banner/>
          <Midslide products={products} title="Deals of the Day" timer={true}/>
          <Slide products={products} title="Best of Electronics" timer={false}/>
          <Slide products={products} title="Home Essentials" timer={false}/>
          <Slide products={products} title="Fashion Top Deals" timer={false}/>
          <Midsection/>
          <Slide products={products} title="Books, Toys & More" timer={false}/>
          <Slide products={products} title="Furniture Bestsellers" timer={false}/>
          
          </div>
        </div>
    );
}
export default Home;
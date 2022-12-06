import './css/header.css'
import { useState ,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';
const Search=()=>{
    const [text,setText]= useState('');
    const dispatch=useDispatch();
    const {products}=useSelector(state => state.getProducts.products);
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText=(text)=>{
        setText(text)
    }
    return(
        <div class="search">
            <input type="search" placeholder='Search for Products and Items..' onChange={(e)=>getText(e.target.value)}/>
            <p><i class="fa fa-search"></i></p>
            {
              text && 
              <div class="search-item" >
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ul>
                    <li>
                      <Link 
                        to={`/product/${product.id}`} 
                        onClick={()=>setText('')}
                        style={{ textDecoration:'none', color:'inherit'}}
                        
                      >
                        {product.title.longTitle}
                      </Link>
                    </li>
                    </ul>
                  ))
                }  
              </div>
            }
        </div>
    );
}
export default Search;
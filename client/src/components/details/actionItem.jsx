import './detail.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const ActionItem=({product})=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {id}=product;
    const [quantity,setQuantity]=useState(1);
    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity))
        navigate('/cart')
    }
    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'keshvendra638701@gmail.com'});
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response    
        }
        post(information);
    }
    return(
        <div class="left-detail">
            <img src={product.url}  alt="" />
            <br />
            <button style={{backgroundColor:'orange'}} onClick={()=>addItemToCart()}> <i class="fa fa-shopping-bag"></i> ADD TO CART</button>
            <button onClick={() => buyNow()} style={{backgroundColor:'red'}}><i class="fa fa-bolt"></i> BUY NOW</button>
        </div>
    )
}
export default ActionItem;
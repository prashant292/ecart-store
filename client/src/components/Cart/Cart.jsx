import './cart.css'
import { useEffect } from 'react';


import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import CartItem from './CartItem';

import { post } from '../../utils/paytm';
import { payUsingPaytm } from '../../service/api';



const Cart = () => {
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    const { id } = useParams();

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(cartItems && id !== cartItems.id)   
            dispatch(addToCart(id));
    }, [dispatch, cartItems, id]);

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    // const buyNow = async () => {
        // let response = await payUsingPaytm({ amount: 500, email: 'kunaltyagi@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    return (
        < >
        { cartItems.length ? 
            <div class="main-component">
                <div class="left-component">
                    <div>
                        <h2 style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</h2>
                    </div>
                        {   cartItems.map(item => (
                                <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                            ))
                        }
                    <div>
                        <button class="place-order">Place Order</button>
                    </div>
                </div>
                <div class="right-component">
                    <TotalView cartItems={cartItems} />
                </div>
            </div> : <EmptyCart />
        }
        </>

    )
}

export default Cart;
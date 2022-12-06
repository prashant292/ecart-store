import { useState, useEffect } from 'react';
import './cart.css'



const TotalView = ({ cartItems }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost) 
        })
        setPrice(price);
        setDiscount(discount);
    }

    return (
        <div class="right-view"> 
            <div >
                <h2 style={{color:'gray',fontWeight:400}}>PRICE DETAILS</h2>
            </div >
            <div>
                <h2>Price ({cartItems?.length} item)
                    <p >₹{price}</p>
                </h2>
                <h2 x>Discount
                    <p style={{color:"rgb(2,157,74)"}}>-₹{discount}</p>
                </h2>
                <h2 >Delivery Charges
                    <p style={{color:"rgb(2,157,74)"}}>₹40</p>
                </h2>
                </div>
                <div>
                <h2>Total Amount
                    <p>₹{price - discount + 40}</p>
                </h2>
                </div>
                <p style={{color:"rgb(2,157,74)",fontWeight:600}}>You will save ₹{discount - 40} on this order</p>
            
        </div>
    )
}

export default TotalView;
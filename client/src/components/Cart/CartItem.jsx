import { addEllipsis } from '../../utils/util';
import GroupButton from './GroupButton';
import './cart.css'

const CartItem = ({ item, removeItemFromCart }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    return (
        <div style={{borderBottom:'1px solid rgb(194, 194, 194)',display:'flex'}}>
            <div>
                <img src={item.url} style={{ height: 110, width: 110 }} />
                <GroupButton />
            </div>
            <div style={{ margin: 20 }}>
                <p>{addEllipsis(item.title.longTitle)}</p>
                <p>Seller:RetailNet
                    <span><img src={fassured} style={{ width: 50, marginLeft: 10 }} /></span>
                </p>
                <p style={{margin: '20px 0'}}>
                    <span style={{fontWeight:600}}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span ><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{color:"rgb(2,157,74)",fontWeight:600}}>{item.price.discount} off</span>
                </p>
                <button onClick={() => removeItemFromCart(item.id)} class="remove">Remove</button>
            </div>
        </div>
    )
}

export default CartItem;
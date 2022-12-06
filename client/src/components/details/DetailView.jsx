import './detail.css'


import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import ActionItem from "./actionItem";


const DetailView=()=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

const dispatch=useDispatch();

const {id}=useParams();
 const {loading,product}=useSelector(state => state.getProductDetails)

useEffect(()=>{
    if(product && id !== product.id)
    dispatch(getProductDetails(id))
},[dispatch,id,product,loading])

    return(
        <div class="main-page">
            {
                product && Object.keys(product).length &&
                <div style={{marginTop:'80px'}} class="main-detail">
                    <div>
                        <ActionItem product={product}/>
                    </div>
                    <div class="right-detail">
                        <h3 style={{ fontSize: 25 ,fontWeight:600,marginBottom:'10px'}}>{product.title.longTitle}</h3>
                        <p style={{marginTop: 5, color: '#878787', fontSize: 14 }}>134 Ratings & 21 Reviews <span><img src={fassured} alt="" style={{width: 77, marginLeft: 20}} /></span></p>
                        <p><span style={{ fontSize: 28 ,fontWeight:600,marginBottom:'10px'}}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C',fontWeight:600 }}>{product.price.discount} off</span></p>
                            
                            <h3>Available offers</h3>
            <div class="offers">
                <p><i class="fa fa-tag"></i><strong>Bank Offer </strong> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</p>
                <p><i class="fa fa-tag"></i><strong>Offer</strong> 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</p>
                <p><i class="fa fa-tag"></i>Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</p>
                <p><i class="fa fa-tag"></i>Partner OfferExtra 10% off upto ₹500 on next furniture purchase</p>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td style={{ color: '#878787' }}>Delivery</td>
                        <td style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</td>
                    </tr>
                    <tr>
                        <td style={{ color: '#878787' }}>Warranty</td>
                        <td>No Warranty</td>
                    </tr>
                    <tr>
                        <td style={{ color: '#878787' }}>Seller</td>
                        <td>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <p>GST invoice available</p>
                            <p>View more sellers starting from ₹329</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} >
                            <img src={adURL} style={{ width: 370 }} alt=""/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ color: '#878787',marginRight:10 }}>Description</td>
                        <td style={{fontSize:14}}>{product.description}</td>
                    </tr>
                </tbody>
            </table>
                    </div>
                </div>
            }
        </div>
    )
}
export default DetailView;
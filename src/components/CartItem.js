import React from "react";
import {useDispatch} from 'react-redux'
import {INCREASE, DECREASE, REMOVE, TOGGLE_AMOUNT,removeItem,decrease,increase} from "../actions";

const CartItem = ({id , img, title, price, amount, remove,   toggle,}) => {

    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn"
                        onClick={() => dispatch(removeItem(id))}>remove
                </button>
            </div>
            <div>
                <button
                    onClick={()=>dispatch(increase(id,amount))}
                    // onClick={()=>toggle('inc')}
                    className="amount-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"/>
                    </svg>
                </button>
                {/* amount */}
                <p className="amount">{amount}</p>
                <button
                    // onClick={()=>{
                    //   return  ( amount > 1 ? toggle('dec') : remove() )
                    // }}
                    onClick={amount > 1 ? ()=>dispatch(decrease(id,amount)) : ()=>dispatch(removeItem(id))}
                    className="amount-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//
//     // const {id, amount} = ownProps
//     return {
//         remove: () => dispatch(removeItem(id)),
//         // increase: () => dispatch({type: INCREASE, payload: {id, amount}}),
//         // decrease: () => dispatch({type: DECREASE, payload: {id, amount}}),
//         // toggle:(toggle)=> dispatch({type: TOGGLE_AMOUNT, payload:{id, toggle}})
//     }
// }
export default CartItem

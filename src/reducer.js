import {INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS, } from "./actions";

const reducer = (state, action) => {

    switch (action.type) {
        case CLEAR_CART:
            return {...state, cart: []}
        case DECREASE:
            const cartItem = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item = {...item, amount: item.amount - 1}
                }
                return item
            })

            return {...state, cart: cartItem}
        case INCREASE:
            let itemInc = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    item = {...item, amount: item.amount + 1}
                }
                return item
            })
            return {...state, cart: itemInc}
        case REMOVE:
            return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
        case GET_TOTALS:
            let {amount, total} = state.cart.reduce((acc, cur) => {
                const {amount, price} = cur
                console.log(amount, price)
                acc.amount += amount
                acc.total += (amount * price)
                return acc
            },
                {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2))
            return {...state, amount, total}

        // case TOGGLE_AMOUNT: {
        //     return {
        //         ...state, cart: state.cart.map(cartItem => {
        //             if (cartItem.id === action.payload.id) {
        //                 if (action.payload.toggle === 'inc') {
        //                     return (cartItem = {...cartItem, amount: cartItem.amount + 1})
        //                 }
        //                 if (action.payload.toggle === 'dec') {
        //                     return (cartItem = {...cartItem, amount: cartItem.amount - 1})
        //                 }
        //             }
        //             return cartItem
        //         })
        //     }
        // }
        default:
            return state
    }
}
export default reducer

// let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
//     const {price, amount} = cartItem
//     const itemTotal = amount * price
//     cartTotal.total += itemTotal
//     cartTotal.amount += amount
//     return cartTotal
// }, {
//     total: 0,
//     amount: 0
// })
// total = parseFloat(total.toFixed(2))
// return {...state, total, amount}

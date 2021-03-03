export const DECREASE = 'DECREASE'
export const INCREASE = 'INCREASE'
export const REMOVE = 'REMOVE'
export const CLEAR_CART = 'CLEAR_CART'
export const GET_TOTALS = 'GET_TOTALS'
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT'

export const removeItem = (id) => async (dispatch, ) => {
    dispatch ({type: REMOVE, payload: {id}})
}

export const increase = (id, amount)=> async (dispatch)=>{
    dispatch({type: INCREASE, payload: {id, amount}})
}
export const decrease = (id, amount)=> async (dispatch)=>{
    dispatch({type: DECREASE, payload: {id, amount}})
}
export const getTotals = ()=> async (dispatch,getState)=>{
    dispatch ({type: GET_TOTALS})
}

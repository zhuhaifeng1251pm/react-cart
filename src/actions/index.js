import {ADD_TO_CART,CLEAR_CAR } from "../constants";
export const addToCart=(newCart,id)=>({
    type:ADD_TO_CART,
    newCart,
    id
})
export const clearCar=()=>({
    type:CLEAR_CAR,
    
})
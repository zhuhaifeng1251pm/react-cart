import {ADD_TO_CART  } from "../constants";
const initialState= [
    {
      id: '112121',
      goodsName: 'iPad 4 Mini',
      price: 500.01,
      inventory: 1
    },
    {
      id: '116765',
      goodsName: 'T-shirt',
      price: 100,
      inventory: 10
    }
  ]
  const products =(state=initialState,action)=>{
    console.log(action) 
    switch(action.type){
      case ADD_TO_CART:return state.map(product=>product.id===action.id?
{...product,inventory:product.inventory>0?product.inventory-1:0}:product)
        default:return state;
    }


  }
  export default products
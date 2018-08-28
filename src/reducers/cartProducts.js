import {ADD_TO_CART ,CLEAR_CAR} from "../constants";

const cartProducts=(state=[],action)=>{
    switch(action.type){
        case ADD_TO_CART:
        console.log(action)
        return state=action.newCart
        case CLEAR_CAR: return state=[]
        default:return state
    }


}
export default cartProducts
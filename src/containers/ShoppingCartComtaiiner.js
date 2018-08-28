import React from 'react'
import { connect } from 'react-redux'
import  ShoppingCart from '../components/ShoppingCart' 
import { clearCar } from "../actions/index";
const ShoppingCartComtaiiner = props => <ShoppingCart {...props}/>
const mapStateToProps = state => {
return  { cartProducts:state.cartProducts };

};

export default connect(mapStateToProps,{clearCar})(ShoppingCartComtaiiner);
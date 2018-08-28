import React from 'react'
import { connect } from 'react-redux'
import  Products from '../components/Products' 
import { addToCart } from '../actions';
const ProductsContainer = props => <Products {...props}/>
const mapStateToProps = state => {

return  { products:state.products,cartProducts:state.cartProducts };

};

export default connect(mapStateToProps,{addToCart})(ProductsContainer);
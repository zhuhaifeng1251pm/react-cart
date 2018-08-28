import React, { Component } from 'react'
import styled from "styled-components";
class ShoppingCart extends Component {
  handleClear=() => {
    this.props.clearCar()
  }
  render() {
    const { cartProducts } = this.props
    const cartList =
      cartProducts.length === 0 ? (
        <span style={{color:'#fff'}}>请添加商品到购物车</span>
      ) : (
        <ul>
          {cartProducts.map(item => (
            <li key={item.id}>
              {item.goodsName} - ${item.price} x <span>{item.num}</span>
            </li>
          ))}
        </ul>
      )
    const total = cartProducts
      .reduce((total, item) => total + item.num * item.price, 0)
      .toFixed(2)
    return (
      <Wrap>
        <h2>ShoppingCart</h2>
        {cartList}
        {cartProducts.length !== 0 ? (
          <span>
            total:$
            {total}
          </span>
        ) : (
          ''
        )}
        <br />
        <button disabled={!cartProducts.length} onClick={this.handleClear}>checkout</button>
      </Wrap>
    )
  }
}

export default ShoppingCart
const Wrap=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom:20px;
  box-sizing:border-box;
  ul{
    list-style:none;
    padding:0;
    color:rgba(230,2402,255,0.5)
  }
  button{
    outline:0;
    border:0;
    width:100px;
    height:50px;
    border-radius:50px 0 50px 0;
    background-color:#1992ff;
    
  }


`
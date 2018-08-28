import React, { Component } from "react";
import { SOLD_OUT, ADD_TO_CAR } from "../constants/index";
import { addToShoppingCar } from "../selectors";
import styled from "styled-components";
class Products extends Component {
  addToCart = id => {
    const { products, cartProducts, addToCart } = this.props;
    const newCart = addToShoppingCar(products, cartProducts, id);
    addToCart(newCart, id);
    console.log(newCart);
  };
  render() {
    const { products } = this.props;
    const productList = products.map(goods => (
      <li key={goods.id}>
        <p style={{ marginBottom: 0 }}>
          {goods.goodsName} - ${goods.price.toFixed(2)}
          {goods.inventory ? <span> x ${goods.inventory}</span>: ""}
        </p>
        <button
          id="btn"
          disabled={!goods.inventory}
          onClick={() => this.addToCart(goods.id)}
          ref={inp => (this.inp = inp)}
        >
          {!goods.inventory ? SOLD_OUT : ADD_TO_CAR}
        </button>
      </li>
    ));
    return (
      <Wrap>
        <h2>Products</h2>
        <ul>{productList}</ul>
      </Wrap>
    );
  }
}

export default Products;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @font-face{
    font-family: "rrr";
    src:url('../asset/rovpal.otf'),
        url('../asset/rovpal.ttf'),
        url('../asset/rovpal.woff');
  }
  h2{
    font-family: rrr;
  }
  ul{
    align-self:flex-start;
    list-style:none;
    font-size:26px;
    color:red;
    margin-left:100px;
    span{
      color:#1992ff;
    }
    button{
      outline:0;
      border:0;
      background-color:#1992ff;
      width:120px;
      height:20px;
      border-radius:8px 0 50% 0;
    }
  }
  
`

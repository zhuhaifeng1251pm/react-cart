import React, { Component } from "react";
import Header from "./Header";
import ProductsContainer from "../containers/ProductsContainer";
import ShoppingCartComtaiiner from "../containers/ShoppingCartComtaiiner";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header />
        <hr style={{height:"2px",border:"none",borderTop:"2px groove skyblue"}}/>
        <ProductsContainer />
        <hr style={{height:"2px",border:"none",borderTop:"2px groove skyblue"}}/>
        <ShoppingCartComtaiiner />
      </Wrap>
    );
  }
}

export default App;
const Wrap = styled.div`
width: 900px;
border:1px solid #;
border-radius:160px 20px 100px 20px;
  margin: 80px auto;
  text-align:center;
  background: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0.1));
`;

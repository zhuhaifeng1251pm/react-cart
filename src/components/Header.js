import React, { Component } from "react";
import "../asset/header.css";
import styled from 'styled-components'
import { CSSTransition } from "react-transition-group";
class Header extends Component {
 
handleClick=(show) => {
  const {handleShow}=this.props
   handleShow(show)
}
  render() {
    const {show}=this.props
    return (
      <div style={{padding:"20px 0"
      }}>
        <CSSTransition
          in={show}
          timeout={300}
          classNames="message"
          unmountOnExit
        >
        {state=>(<h1>React shopping-cart</h1>)}
        </CSSTransition>
        <Button onClick={()=>{this.handleClick(show)}}>{show?'隐藏':'显示'}</Button>
      </div>
    );
  }
}

export default Header;
const Button =styled.button`
outline:0;
border:0;
border-radius:8px 0 10px 0;
background: linear-gradient(to left,#fff,#000);
transition: opactity 0.8s linear;
&:hover{
  opactity:0.3;
}
`
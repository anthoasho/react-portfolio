import React, {Component} from "react";
import {colors} from "../common/Colors";
import styled from "styled-components"

const OuterContainer = styled.div`
box-shadow: 3px 4px 3px #00000020;
width: 400px;
height: 400px;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
overflow: hidden;
background: ${colors.lightBlue};
color: white;
margin: 5px 0;
`

let BackgroundImage = styled.div`
position: absolute;
height: 100%;
width: 100%;
background-image: url(${props => props.src});
background-size: cover;
background-position: center;
transform: ${props => props.hover ? "scale(1.2)" : "scale(1)"};
transition: all 1s ease;
opacity: ${props => props.hover ? "0.7" : "1"};
zIndex: 0;

`


let Hover = styled.div`

background: #00000044;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: 0.3s ease-in-out;
opacity: ${props => props.hover ? 1 : 0};
position: absolute;
`

let Button = styled.a`
padding: 8px 40px;
background: #00000020;
border: 1px solid ${colors.lightGreen};
color: white;
border-radius: 2px;
cursor: pointer;
text-decoration: none;
font-weight: bold;

`

let StyledP = styled.p`
font-size: 20px,
letter-spacing: 2px,
z-index: 2

`



class SmallProject extends Component{

  constructor(props){
    super(props);
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this)
  }
  toggleHover(){
    this.setState({
      hover: !this.state.hover
    })
  }
  render(){
    return(
        <OuterContainer onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <BackgroundImage hover={this.state.hover} src={this.props.src}>
        </BackgroundImage>
          <Hover hover={this.state.hover}>
            <Button href={this.props.href}> View </Button>
          </Hover>
          <StyledP> {this.props.children} </StyledP>
        </OuterContainer>
    )
  }
}

export default SmallProject

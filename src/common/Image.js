import React from "react";
import {colors} from "./Colors";
import styled from "styled-components";
function Image(props){
  let returnedImage
  switch(props.type){
    case "circle":
      returnedImage = <ImgCircleContainer condition = {props.condition}> <Img src={props.src} /> </ImgCircleContainer>
      break;
    default:
      break
  }
  return returnedImage
}
let Img = styled.img`
  width: 100%;
  margin-top: -30px;
`
let ImgCircleContainer = styled.div`
  width: 250px ;
  height: 250px;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid ${colors.lightBlue};
  box-shadow: 3px 1px 7px 2px #0000009f;
  top: 0;
  right: -50%;
  transition: opacity 0.3s ease;
  opacity: ${props => props.condition ? "0" : "1"};
  @media only screen and (max-width: 800px) {
      width: 200px;
      height: 200px;

  }
`
export default Image;

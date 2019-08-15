import React from "react";
import Image from "../common/Image";
import {SiteTitle} from "../common/Title";
import styled, {keyframes} from "styled-components";
import ProfilePicture from "../images/profile.png";

import {IoIosArrowDown} from "react-icons/io";



let Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-height: auto;
z-index: 0;
width: 100%;
flex: 1 1;
top: 0
position: relative;
min-height: ${ props => props.isClosed ?  "50vh" :`calc( 100vh - ${60*4}px)`};
@media only screen and (max-width: 800px) {
  min-height: ${ props => props.isClosed ?  "50vh" :`calc( 100vh - ${40*5}px)`};

}

`


const bounce = keyframes`
  0% {
    transform: translateY(0px);
  }

  20% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

let ClickMe = styled.div`
 font-size: 18px;
 position: absolute;
 right: 0px;
 bottom: 2%;
 color: white;
 animation: ${bounce} 2s linear infinite;
 display: flex;
 align-items: center;
 width: 200px;
 opacity: 0.6;
 justify-content: space-around;
 font-family: 'Kaushan Script', cursive;
`
let AlignmentCorrect = styled.div`
  transform: translateY(-15px);
`
function Landing(props){
  let isClosed = Object.values(props).includes(true)
  return(
    <Div onClick={props.onClick} isClosed={isClosed} condition={isClosed}>
      <Image type="circle" condition={isClosed} src={ProfilePicture}/>
      <SiteTitle condition={isClosed} type="mainTitle" > Anthony Ashurst </SiteTitle>

      {!isClosed &&  <ClickMe>  <IoIosArrowDown /><AlignmentCorrect> Click here </AlignmentCorrect>   <IoIosArrowDown /> </ClickMe>}
    </Div>
  )
}
export default Landing;

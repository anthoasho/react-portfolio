import React from "react";
import Image from "../common/Image";
import {SiteTitle} from "../common/Title";
import styled, {keyframes} from "styled-components";
import ProfilePicture from "../images/profile.png";




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
  min-height: ${ props => props.isClosed ?  "50vh" :`calc( 100vh - ${40*6}px)`};

}

`

function Landing(props){
  let isClosed = Object.values(props).includes(true)
  return(
    <Div onClick={props.onClick} isClosed={isClosed} condition={isClosed}>
      <Image type="circle" condition={isClosed} src={ProfilePicture}/>
      <SiteTitle condition={isClosed} type="mainTitle" > Anthony Ashurst </SiteTitle>

    </Div>
  )
}
export default Landing;

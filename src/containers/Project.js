import React from "react";
import Title from "../common/Title";
import {colors} from "../common/Colors";
import styled from "styled-components";

let ProjectOutline = styled.div`
display: grid;
grid-template:
[row5-start] " title title" 60px [row5-end]
[row1-start] "image image" 150px[row1-end]
[row2-start] "image image" 150px [row2-end]
[row4-start] "linkOne linkTwo" 40px [row4-end]
[row6-start] "icon icon" 1fr[row-6end]
/
[col1-start] 50% 50% [col1-end];
position: relative;
align-items: center;
flex-grow: 1;
flex-basis: 400px;
margin: 30px;

`
let ProjectImage = styled.div`
  grid-area: image;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 300px;
  background-image: url(${props => props.src});
  background-position: top;
  background-size: cover;
  box-shadow: inset 3px -2px 8px 6px #00000020;
  width: 100%;
  height: 100%;
  z-index: 0;
  box-shadow: 3px 4px 3px #00000020;
  position: relative;
`


let TextBox = styled.div`
width: 100%;
overflow: hidden;
max-height: 0;
min-height: 0;
flexDirection: column;
justifyContent: space-between;
padding: 0px;
zIndex: 1;
background: white;
position: absolute;
left: 0;
right: 0;
top: 0;
transition: all 1s ease;
border-bottom: 2px solid ${colors.orange};
background: ${colors.white};
color: ${colors.darkBlue};
font-size: 18px;
padding: 0px 4px 0 4px;
text-align: center;
box-shadow: 2px 3px 3px #00000088;
${ProjectImage}:hover &${this}{
  max-height: 400px;
}
`




function Project(props){
  return(
    <ProjectOutline>
      <ProjectImage src ={props.imgSrc} >
        <TextBox>
          {props.children}
        </TextBox>
      </ProjectImage>
      <ImageLink gridArea="linkOne"  href={props.links.github} target="_blank">
        Github
      </ImageLink>
      <ImageLink gridArea="linkTwo" href={props.links.demo} target="_blank">
        View
      </ImageLink>
      <Title style={{color: colors.white,
                    gridArea: "title",
                    textAlign: "center",
                    margin: "2px 0",
                    zIndex: "1",
                    textShadow: "2px 2px 3px #0000009f"

                  }}
             type="project">
          {props.title}
      </Title>
      <MappedIcons icons={props.icons} />

    </ProjectOutline>
  )
}

function MappedIcons(props){
  let iconsArray = props.icons.map((icon, i) => <div  key={`${icon}-${i}`}style={{width: "75px", margin: "5px", padding: "5px"}} > <img src={icon.src} alt={icon.alt} style={{maxWidth: "100%", maxHeight: "75px"}}  /></div>)
  return(
    <IconsContainer>
      {iconsArray}
    </IconsContainer>
  )
}


let IconsContainer = styled.div`
  width: 100%;
  display: flex;
  grid-area: icon;
  justify-content: space-around;
  align-items: center;
  background: white
  box-shadow: 3px 4px 3px #00000020;
  height: 100%;
  flex-wrap: wrap;

`



let StyledLinksUnderImage = styled.div`
background: ${colors.darkBlue};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid rgba(75,98,131,0.7);
box-sizing: border-box;
color: white;
background: rgb(56,72,94);
background: linear-gradient(0deg, rgba(67,88,117,1) 27%, rgba(75,98,131,1) 100%);
grid-area: ${props => props.gridArea};
z-index: 1;
text-align: center;
`

function ImageLink(props){
  return(
    <StyledLinksUnderImage gridArea = {props.gridArea}>
      <a href={props.href} style={{color: "white", textDecoration: "none"}}> {props.children} </a>
    </StyledLinksUnderImage>
  )
}


export default Project

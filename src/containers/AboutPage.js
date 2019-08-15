import React from "react";
import {AboutTitle} from "../common/Title";
import {colors} from "../common/Colors";
import styled from "styled-components";
let AboutContent = styled.div`
display: flex;
width: 45%;
flex-direction: column;
flex-basis: 400px;
`
let AboutParagraphs = styled.div`

background: white;
margin-bottom: 120px;
box-shadow:0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
padding: 15px;
border-top: ${colors.orange} 10px solid;


`
let StyledP = styled.p`
  color: ${colors.black};
  font-size: 1rem;
  margin-left: 20px;
  text-align: left;
  color: ${colors.darkBlue}
`



export default function AboutPage(props){
  return(
    <AboutContent>
      <AboutTitle> {props.title}</AboutTitle>
      <AboutParagraphs>

        <StyledP>
          Four years ago I made the decision to live in Japan
        </StyledP>
        <StyledP>
          Now I focus a lot of my time into web design and development
        </StyledP>
        <StyledP>
          I still have a friendly and active side though!
        </StyledP>
        <StyledP>
          I also love doing Magic and making music
        </StyledP>

        <StyledP>
          I graduated from Durham University with a Psychology degree
        </StyledP>
        <StyledP>
          Thanks for visiting!
        </StyledP>
        </AboutParagraphs>

      </AboutContent>
  )
}

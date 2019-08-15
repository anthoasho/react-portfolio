import React from 'react';
import styled from "styled-components";
import Project from "./Project";
import SmallProject from "./SmallProject";
import Page from "./Page";
import {SiteTitle} from "../common/Title";
import AboutContent from "./AboutPage";

import {TiSocialGithubCircular, TiSocialLinkedinCircular,TiMail } from "react-icons/ti";
import {colors} from "../common/Colors";

import Logo from "../logo.svg";
import NodeJS from "../nodejs.svg";
import MongoDB from "../mongodb.svg";
import Html5 from "../html5.svg";
import CSS3 from "../css3.svg";
import Jquery from "../jquery.svg";
import Durham from "../durham.svg";
import GraduateImg from "../graduate.svg"
import Morikin from "../images/morikin.png";
import JCamp from "../images/jcamp.png";
import Clock from "../images/clock.png";
import RgbGame from "../images/rgb-game.png";
import LightsOut from "../images/lightsout.png";
import SocialMe from "../images/socialme.jpg";


let ProjectLayoutStyle = styled.div`
position: absolute;
bottom: 0;
right: 0;
left: 0;

`
let MorikinIcons = [{src: Logo,alt: "React Logo"},{src: NodeJS, alt: "NodeJS Logo"},{src: MongoDB,alt: "MongoDB Logo"},{src: Html5,alt: "HTML5 Logo"},{src: CSS3,alt: "CSS3 Logo"}]
let JCampIcons = [{src: Jquery,alt: "Jquery Logo"},{src: NodeJS,alt: "NodeJS Logo"},{src: MongoDB,alt: "MongoDB Logo"},{src: Html5,alt: "HTML5 Logo"},{src: CSS3,alt: "CSS3 Logo"}]

function ProjectLayout(props){
  return(
    <ProjectLayoutStyle>
        <Page title="Full Stack Projects"
              backgroundColor= {colors.lightBlue}
              openAction = {() => props.openPage("pageOne")}
              isOpen = {props.pageOne}
              >
          <Project title="Morikin" imgSrc={Morikin} icons={MorikinIcons} links={{github: "https://github.com/anthoasho/morikin-client", demo: "./morikin"}}>
            <p> In Progress | FullStack Web Application </p>
            <p> Web Token Authentication </p>
            <p> Fully Responsive design </p>
            <p> RESTful API </p>
          </Project>
          <Project title="JCamp" imgSrc={JCamp} icons={JCampIcons} links={{github: "https://github.com/anthoasho/JCamp", demo: "https://j-camp.herokuapp.com/"}}>
            <p> FullStack Web Application </p>
            <p> Hosted on Heroku </p>
            <p> MVC Technology Express.js</p>
            <p> Bootstrap </p>
          </Project>
        </Page>
    {/* SMALL PROJECT PAGE */}
        <Page title="Smaller Projects "
              backgroundColor= {colors.darkBlue}
              openAction = {() => props.openPage("pageTwo")}
              isOpen = {props.pageTwo}>
          <SmallProject src={Clock} href="/clock"  target="_blank"> HTML Canvas Clock </SmallProject>
          <SmallProject src={RgbGame} href="/rgb-game"  target="_blank" > RGB Game </SmallProject>
          <SmallProject src={LightsOut} href="/lights-out" target="_blank"  > Lights Out Game </SmallProject>
        </Page>
    {/* ABOUT ME */}
        <Page
            style={{justifyContent:"space-around"}}
            title="About Me"
            backgroundColor= {colors.lightGreen}
            openAction = {() => props.openPage("pageThree")}
            isOpen = {props.pageThree}>
            <AboutContent title="Hi. I'm Anthony" />
              <GraduatedDurham >
                <DurhamLogo src={Durham} />
                <Graduate  src={GraduateImg}/>
                <Polaroid />
              </GraduatedDurham>
        </Page>
    {/*CONTACT */}
    <Page
        title="Contact"
        titleColor={colors.white}
        backgroundColor= {colors.darkGreen}
        openAction = {() => props.openPage("pageFour")}
        isOpen = {props.pageFour}>
      <SiteTitle type="subHeading" style={{color: "white", fontSize: "6vw", fontFamily:  "'Lexend Exa', sans-serif"}}> Find me here </SiteTitle>
    <Links>
      <StyledA target="_blank" href="https://github.com/anthoasho/" > <TiSocialGithubCircular/></StyledA>
      <StyledA target="_blank" href="https://www.linkedin.com/in/anthony-ashurst-01495b170/"> <TiSocialLinkedinCircular /> </StyledA>
      <StyledA target="_blank" href="mailto:anthonyrashurst@gmail.com"> <TiMail /> </StyledA>
    </Links>
    </Page>
    </ProjectLayoutStyle>
  )

}

let StyledA = styled.a`
  width: 300px;
  height: 300px;
  border: 10px solid ${colors.orange};
  line-height: 300px;
  display: flex;
  margin: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px #00000044;
  cursor: pointer;
  flex-basis: 350px;
  transition: all 0.3s ease;
  color: white;
  :hover{
    transform: translateY(1px);
    box-shadow: 0px -2px 4px #FFFFFF20;
    border: 9px solid ${colors.darkBlue};
    padding: 1px;
    border-radius: 5%;
    color: ${colors.darkBlue}
  }
  :active{
    transform: translateY(1px);
    box-shadow:  0px -2px 4px #00000080;
    border: 9px solid ${colors.lightBlue};
    padding: 1px;
  }
  > svg {
    width: 100%;
    height: 100%;
    line-height: 14rem;
  }
  &:last-child{
    > svg{
      transform: translateY(-20px);

    }
  }
  @media only screen and (max-width: 800px) {
    max-width: 100px;
    max-height: 100px;

    &:last-child{
      > svg{
        transform: translateY(-5px);

      }
  }


`
let Links = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
color: ${colors.white};
font-size: 14rem;
display: flex;
justify-content: center;
align-content: flex-start;
-webkit-flex-flow: row wrap;
flex-flow: row wrap;
`





let GraduatedDurham = styled.div`
  opacity: 0.8;
  transform: translateY(50px) rotateZ(15deg)  ;
  width: 45%;
  position: relative;
  align-self: flex-start;
  flex-basis: 400px;
  height: 100%;
transition: all 1s ease;
  @media only screen and (max-width: 800px) {
    transform: translateY(200%) translateX(75%) rotateZ(45deg);
  }
`

let DurhamLogo = styled.img`
  width: 350px;
  height: 200px;
  transform: rotateZ(-90deg);
  position: absolute;
  right: 220px;
  top: 100px;
`
let Graduate = styled.img`
  width: 350px;
  height:200px;
  transform: rotateZ(-90deg);
  position: absolute;
  right:250px;
  top: 200px;
`
let Polaroid = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  right: 0;
  top: 0;
  border: 10px solid white;
  border-bottom: 70px solid white;
  /* transform: rotateZ(95deg); */
  background-image: url(${SocialMe});
  background-position: center;
  background-size: cover;
  box-shadow:0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
  ::after {
    content: "Yoyogi park";
    font-family: 'Kaushan Script', cursive;
    position: absolute;
    width: 100%;
    bottom: -18%;
    font-size: 2.2rem;
    left: 0;
    text-align: center;
    color: ${colors.black};
    filter: blur(0.1px) drop-shadow(4px 1px 1px #00000022);
  }
`

export default ProjectLayout

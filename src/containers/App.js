import React ,{Component} from 'react';
import Landing from "./Landing";
import Project from "./Project";
import SmallProject from "./SmallProject";
import ProjectLayout from "./ProjectLayout";
import Page from "./Page";
import {colors} from "../common/Colors";
import styled from "styled-components";
import './App.css';
const initialState = {
  pageOne: false,
  pageTwo: false,
  pageThree: false,
  pageFour: false,
  height: `100vh`
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = initialState;
    this.openPage = this.openPage.bind(this)
  }
  openPage(page){
    this.setState({
      ...initialState,
      [page]: !this.state[page]
    })
  }
  componentDidMount(){
    this.setState({
      ...this.state,
      height: `${window.innerHeight * 0.01}px`
    })
  }
  render(){

    return (
      <Container height = {this.state.height}>
        <Landing {...this.state} onClick ={() => this.setState(initialState)}/>
        <ProjectLayout {...this.state} openPage = {this.openPage} / >
      </Container>
    );
  }
}


let Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: calc(100vh - ${60 * 4}px);
@media only screen and (max-width: 800px){

  height: calc(100vh - ${(60*5)}px);

}
`

export default App;

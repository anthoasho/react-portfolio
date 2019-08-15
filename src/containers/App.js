import React ,{Component} from 'react';
import Landing from "./Landing";
import ProjectLayout from "./ProjectLayout";
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
height: 100%;
@supports (-webkit-appearance:none) {
.os-android & {
  min-height: calc(100vh - 56px);
}
`

export default App;

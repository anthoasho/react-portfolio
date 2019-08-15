import React, {Component} from "react";
import {colors} from "../common/Colors";
import Title from "../common/Title";
import styled from "styled-components";

let PageTitle = styled(Title)`
      font-size: 30px;
      color: ${colors.white};
      padding-right: 20px;
      margin: 0;
      text-shadow: 1px 2px #00000044;
      font-family: 'Lexend Exa', sans-serif;
      text-align: right;
      cursor: pointer;
      height: 60px;
      line-height: 60px;
      text-align: right;
      @media only screen and (max-width: 800px) {
        font-size: 15px;
        width: auto;
        height: 40px;
        line-height: 40px;

      }

`

let PageLayout = styled.div`
  background: ${props => props.backgroundColor};
  width: 100%;
  margin-top: ${ props => props.paddingTop ? "100vh" : "0"};
  box-shadow: 0px -1px 3px  #00000040;
  text-align: right;
`
class Page extends Component{
  constructor(props){
    super(props);
    this.state = {showContent: false}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      showContent: !this.state.showContent
    })
  }
  render(){
  return(
    <PageLayout backgroundColor ={this.props.backgroundColor} paddingTop={this.props.paddingTop}>
    <PageTitle onClick={this.props.openAction}> {this.props.title} </PageTitle>
      <PageContents isOpen={this.props.isOpen}>
      {this.props.children}
      </PageContents>
    </PageLayout>
  )
  }
}



let PageContents = styled.div`
              padding: 0;
              max-height: ${props => props.isOpen ? "calc(100vh - " + (60*5).toString() +"px)" : "0"};
              min-height: ${props => props.isOpen ? "calc(100vh - " + (60*5).toString() +"px)" : "0"};
              display: flex;
              align-items: center;
              overflow: hidden;
              overflow-y: auto;
              justify-content: space-around;
              flex-wrap: wrap;
              max-width: 100%;
              width: 100%;
              transition: all 0.45s ease;

              @media only screen and (max-width: 800px) {

              max-height: ${props => props.isOpen ? "calc(100vh - " + ((40*5) + 56).toString() +"px)" : "0"};
              min-height: ${props => props.isOpen ? "calc(100vh - " + ((40*5) + 56).toString() +"px)" : "0"};
            }
`
export default Page

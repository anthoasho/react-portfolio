import {colors} from "./Colors"
import styled from "styled-components";


let Title = styled.h1`
margin: 0;
`

export let SiteTitle = styled(Title)`
color: white;
text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.15);
font-family: 'Kaushan Script', cursive;
font-size: ${props => props.condition ? "30px" : "10vw"};

margin: 0px;
position: ${props => props.condition ? "absolute" : "static"};
top: 0;
right: 0;
margin-right: 20px;
transition: all 0.3s ease;
cursor: pointer;
@media only screen and (max-width: 800px) {
  text-align: center;
  font-size: ${props => props.condition ? "20px" : "10vw"};

}
`

export let AboutTitle = styled(Title)`
color: ${colors.white};
font-size: 5rem;
text-align: left;
top:-2.5rem;
left: 0;
opacity: 0.8;
text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2);


`

export default Title;

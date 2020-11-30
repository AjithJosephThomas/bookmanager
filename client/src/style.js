import styled from 'styled-components';
import { Link } from "react-router-dom";
import Select from "react-select";
const size = {
    mobile: "425px",
    tablet: "768px",
    desktop: "1024px",
  };
  
  const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
  };

export const Navbar = styled.div`
  position:absolute;
  top:10px;
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  padding: 0 10px;
  .nav-menu {
      list-style-type:none;
      margin: 2em 0;
      li {
        @media ${device.desktop} {
            display:inline;
          }
         
        a {
            color:#fff;
            padding: 1em;
            padding: 1em 1em 0.25em 1em;
            text-decoration: none;
            margin-right: 10px;
            border-bottom: 1px dashed;
            display:block;
            @media ${device.desktop} {
                display:inline;
              }
        }
      }
  }
`;
export const ResultList = styled.ul`
display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: stretch;
    list-style-type:none;
    padding-inline-start:0;
    li{
        display:block;
        padding: 10px;
        margin:5px;
        border-bottom: 1px dashed #fff;
        text-align:center;
        a{
            text-decoration:none;
            color:#fff;
        }
    }
`;
export const Button = styled.button`
    border-radius: 5px;
    border: 1px solid #fff;
    font-size: 1em;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    padding: 5px 10px;
    text-decoration:none;
  &:disabled {
    cursor: default;
  }
`;
export const Input = styled.input.attrs({ 
    type: 'submit',
    value: 'Submit'
  })`
  border-radius: 5px;
  border: 1px solid #fff;
  font-size: 1em;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  padding: 5px 10px;
  text-decoration:none;
  &:disabled {
    cursor: default;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 5px;
  border: 1px solid #fff;
  font-size: 1em;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  padding: 5px 10px;
  text-decoration:none;
  &:disabled {
    cursor: default;
  }
`;
export const StyledSelect = styled(Select)`
  background:none;
  color:#000;
`;

export const Form = styled.form`
margin:20px;
label{
    margin-top:10px;
}
 input[type="text"] {
     width:100%;
     line-height:20px;
 }
 input[type="submit"]{
     margin-top:10px;
     padding:10px;
     display:block;
     margin-left:auto;
     margin-right:auto;
     background:transparent;
     border:1px solid #fff;
     border-radius:5px;
     color:#fff;
     width: 100%;
     @media ${device.desktop} {
        width:auto;
      }

 }
`;
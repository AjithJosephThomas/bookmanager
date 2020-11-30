import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    font-size: 15px;
    background-color: #003366;
    padding: 0;
    margin: 0;
    color: white;
    #book-manager{
      height:100%;
      display:flex;
      flex-start:top;
      flex-direction:column;
      justify-content:center;
      align-items:center;
  }
  dl {
    text-align: left;
    display: flex;
    flex-flow: row wrap;
    border: 1px dashed #fff;
    padding:10px;
  }
  dt {
    flex-basis: 20%;
    padding: 2px 4px;
   
    color: #fff;
    font-weight:bold;
  }
  dd {
    flex-basis: 70%;
    flex-grow: 1;
    margin: 0;
    
    padding: 2px 4px;
  }
`;

export default GlobalStyle;

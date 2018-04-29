import React from 'react';

import styled from 'styled-components';

const Foo = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #F5F5F5;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <Foo>
      <span style={{fontSize: 24, textAlign: 'center', margin: 'auto', display: 'block'}}>Video search on <i style={{color: 'rgb(251,0,0)'}} className="fab fa-youtube"></i> By <a style={{color: 'black'}} href="http://luisrojas.me" target="_blank">Rojas</a></span>
    </Foo>
  )
}

export default Footer;
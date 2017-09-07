import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  font-family: 'Playfair Display', serif;
  width: 95%;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: rgba(24, 149, 97, 0.73);
  box-shadow: 0px 1px 6px black;
  a{
    text-decoration: none;
    margin: 0 5px;
    &:visited{
      color: white;
    }
  }
`

const GlobalNav = () => {
  return (
    <Nav>
      <Link to="/">
        <h1>Creatures</h1>
      </Link>
      <div>
        <Link to="/creature/1">Creatures</Link>
      </div>
    </Nav>
  );
};

export default GlobalNav;
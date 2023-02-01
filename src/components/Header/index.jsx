import React from 'react'
import { StyledHeader, Nav } from '../styles/Header.styled'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Link to={`/`}>Home</Link>
        <Link to={`/page1`}>Page1</Link>
        <Link to={`/page2`}>Page2</Link>
      </Nav>
    </StyledHeader>
  )
}

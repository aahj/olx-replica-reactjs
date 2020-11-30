import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import '../style.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar className='navigation' bg="white" expand="lg">
        <Navbar.Brand>All Categories</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className='navlink-color d-inline p-2' to='/mobile-phones'>Mobile Phones</NavLink>
            <NavLink className='navlink-color d-inline p-2' to='/cars'>Cars</NavLink>
            <NavLink className='navlink-color d-inline p-2' to='/motorcycles'>Motorcycles</NavLink>
            <NavLink className='navlink-color d-inline p-2' to='/houses'>Houses</NavLink>
            <NavLink className='navlink-color d-inline p-2' to='/tv-audio-video'>TV-Audio-Video</NavLink>
            <NavLink className='navlink-color d-inline p-2' to='/tablets'>Tablets</NavLink>        
            <NavLink className='navlink-color d-inline p-2' to='/lands-and-plots'>Land & Plots</NavLink>
          </Nav>          
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header;
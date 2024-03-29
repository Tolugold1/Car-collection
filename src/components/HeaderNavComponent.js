import React, { useState } from 'react';
import {  Navbar, NavbarBrand, Nav, Collapse, NavItem, NavLink, NavbarToggler  } from 'reactstrap';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <div>
      <Navbar expand='md' className='navhead'>
        <NavbarBrand href='/'>
          <img src='../assets/carimage/carlogo.jpeg' width='50' alt='site logo'/>
        </NavbarBrand>
        <div className=' mr-3 ml-3 mt-3'><p>Get latest car updates</p></div>
        <NavbarToggler onClick={toggle}>
          <span className='fa fa-ellipsis-v fa-lg'></span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/Home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/Cars'>Cars</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default HeaderNav;
import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import './Header.css';
export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className='header'>
        <Container  className='headerNavbar'>
          <Navbar.Brand href="#home">Portfólio de BrunoJLee</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Projetos" id="basic-nav-dropdown">
                <NavDropdown.Item target="_blank" href="https://github.com/brunojlee">
                  Repositório do GitHub
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item target="_blank" href="https://brunojlee.github.io/ecommerce/">Ecommerce by JLee</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://brunojlee.github.io/pixels-art/">Pixels Art</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://brunojlee.github.io/meme-generator/">Meme Generator</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://brunojlee.github.io/mistery-letter/">Mistery Letter</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://brunojlee.github.io/todo-list/">Todo List</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://brunojlee.github.io/color-guess/">Color Guess</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          
            <Navbar.Brand href="https://api.whatsapp.com/send?phone=5567999853296&text=Ol%C3%A1+gostaria+de+ser+atendido%28a%29" target="_blank" className="justify-content-end">
              <BsWhatsapp size={30} />
            </Navbar.Brand>
            <Navbar.Brand href="https://www.linkedin.com/in/brunoroja/" target="_blank">
              <BsLinkedin size={30} />
            </Navbar.Brand>
            <Navbar.Brand href="https://www.instagram.com/brunojlee/" target="_blank">
              <BsInstagram size={30} />
            </Navbar.Brand>
            <Navbar.Brand href="https://www.facebook.com/brunojlee/" target="_blank">
              <BsFacebook size={30} />
            </Navbar.Brand>
            <Navbar.Brand href="https://github.com/brunojlee" target="_blank">
              <BsGithub size={30} />
            </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

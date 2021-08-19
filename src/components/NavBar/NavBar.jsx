import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import { classes } from 'istanbul-lib-coverage';
import styles from './NavBar.module.css'; 
import {LinkContainer} from 'react-router-bootstrap'


const NavBar = props => {
    return (
    <Navbar bg="dark" variant="dark"  expand='sm' fixed='top'>
    <Container className={styles.firstNav}>
    <Navbar.Brand href="#home">KevDevelops</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/"  className={styles.item}>Home</Nav.Link>
      <LinkContainer to="/about">

      <Nav.Link className={styles.item}>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/portfolio">

      <Nav.Link className={styles.item}>Portfolio</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/blog">

      <Nav.Link className={styles.item}>Blog</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">

      <Nav.Link className={styles.item}>Contact</Nav.Link>
      </LinkContainer>
    </Nav>
        <Nav>
          <Nav.Link href="#home" className={styles.iconSpacing} >
          <img src={facebook} alt="" className={styles.icons}/>
          </Nav.Link>
          <Nav.Link href="#home" className={styles.iconSpacing}>
          <img src={linkedin} alt="" className={styles.icons}/>
          </Nav.Link>
          <Nav.Link href="#home" className={styles.iconSpacing}>
          <img src={twitter} alt="" className={styles.icons}/>
          </Nav.Link>
       
        </Nav>
        </Container>
  </Navbar>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;